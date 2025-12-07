import React from 'react'
import {Link} from 'react-router-dom'

export default function CTAFindTeammates(){
    return (
        <section className="w-full bg-[#0a0a0a] py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-[#141414] border border-[#f7b731]/30 rounded-xl p-12 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{background:'radial-gradient(circle at center,#f7b731 0%,transparent 70%)'}}></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Find Your Perfect BGMI Squad?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">Meet players who match your skill, playstyle, and competitive goals.</p>
                        
                        <Link to="/find-players" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-black bg-[#f7b731] hover:scale-105 hover:shadow-[0_0_30px_rgba(247,183,49,0.5)] transition transform">
                            Find Teammates
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
