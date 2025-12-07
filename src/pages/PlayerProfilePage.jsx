import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'

export default function PlayerProfilePage(){
    let {id}=useParams()
    let [player,setPlayer]=useState(null)
    let [loading,setLoading]=useState(true)
    let [error,setError]=useState(null)

    useEffect(()=>{
        fetchPlayerProfile()
    },[id])

    async function fetchPlayerProfile(){
        setLoading(true)
        setError(null)
        try{
            let response=await fetch(`${import.meta.env.VITE_API_URL}/api/profile/${id}`)
            if(response.ok){
                let data=await response.json()
                setPlayer(data)
            }else{
                setError('Player not found')
            }
        }catch(err){
            console.error('Error fetching player:',err)
            setError('Failed to load player profile')
        }
        setLoading(false)
    }

    if(loading){
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#141414] pt-28 px-6 py-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#0f0f0f] border border-[#222222] rounded-2xl p-8 animate-pulse">
                        <div className="h-8 bg-gray-800 rounded mb-4 w-1/3"></div>
                        <div className="h-4 bg-gray-800 rounded mb-2 w-1/2"></div>
                        <div className="h-4 bg-gray-800 rounded w-2/3"></div>
                    </div>
                </div>
            </div>
        )
    }

    if(error || !player){
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#141414] pt-28 px-6 py-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#0f0f0f] border border-[#222222] rounded-2xl p-12">
                        <p className="text-gray-400 text-lg mb-4">😔 {error || 'Player not found'}</p>
                        <Link to="/find-players" className="inline-block px-6 py-2 bg-[#f7b731] text-black font-semibold rounded-lg hover:bg-[#f7b731]/90 transition">
                            Back to Find Teammates
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#141414] pt-28 px-6 py-10">
            <div className="max-w-4xl mx-auto">
                <Link to="/find-players" className="inline-flex items-center text-gray-400 hover:text-[#f7b731] transition mb-6">
                    ← Back to Find Teammates
                </Link>

                <div className="bg-[#0f0f0f] border border-[#222222] rounded-2xl p-8">
                    <div className="flex items-start gap-6 mb-8">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#f7b731]/30 to-[#f7b731]/10 flex items-center justify-center text-5xl flex-shrink-0">
                            🎮
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-white mb-2">{player.ign}</h1>
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                <span className="px-3 py-1 bg-[#f7b731]/20 text-[#f7b731] rounded-full font-semibold">{player.rank}</span>
                                <span className="px-3 py-1 bg-[#0a0a0a] text-white rounded-full">{player.role}</span>
                                {player.device && (
                                    <span className="px-3 py-1 bg-[#0a0a0a] text-gray-300 rounded-full">{player.device}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {player.kd && (
                            <div className="bg-[#0a0a0a] rounded-xl p-4 text-center">
                                <p className="text-gray-400 text-sm mb-1">K/D Ratio</p>
                                <p className="text-2xl font-bold text-[#f7b731]">{player.kd}</p>
                            </div>
                        )}
                        {player.level && (
                            <div className="bg-[#0a0a0a] rounded-xl p-4 text-center">
                                <p className="text-gray-400 text-sm mb-1">Level</p>
                                <p className="text-2xl font-bold text-white">{player.level}</p>
                            </div>
                        )}
                        {player.sensitivity && (
                            <div className="bg-[#0a0a0a] rounded-xl p-4 text-center">
                                <p className="text-gray-400 text-sm mb-1">Sensitivity</p>
                                <p className="text-xl font-bold text-white">{player.sensitivity}</p>
                            </div>
                        )}
                        <div className="bg-[#0a0a0a] rounded-xl p-4 text-center">
                            <p className="text-gray-400 text-sm mb-1">Role</p>
                            <p className="text-xl font-bold text-white">{player.role}</p>
                        </div>
                    </div>

                    {player.about && (
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-white mb-3">About</h2>
                            <p className="text-gray-300 leading-relaxed bg-[#0a0a0a] rounded-xl p-4">{player.about}</p>
                        </div>
                    )}

                    {(player.phone || player.discordId) && (
                        <div className="border-t border-[#222222] pt-6">
                            <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {player.phone && (
                                    <div className="bg-[#0a0a0a] rounded-xl p-4 flex items-center gap-3">
                                        <span className="text-2xl">📱</span>
                                        <div>
                                            <p className="text-gray-400 text-xs mb-1">Phone</p>
                                            <p className="text-white font-semibold">{player.phone}</p>
                                        </div>
                                    </div>
                                )}
                                {player.discordId && (
                                    <div className="bg-[#0a0a0a] rounded-xl p-4 flex items-center gap-3">
                                        <span className="text-2xl">💬</span>
                                        <div>
                                            <p className="text-gray-400 text-xs mb-1">Discord</p>
                                            <p className="text-white font-semibold">{player.discordId}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <Link to="/find-players" className="inline-block px-8 py-3 bg-[#f7b731] text-black font-semibold rounded-full hover:bg-[#f7b731]/90 hover:scale-105 transition-all duration-200">
                        Find More Teammates
                    </Link>
                </div>
            </div>
        </div>
    )
}
