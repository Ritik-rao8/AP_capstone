import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import PlayerCardCompact from './PlayerCardCompact'
import Pagination from './Pagination'

export default function FindTeammatesPage(){
    let [filters,setFilters]=useState({
        search:'',
        role:'',
        rank:'',
        kd:'',
        sort:'newest'
    })
    let [allPlayers,setAllPlayers]=useState([])
    let [players,setPlayers]=useState([])
    let [loading,setLoading]=useState(true)
    let [currentPage,setCurrentPage]=useState(1)
    let [totalPages,setTotalPages]=useState(1)
    let playersPerPage=9

    useEffect(()=>{
        fetchPlayers()
    },[filters])

    useEffect(()=>{
        let start=(currentPage-1)*playersPerPage
        let end=start+playersPerPage
        setPlayers(allPlayers.slice(start,end))
    },[currentPage,allPlayers])

    async function fetchPlayers(){
        setLoading(true)
        setCurrentPage(1)
        try{
            let params=new URLSearchParams()
            if(filters.search) params.append('search',filters.search)
            if(filters.role) params.append('role',filters.role)
            if(filters.rank) params.append('rank',filters.rank)
            if(filters.kd) params.append('kd',filters.kd)
            if(filters.sort) params.append('sort',filters.sort)

            let response=await fetch(`${import.meta.env.VITE_API_URL}/api/profile/all?${params.toString()}`)
            if(response.ok){
                let data=await response.json()
                setAllPlayers(data)
                setTotalPages(Math.ceil(data.length/9))
                setPlayers(data.slice(0,9))
            }else{
                console.error('Failed to fetch players')
                setAllPlayers([])
                setPlayers([])
            }
        }catch(error){
            console.error('Error fetching players:',error)
            setAllPlayers([])
            setPlayers([])
        }
        setLoading(false)
    }

    function handleFilterChange(key,value){
        setFilters({...filters,[key]:value})
    }

    function handleReset(){
        setFilters({
            search:'',
            role:'',
            rank:'',
            kd:'',
            sort:'newest'
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#141414] pt-28">
            <div className="py-10 px-6 mb-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Find Teammates</h1>
                    <p className="text-gray-300 text-lg">Team up. Rank up. Dominate together.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-10">
                <div className="bg-[#111111] border border-[#333333] rounded-xl p-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
                        <input 
                            type="text"
                            placeholder="Search IGN, role, device..."
                            value={filters.search}
                            onChange={(e)=>handleFilterChange('search',e.target.value)}
                            className="lg:col-span-2 bg-[#0a0a0a] border border-[#333333] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#f7b731] transition"
                        />

                        <select 
                            value={filters.role}
                            onChange={(e)=>handleFilterChange('role',e.target.value)}
                            className="bg-[#0a0a0a] border border-[#333333] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#f7b731] transition"
                        >
                            <option value="">All Roles</option>
                            <option value="IGL">IGL</option>
                            <option value="Fragger">Fragger</option>
                            <option value="Support">Support</option>
                            <option value="Sniper">Sniper</option>
                        </select>

                        <select 
                            value={filters.rank}
                            onChange={(e)=>handleFilterChange('rank',e.target.value)}
                            className="bg-[#0a0a0a] border border-[#333333] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#f7b731] transition"
                        >
                            <option value="">All Ranks</option>
                            <option value="Conqueror">Conqueror</option>
                            <option value="Ace">Ace</option>
                            <option value="Crown">Crown</option>
                            <option value="Diamond">Diamond</option>
                        </select>

                        <select 
                            value={filters.kd}
                            onChange={(e)=>handleFilterChange('kd',e.target.value)}
                            className="bg-[#0a0a0a] border border-[#333333] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#f7b731] transition"
                        >
                            <option value="">Any KD</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                        </select>

                        <select 
                            value={filters.sort}
                            onChange={(e)=>handleFilterChange('sort',e.target.value)}
                            className="bg-[#0a0a0a] border border-[#333333] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#f7b731] transition"
                        >
                            <option value="newest">Newest</option>
                            <option value="kd">Highest KD</option>
                            <option value="level">Highest Level</option>
                        </select>
                    </div>

                    <div className="mt-3 text-right">
                        <button 
                            onClick={handleReset}
                            className="text-[#f7b731] text-sm hover:underline transition"
                        >
                            Reset filters
                        </button>
                    </div>
                </div>

                {loading?(
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1,2,3,4,5,6].map(i=>(
                            <div key={i} className="bg-[#0f0f0f] border border-[#222222] rounded-xl p-4 animate-pulse">
                                <div className="h-12 bg-gray-800 rounded mb-3"></div>
                                <div className="h-4 bg-gray-800 rounded mb-2"></div>
                                <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                            </div>
                        ))}
                    </div>
                ):players.length>0?(
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {players.map(player=>(
                                <PlayerCardCompact key={player.id} player={player} />
                            ))}
                        </div>
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </>
                ):(
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg mb-2">😔 No players found</p>
                        <p className="text-gray-500 text-sm">Try adjusting your filters</p>
                    </div>
                )}

                <div className="mt-16 bg-gradient-to-r from-[#f7b731]/10 to-[#f7b731]/5 border border-[#f7b731]/20 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Want others to find you?</h2>
                    <p className="text-gray-300 mb-6">Create your BGMI profile now and connect with teammates.</p>
                    <Link 
                        to="/profile" 
                        className="inline-block px-8 py-3 bg-[#f7b731] text-black font-semibold rounded-full hover:bg-[#f7b731]/90 hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                        Create Your Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}
