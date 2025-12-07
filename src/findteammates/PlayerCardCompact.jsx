import React from 'react'
import {Link} from 'react-router-dom'

export default function PlayerCardCompact({player}){
    return (
        <div className="bg-[#0f0f0f] border border-[#222222] rounded-xl p-5 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#f7b731]/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f7b731]/30 to-[#f7b731]/10 flex items-center justify-center text-3xl">
                    🎮
                </div>
                <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{player.ign}</h3>
                    <p className="text-sm text-[#f7b731]">{player.rank}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                <div className="bg-[#0a0a0a] rounded-lg p-2">
                    <span className="text-gray-500 text-xs block">Role</span>
                    <span className="text-white font-semibold">{player.role}</span>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-2">
                    <span className="text-gray-500 text-xs block">K/D</span>
                    <span className="text-[#f7b731] font-semibold">{player.kd}</span>
                </div>
            </div>

            {player.about && (
                <p className="text-gray-400 text-xs mb-4 line-clamp-2">{player.about}</p>
            )}

            <Link 
                to={`/player/${player.id}`}
                className="block w-full py-2 text-sm text-center bg-[#f7b731] text-black rounded-lg hover:bg-[#f7b731]/90 transition font-medium"
            >
                View Profile
            </Link>
        </div>
    )
}
