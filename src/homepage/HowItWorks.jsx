import React from 'react'

export default function HowItWorks(){
    let steps=[
        {
            number:'01',
            icon:'📝',
            title:'Create Your Profile',
            description:'Add your IGN, rank, KD, device, sensitivity, and playstyle.'
        },
        {
            number:'02',
            icon:'🔍',
            title:'Discover Players',
            description:'Use smart filters to find teammates based on skill and playstyle.'
        },
        {
            number:'03',
            icon:'🤝',
            title:'Connect & Team Up',
            description:'View profiles, send requests, and squad up instantly.'
        },
        {
            number:'04',
            icon:'🔥',
            title:'Improve Your Gameplay',
            description:'Explore tips and guides in the Knowledge Hub.'
        }
    ]

    return (
        <section className="w-full bg-[#141414] py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How It Works</h2>
                    <p className="text-gray-400 text-sm md:text-base">Your path to finding the perfect BGMI teammates.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step,index)=>(
                        <div key={index} className="bg-[#0a0a0a] border border-[#f7b731]/30 rounded-lg p-6 hover:scale-105 hover:shadow-lg transition transform" style={{boxShadow:'0 0 20px rgba(247,183,49,0.1)'}}>
                            <div className="text-sm font-bold text-[#f7b731] mb-2">{step.number}</div>
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
