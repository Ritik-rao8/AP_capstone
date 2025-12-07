import React,{useState} from 'react'

export default function WeaponStats(){
    let [selectedCategory,setSelectedCategory]=useState('Assault Rifles')

    let weaponCategories=[
        {
            category:'Assault Rifles',
            weapons:[
                {name:'M416',description:'Versatile AR with low recoil and high fire rate',damage:41,fireRate:'High',recoil:'Low',magazine:30},
                {name:'AKM',description:'High damage AR with strong recoil control needed',damage:47,fireRate:'Medium',recoil:'High',magazine:30},
                {name:'M762',description:'High damage with intense recoil pattern',damage:47,fireRate:'High',recoil:'High',magazine:30},
                {name:'SCAR-L',description:'Balanced AR with stable recoil control',damage:41,fireRate:'Medium',recoil:'Low',magazine:30},
                {name:'Groza',description:'Powerful airdrop AR with high damage output',damage:49,fireRate:'High',recoil:'Medium',magazine:30},
                {name:'AUG A3',description:'Accurate AR with 5.56mm rounds and low recoil',damage:41,fireRate:'High',recoil:'Low',magazine:30},
                {name:'FAMAS',description:'Burst-fire AR with high damage potential',damage:38,fireRate:'Very High',recoil:'Medium',magazine:25},
                {name:'QBZ',description:'Chinese AR with balanced stats and stability',damage:45,fireRate:'Medium',recoil:'Low',magazine:30},
                {name:'M16A4',description:'Burst-fire AR with excellent accuracy',damage:41,fireRate:'High',recoil:'Low',magazine:30}
            ]
        },
        {
            category:'Sniper Rifles',
            weapons:[
                {name:'AWM',description:'Most powerful sniper with one-shot headshot capability',damage:105,fireRate:'Low',recoil:'High',magazine:5},
                {name:'KAR98K',description:'Classic bolt-action sniper for long-range eliminations',damage:75,fireRate:'Low',recoil:'Medium',magazine:5},
                {name:'M24',description:'Reliable bolt-action with good damage output',damage:79,fireRate:'Low',recoil:'Medium',magazine:5},
                {name:'AMR',description:'Anti-Material Rifle with devastating damage',damage:115,fireRate:'Very Low',recoil:'High',magazine:5},
                {name:'Mosin Nagant',description:'Powerful bolt-action rifle with high damage',damage:79,fireRate:'Low',recoil:'Medium',magazine:5},
                {name:'Win94',description:'Lever-action rifle for close to mid-range combat',damage:66,fireRate:'Medium',recoil:'Low',magazine:8},
                {name:'DSR',description:'High-precision sniper rifle with consistent damage',damage:95,fireRate:'Low',recoil:'High',magazine:5}
            ]
        },
        {
            category:'SMG',
            weapons:[
                {name:'UMP45',description:'Reliable SMG with low recoil for close combat',damage:39,fireRate:'High',recoil:'Low',magazine:25},
                {name:'Vector',description:'Fastest fire rate SMG for close-range dominance',damage:31,fireRate:'Very High',recoil:'Medium',magazine:19},
                {name:'Uzi',description:'Lightweight SMG with fast fire rate',damage:26,fireRate:'Very High',recoil:'Medium',magazine:25},
                {name:'P90',description:'High capacity SMG with stable fire rate',damage:34,fireRate:'High',recoil:'Low',magazine:50},
                {name:'PP-Bizon',description:'Large magazine SMG for extended firefights',damage:35,fireRate:'High',recoil:'Low',magazine:53},
                {name:'MP5K',description:'Compact SMG with excellent control',damage:33,fireRate:'High',recoil:'Low',magazine:30}
            ]
        },
        {
            category:'Shotguns',
            weapons:[
                {name:'S12K',description:'Auto shotgun for aggressive close combat',damage:22,fireRate:'High',recoil:'Medium',magazine:5},
                {name:'S686',description:'Double-barrel shotgun with devastating damage',damage:24,fireRate:'Low',recoil:'High',magazine:2},
                {name:'S1897',description:'Pump-action shotgun with consistent damage',damage:26,fireRate:'Low',recoil:'High',magazine:5},
                {name:'DBS',description:'Double-barrel burst shotgun with high damage',damage:26,fireRate:'Medium',recoil:'High',magazine:14},
                {name:'M1014',description:'Semi-auto shotgun with fast follow-up shots',damage:22,fireRate:'High',recoil:'Medium',magazine:7}
            ]
        },
        {
            category:'Light Machine Guns',
            weapons:[
                {name:'M249',description:'Belt-fed LMG with high capacity and sustained fire',damage:45,fireRate:'High',recoil:'Medium',magazine:100},
                {name:'DP-28',description:'Reliable LMG with manageable recoil',damage:51,fireRate:'Medium',recoil:'Low',magazine:47},
                {name:'MG3',description:'High fire rate LMG with large magazine capacity',damage:39,fireRate:'Very High',recoil:'Medium',magazine:75}
            ]
        },
        {
            category:'Throwables',
            weapons:[
                {name:'Frag Grenade',description:'Standard explosive with 5-second fuse',damage:100,fireRate:'N/A',recoil:'N/A',magazine:1},
                {name:'Molotov',description:'Fire bottle for area denial and damage over time',damage:10,fireRate:'N/A',recoil:'N/A',magazine:1},
                {name:'Smoke Grenade',description:'Creates smoke cover for revives and rotations',damage:0,fireRate:'N/A',recoil:'N/A',magazine:1},
                {name:'Stun Grenade',description:'Blinds and deafens enemies temporarily',damage:0,fireRate:'N/A',recoil:'N/A',magazine:1}
            ]
        }
    ]

    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-3">Weapon Stats</h2>
                <p className="text-gray-400 mb-8">Master your arsenal with detailed weapon statistics</p>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {weaponCategories.map((category,index)=>(
                        <button
                            key={index}
                            onClick={()=>setSelectedCategory(category.category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${selectedCategory===category.category?'bg-[#f7b731] text-black':'bg-[#0f0f0f] text-gray-300 border border-[#222222] hover:border-[#f7b731]'}`}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>

                {weaponCategories.filter(cat=>cat.category===selectedCategory).map((category,catIndex)=>(
                    <div key={catIndex}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.weapons.map((weapon,index)=>(
                                <div key={index} className="bg-[#0f0f0f] border border-[#222222] rounded-xl p-6 hover:scale-105 hover:shadow-xl hover:shadow-[#f7b731]/10 transition-all duration-300">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{weapon.name}</h3>
                                        <p className="text-gray-400 text-sm mt-2">{weapon.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-4">
                                        <div className="bg-[#0a0a0a] rounded-lg p-3">
                                            <p className="text-gray-500 text-xs mb-1">Damage</p>
                                            <p className="text-white font-bold">{weapon.damage}</p>
                                        </div>
                                        <div className="bg-[#0a0a0a] rounded-lg p-3">
                                            <p className="text-gray-500 text-xs mb-1">Fire Rate</p>
                                            <p className="text-white font-bold">{weapon.fireRate}</p>
                                        </div>
                                        <div className="bg-[#0a0a0a] rounded-lg p-3">
                                            <p className="text-gray-500 text-xs mb-1">Recoil</p>
                                            <p className={`font-bold ${weapon.recoil==='Low'?'text-green-500':weapon.recoil==='Medium'?'text-yellow-500':weapon.recoil==='High'?'text-red-500':'text-gray-400'}`}>{weapon.recoil}</p>
                                        </div>
                                        <div className="bg-[#0a0a0a] rounded-lg p-3">
                                            <p className="text-gray-500 text-xs mb-1">Magazine</p>
                                            <p className="text-white font-bold">{weapon.magazine}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
