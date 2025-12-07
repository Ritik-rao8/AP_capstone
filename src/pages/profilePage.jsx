import React,{useEffect,useState} from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileForm from '../components/ProfileForm'

export default function ProfilePage(){
    let [initial,setInitial]=useState(null)
    let [preview,setPreview]=useState(null)
    let [loading,setLoading]=useState(true)
    let [error,setError]=useState('')

    useEffect(()=>{
        async function fetchProfile(){
            setLoading(true)
            setError('')
            try{
                let token=localStorage.getItem('token')
                if(!token){setLoading(false);return}
                let res=await fetch(`${import.meta.env.VITE_API_URL}/api/profile/me`,{headers:{Authorization:`Bearer ${token}`}})
                if(res.ok){
                    let data=await res.json()
                    setInitial(data)
                    setPreview(data)
                }else{
                    setInitial(null)
                }
            }catch(err){setError('Failed to load profile')}
            finally{setLoading(false)}
        }
        fetchProfile()
    },[])

    function handleDone(saved){
        setInitial(saved)
        setPreview(saved)
    }

    return (
        <div className="min-h-screen pt-20 py-10 px-4 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-white text-3xl font-bold mb-8">Player Profile</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                        <ProfileCard profile={preview||initial||{}} />
                    </div>
                    <div className="md:w-2/3">
                        <div className="bg-[#0f0f0f] p-6 rounded-xl border border-[#f7b731]/10">
                            {loading?<div className="text-gray-400">Loading...</div>:(
                                <ProfileForm initial={initial} ondone={handleDone} onChange={setPreview} />
                            )}
                            {error&&<div className="text-red-400 mt-3">{error}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
