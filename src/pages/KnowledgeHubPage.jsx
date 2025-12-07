import React,{useState} from 'react'
import WeaponStats from '../knowledge/WeaponStats'
import MapGuide from '../knowledge/MapGuide'

export default function KnowledgeHubPage(){
    let [activeTab,setActiveTab]=useState('weapons')

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-28">
            <div className="py-10 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Knowledge Hub</h1>
                <p className="text-gray-300 text-lg mb-8">Improve your BGMI skills with weapon stats & map strategies.</p>

                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={()=>setActiveTab('weapons')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${activeTab==='weapons'?'bg-[#f7b731] text-black':'bg-[#0f0f0f] text-gray-300 border border-[#222222] hover:border-[#f7b731]'}`}
                    >
                        Weapon Stats
                    </button>
                    <button
                        onClick={()=>setActiveTab('maps')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${activeTab==='maps'?'bg-[#f7b731] text-black':'bg-[#0f0f0f] text-gray-300 border border-[#222222] hover:border-[#f7b731]'}`}
                    >
                        Map Guide
                    </button>
                </div>
            </div>

            {activeTab==='weapons'?<WeaponStats />:<MapGuide />}
        </div>
    )
}
