import React,{useState} from 'react'

export default function MapGuide(){
    let maps=[
        {
            name:'Erangel',
            overview:'Classic 8x8km map with diverse terrain including cities, fields, and military bases',
            hotspots:[
                {area:'Pochinki',tip:'Central city with high loot density, expect intense early combat'},
                {area:'School',tip:'Popular hot drop location with quick action and good loot'},
                {area:'Military Base',tip:'Best loot on the map but high risk, great for squads'}
            ],
            rotationTips:[
                'Use vehicles for rotations across large open areas',
                'Follow the river for natural cover during mid-game',
                'Avoid open fields during final circles, stick to compounds',
                'Bridge camping is common, have alternate routes ready'
            ]
        },
        {
            name:'Miramar',
            overview:'Desert 8x8km map with rocky terrain, cities, and long-range combat focus',
            hotspots:[
                {area:'Pecado',tip:'Casino and arena provide excellent loot with vertical gameplay'},
                {area:'Hacienda Del Patron',tip:'Central mansion with high-tier loot and multiple floors'},
                {area:'Los Leones',tip:'Large city with abundant loot spread across many buildings'}
            ],
            rotationTips:[
                'Use terrain elevation for positional advantage',
                'Carry long-range weapons for desert combat',
                'Rocky hills provide excellent cover for rotations',
                'Watch for third-party ambushes in city exits'
            ]
        },
        {
            name:'Sanhok',
            overview:'Fast-paced 4x4km jungle map with quick matches and aggressive gameplay',
            hotspots:[
                {area:'Bootcamp',tip:'Center map location with dense buildings and constant action'},
                {area:'Paradise Resort',tip:'Luxury resort with vertical gameplay and top-tier loot'},
                {area:'Ruins',tip:'Ancient temple complex with close-quarters combat'}
            ],
            rotationTips:[
                'Circles move faster, always plan next rotation early',
                'Dense vegetation provides cover but slows movement',
                'High ground is limited, secure elevated positions quickly',
                'Third-party fights are common due to small map size'
            ]
        }
    ]

    let [selectedMap,setSelectedMap]=useState(maps[0])

    return (
        <section className="py-16 px-6 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-3">Map Guide</h2>
                <p className="text-gray-400 mb-10">Master map rotations and dominate every zone</p>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                        <div className="bg-[#0f0f0f] border border-[#222222] rounded-xl p-4">
                            <h3 className="text-white font-semibold mb-4">Select Map</h3>
                            <div className="flex flex-col gap-2">
                                {maps.map((map,index)=>(
                                    <button
                                        key={index}
                                        onClick={()=>setSelectedMap(map)}
                                        className={`text-left px-4 py-3 rounded-lg transition-all duration-200 ${selectedMap.name===map.name?'bg-[#f7b731] text-black font-semibold':'bg-[#0a0a0a] text-gray-300 hover:bg-[#141414]'}`}
                                    >
                                        {map.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-[#0f0f0f] border border-[#222222] rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-[#f7b731] mb-3">{selectedMap.name}</h3>
                            <p className="text-gray-300 mb-6">{selectedMap.overview}</p>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-4">🎯 Hotspots</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {selectedMap.hotspots.map((spot,index)=>(
                                        <div key={index} className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-4">
                                            <h5 className="text-[#f7b731] font-semibold mb-2">{spot.area}</h5>
                                            <p className="text-gray-400 text-sm">{spot.tip}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">🗺️ Rotation Tips</h4>
                                <ul className="space-y-2">
                                    {selectedMap.rotationTips.map((tip,index)=>(
                                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                                            <span className="text-[#f7b731] mt-1">•</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
