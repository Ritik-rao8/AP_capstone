import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer(){
    return (
        <footer className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#141414] text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-3 text-[#f7b731]">BGMI HUB</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">Your gateway to finding the perfect BGMI teammates.</p>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="text-sm hover:text-[#f7b731] hover:drop-shadow-[0_0_8px_rgba(247,183,49,0.4)] transition">Home</Link>
                            <Link to="/find-players" className="text-sm hover:text-[#f7b731] hover:drop-shadow-[0_0_8px_rgba(247,183,49,0.4)] transition">Find Teammates</Link>
                            <Link to="/profile" className="text-sm hover:text-[#f7b731] hover:drop-shadow-[0_0_8px_rgba(247,183,49,0.4)] transition">Create Profile</Link>
                            <Link to="/knowledge" className="text-sm hover:text-[#f7b731] hover:drop-shadow-[0_0_8px_rgba(247,183,49,0.4)] transition">Knowledge Hub</Link>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-white">Support & Legal</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="text-sm hover:text-[#f7b731] hover:drop-shadow-[0_0_8px_rgba(247,183,49,0.4)] transition">Help / FAQ</Link>
                            <Link to="/" className="text-sm hover:text-[#f7b731] hover:drop-shadow-[0_0_8px_rgba(247,183,49,0.4)] transition">Contact Support</Link>
                            <Link to="/" className="text-sm hover:text-[#f7b731] hover:drop-shadow-[0_0_8px_rgba(247,183,49,0.4)] transition">Privacy Policy</Link>
                            <Link to="/" className="text-sm hover:text-[#f7b731] hover:drop-shadow-[0_0_8px_rgba(247,183,49,0.4)] transition">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#f7b731]/20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <p className="text-center text-xs text-[#b5b5b5]">© 2025 BGMI Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
