import React from 'react'
import {Link} from 'react-router-dom'

export default function PlayerCardCompact({player}){
    return (
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-[#f7b731] hover:scale-105 transition transform">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#f7b731]/20 flex items-center justify-center text-2xl">
                    🎮
                </div>
                <div>
                    <h3 className="text-white font-semibold">{player.ign}</h3>
                    <p className="text-sm text-gray-400">{player.rank}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                <div>
                    <span className="text-gray-500">Role:</span>
                    <span className="text-[#f7b731] ml-1">{player.role}</span>
                </div>
                <div>
                    <span className="text-gray-500">KD:</span>
                    <span className="text-white ml-1">{player.kd}</span>
                </div>
            </div>

            <div className="flex gap-2">
                <Link 
                    to={`/player/${player.id}`}
                    className="flex-1 py-2 text-xs text-center border border-[#f7b731] text-[#f7b731] rounded hover:bg-[#f7b731]/10 transition"
                >
                    View Profile
                </Link>
                <button className="flex-1 py-2 text-xs bg-[#0a0a0a] text-white rounded hover:bg-[#f7b731] hover:text-black transition">
                    Connect
                </button>
            </div>
        </div>
    )
}
