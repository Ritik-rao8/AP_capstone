import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import FiltersSidebar from './FiltersSidebar'
import PlayerCardCompact from './PlayerCardCompact'
import Pagination from './Pagination'

export default function FindTeammatesPage(){
    let [filters,setFilters]=useState({
        search:'',
        role:'',
        rank:'',
        kd:0,
        sort:'newest'
    })
    let [players,setPlayers]=useState([])
    let [loading,setLoading]=useState(true)
    let [currentPage,setCurrentPage]=useState(1)
    let [totalPages,setTotalPages]=useState(6)

    useEffect(()=>{
        fetchPlayers()
    },[filters,currentPage])

    async function fetchPlayers(){
        setLoading(true)
        setTimeout(()=>{
            let mockPlayers=[
                {id:1,ign:'Rk_Enzo',rank:'Conqueror',role:'Fragger',kd:3.4},
                {id:2,ign:'Shadow_King',rank:'Ace',role:'IGL',kd:2.8},
                {id:3,ign:'Pro_Sniper',rank:'Crown',role:'Sniper',kd:3.1},
                {id:4,ign:'Rush_Master',rank:'Ace',role:'Fragger',kd:2.5},
                {id:5,ign:'Support_God',rank:'Diamond',role:'Support',kd:2.2},
                {id:6,ign:'Clutch_King',rank:'Conqueror',role:'IGL',kd:3.8}
            ]
            setPlayers(mockPlayers)
            setLoading(false)
        },500)
    }

    function handleFilterChange(key,value){
        setFilters({...filters,[key]:value})
        setCurrentPage(1)
    }

    function handleReset(){
        setFilters({
            search:'',
            role:'',
            rank:'',
            kd:0,
            sort:'newest'
        })
        setCurrentPage(1)
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-20">
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#141414] py-10 px-6 mb-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Find Teammates</h1>
                    <p className="text-gray-400 text-lg">Team up. Rank up. Dominate together.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-10">
                <div className="flex gap-6">
                    <FiltersSidebar 
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        onReset={handleReset}
                    />

                    <div className="flex-1">
                        {loading?(
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1,2,3,4,5,6].map(i=>(
                                    <div key={i} className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 animate-pulse">
                                        <div className="h-12 bg-gray-800 rounded mb-3"></div>
                                        <div className="h-4 bg-gray-800 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                                    </div>
                                ))}
                            </div>
                        ):players.length>0?(
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <p className="text-gray-400 text-lg">No players found. Try adjusting your filters.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-[#141414] border-t border-gray-800 py-10 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">Want others to find you?</h2>
                    <p className="text-gray-400 mb-6">Create your BGMI profile now.</p>
                    <Link 
                        to="/profile"
                        className="inline-block px-8 py-3 bg-[#f7b731] text-black font-semibold rounded-lg hover:scale-105 transition transform"
                    >
                        Create Profile →
                    </Link>
                </div>
            </div>
        </div>
    )
}
