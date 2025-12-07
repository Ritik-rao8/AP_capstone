import React,{useState} from 'react'

export default function FiltersSidebar({filters,onFilterChange,onReset}){
    return (
        <div className="w-64 bg-[#111111] border border-gray-800 rounded-xl p-4 sticky top-4">
            <h3 className="text-white font-semibold mb-4">Filters</h3>
            
            <div className="space-y-4">
                <div>
                    <label className="text-sm text-gray-400 mb-2 block">Search Players</label>
                    <input 
                        type="text"
                        value={filters.search}
                        onChange={e=>onFilterChange('search',e.target.value)}
                        placeholder="Search players..."
                        className="w-full p-2 bg-[#0a0a0a] text-white text-sm rounded border border-gray-700 focus:outline-none focus:border-[#f7b731]"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-400 mb-2 block">Role</label>
                    <select 
                        value={filters.role}
                        onChange={e=>onFilterChange('role',e.target.value)}
                        className="w-full p-2 bg-[#0a0a0a] text-white text-sm rounded border border-gray-700 focus:outline-none focus:border-[#f7b731]"
                    >
                        <option value="">All Roles</option>
                        <option value="IGL">IGL</option>
                        <option value="Fragger">Fragger</option>
                        <option value="Support">Support</option>
                        <option value="Sniper">Sniper</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm text-gray-400 mb-2 block">Rank</label>
                    <select 
                        value={filters.rank}
                        onChange={e=>onFilterChange('rank',e.target.value)}
                        className="w-full p-2 bg-[#0a0a0a] text-white text-sm rounded border border-gray-700 focus:outline-none focus:border-[#f7b731]"
                    >
                        <option value="">All Ranks</option>
                        <option value="Conqueror">Conqueror</option>
                        <option value="Ace">Ace</option>
                        <option value="Crown">Crown</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Platinum">Platinum</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm text-gray-400 mb-2 block">Minimum KD</label>
                    <div className="flex gap-2">
                        <button 
                            onClick={()=>onFilterChange('kd',1)}
                            className={`flex-1 py-1 px-2 text-xs rounded border ${filters.kd===1?'bg-[#f7b731] text-black border-[#f7b731]':'bg-[#0a0a0a] text-gray-300 border-gray-700'}`}
                        >
                            KD &gt; 1
                        </button>
                        <button 
                            onClick={()=>onFilterChange('kd',2)}
                            className={`flex-1 py-1 px-2 text-xs rounded border ${filters.kd===2?'bg-[#f7b731] text-black border-[#f7b731]':'bg-[#0a0a0a] text-gray-300 border-gray-700'}`}
                        >
                            KD &gt; 2
                        </button>
                        <button 
                            onClick={()=>onFilterChange('kd',3)}
                            className={`flex-1 py-1 px-2 text-xs rounded border ${filters.kd===3?'bg-[#f7b731] text-black border-[#f7b731]':'bg-[#0a0a0a] text-gray-300 border-gray-700'}`}
                        >
                            KD &gt; 3
                        </button>
                    </div>
                </div>

                <div>
                    <label className="text-sm text-gray-400 mb-2 block">Sort By</label>
                    <select 
                        value={filters.sort}
                        onChange={e=>onFilterChange('sort',e.target.value)}
                        className="w-full p-2 bg-[#0a0a0a] text-white text-sm rounded border border-gray-700 focus:outline-none focus:border-[#f7b731]"
                    >
                        <option value="newest">Newest</option>
                        <option value="kd">Highest KD</option>
                        <option value="level">Highest Level</option>
                    </select>
                </div>

                <button 
                    onClick={onReset}
                    className="w-full py-2 text-sm border border-[#f7b731] text-[#f7b731] rounded hover:bg-[#f7b731]/10 transition"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    )
}
