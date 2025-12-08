import React,{useEffect,useState} from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileForm from '../components/ProfileForm'

export default function ProfilePage(){
    let [initial,setInitial]=useState(null)
    let [preview,setPreview]=useState(null)
    let [loading,setLoading]=useState(true)
    let [error,setError]=useState('')
    let [deleting,setDeleting]=useState(false)

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

    async function handleDeleteProfile(){
        if(!window.confirm('Are you sure you want to delete your profile? This cannot be undone. Your account will remain active but your profile will be removed from Find Teammates.')){
            return
        }
        
        setDeleting(true)
        setError('')
        
        try{
            let token=localStorage.getItem('token')
            if(!token){
                setError('You must be logged in')
                return
            }
            
            let res=await fetch(`${import.meta.env.VITE_API_URL}/api/profile/me`,{
                method:'DELETE',
                headers:{Authorization:`Bearer ${token}`}
            })
            
            let data=await res.json()
            
            if(!res.ok){
                throw new Error(data.message||'Delete failed')
            }
            
            // Clear profile state
            setInitial(null)
            setPreview(null)
            alert('Profile deleted successfully. You can create a new profile anytime.')
        }catch(err){
            setError(err.message||'Failed to delete profile')
        }finally{
            setDeleting(false)
        }
    }

    return (
        <div className="min-h-screen pt-28 py-10 px-4 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-white text-3xl font-bold">Player Profile</h1>
                    {initial && (
                        <button
                            onClick={handleDeleteProfile}
                            disabled={deleting}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {deleting ? 'Deleting...' : '🗑️ Delete Profile'}
                        </button>
                    )}
                </div>
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
