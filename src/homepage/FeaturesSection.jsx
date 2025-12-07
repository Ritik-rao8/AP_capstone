import React from 'react'

export default function FeaturesSection(){
    let features=[
        {
            icon:'👥',
            title:'Find Perfect Teammates',
            description:'Search players by role, rank, KD, device, and playstyle.'
        },
        {
            icon:'📝',
            title:'Create Your BGMI Profile',
            description:'Showcase your IGN, stats, sensitivity, role, and gameplay style.'
        },
        {
            icon:'📚',
            title:'Learn & Improve',
            description:'Access guides, tips, and pro-level strategies in the Knowledge Hub.'
        }
    ]

    return (
        <section className="w-full bg-[#0a0a0a] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Why Choose BGMI Hub?</h2>
                    <p className="text-gray-400 text-sm md:text-base">Everything you need to team up and dominate the battleground.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature,index)=>(
                        <div key={index} className="bg-[#141414] border border-[#f7b731]/20 rounded-lg p-6 hover:scale-105 hover:border-[#f7b731] transition transform">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-[#f7b731] mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
