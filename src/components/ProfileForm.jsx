import React,{useEffect,useState} from 'react'

export default function ProfileForm({initial,ondone,onChange}){
    let [form,setForm]=useState({
        ign:'',rank:'',role:'',kd:'',level:'',device:'',sensitivity:'',about:'',phone:'',discordId:''
    })
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState('')
    let [success,setSuccess]=useState('')

    useEffect(()=>{
        if(initial){
            let v={
                ign:initial.ign||'',rank:initial.rank||'',role:initial.role||'',kd:initial.kd||'',level:initial.level||'',device:initial.device||'',sensitivity:initial.sensitivity||'',about:initial.about||'',phone:initial.phone||'',discordId:initial.discordId||''
            }
            setForm(v)
            onChange&&onChange(v)
        }
    },[initial])

    function update(key,value){
        let next={...form,[key]:value}
        setForm(next)
        onChange&&onChange(next)
    }

    function validate(){
        if(!form.ign||!form.rank||!form.role){
            setError('IGN, rank and role are required')
            return false
        }
        if(!form.phone||!form.discordId){
            setError('Phone number and Discord ID are required')
            return false
        }
        if(form.kd&&isNaN(Number(form.kd))){
            setError('KD must be numeric')
            return false
        }
        if(form.level&&isNaN(Number(form.level))){
            setError('Level must be numeric')
            return false
        }
        return true
    }

    async function handleSave(e){
        e&&e.preventDefault()
        setError('')
        setSuccess('')
        if(!validate())return
        setLoading(true)
        try{
            let token=localStorage.getItem('token')
            let res=await fetch(`${import.meta.env.VITE_API_URL}/api/profile/save`,{
                method:'POST',
                headers:{'Content-Type':'application/json',Authorization:token?`Bearer ${token}`:''},
                body:JSON.stringify(form)
            })
            let data=await res.json()
            if(!res.ok)throw new Error(data.message||'Save failed')
            setSuccess('Profile saved')
            ondone&&ondone(data)
        }catch(err){
            setError(err.message||'Error')
        }finally{setLoading(false)}
    }

    function handleReset(){
        if(initial){
            setForm({
                ign:initial.ign||'',rank:initial.rank||'',role:initial.role||'',kd:initial.kd||'',level:initial.level||'',device:initial.device||'',sensitivity:initial.sensitivity||'',about:initial.about||'',phone:initial.phone||'',discordId:initial.discordId||''
            })
        }else{
            setForm({ign:'',rank:'',role:'',kd:'',level:'',device:'',sensitivity:'',about:'',phone:'',discordId:''})
        }
        setError('')
        setSuccess('')
    }

    return (
        <form onSubmit={handleSave} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm text-gray-300">In Game Name</label>
                    <input value={form.ign} onChange={e=>update('ign',e.target.value)} className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]" />
                </div>
                <div>
                    <label className="text-sm text-gray-300">Rank</label>
                    <select value={form.rank} onChange={e=>update('rank',e.target.value)} className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]">
                        <option value="">Select rank</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Crown">Crown</option>
                        <option value="Ace">Ace</option>
                        <option value="Ace Master">Ace Master</option>
                        <option value="Ace Dominator">Ace Dominator</option>
                        <option value="Conqueror">Conqueror</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm text-gray-300">Role</label>
                    <select value={form.role} onChange={e=>update('role',e.target.value)} className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]">
                        <option value="">Select role</option>
                        <option value="IGL">IGL</option>
                        <option value="Fragger">Fragger</option>
                        <option value="Support">Support</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm text-gray-300">KD</label>
                    <input value={form.kd} onChange={e=>update('kd',e.target.value)} className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]" />
                </div>
                <div>
                    <label className="text-sm text-gray-300">Level</label>
                    <input value={form.level} onChange={e=>update('level',e.target.value)} className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]" />
                </div>
                <div>
                    <label className="text-sm text-gray-300">Device</label>
                    <input value={form.device} onChange={e=>update('device',e.target.value)} className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]" />
                </div>
                <div className="md:col-span-2">
                    <label className="text-sm text-gray-300">Sensitivity</label>
                    <select value={form.sensitivity} onChange={e=>update('sensitivity',e.target.value)} className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]">
                        <option value="">Select sensitivity</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Very Low">Very Low</option>
                        <option value="Very High">Very High</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label className="text-sm text-gray-300">About</label>
                    <textarea value={form.about} onChange={e=>update('about',e.target.value)} rows={4} className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]" />
                </div>
                <div>
                    <label className="text-sm text-gray-300">Phone Number</label>
                    <input value={form.phone} onChange={e=>update('phone',e.target.value)} placeholder="+91 1234567890" className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]" />
                </div>
                <div>
                    <label className="text-sm text-gray-300">Discord ID</label>
                    <input value={form.discordId} onChange={e=>update('discordId',e.target.value)} placeholder="username#1234" className="w-full mt-1 p-2 rounded bg-[#0f0f0f] text-white border border-[#f7b731]/20 focus:outline-none focus:ring-2 focus:ring-[#f7b731]" />
                </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
                <button type="submit" disabled={loading} className="px-6 py-2 rounded bg-[#f7b731] text-black font-semibold hover:bg-[#ff8c00] transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed">{loading?'Saving...':'Save Profile'}</button>
                <button type="button" onClick={handleReset} className="px-6 py-2 rounded border border-[#f7b731]/20 text-gray-300 hover:bg-[#f7b731]/10 transition">Reset</button>
            </div>
            {success&&<div className="text-green-400 mt-3">{success}</div>}
            {error&&<div className="text-red-400 mt-3">{error}</div>}
        </form>
    )
}
