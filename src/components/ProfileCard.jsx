import React from 'react'

export default function ProfileCard({profile}){
    let ign=profile&&profile.ign?profile.ign:'Anonymous'
    let rank=profile&&profile.rank?profile.rank:'Unranked'
    let role=profile&&profile.role?profile.role:'Role'
    let kd=profile&&profile.kd?profile.kd:'0.00'
    let level=profile&&profile.level?profile.level:0
    let device=profile&&profile.device?profile.device:'Unknown'
    let sensitivity=profile&&profile.sensitivity?profile.sensitivity:'Default'
    let about=profile&&profile.about?profile.about:'No bio provided.'
    let phone=profile&&profile.phone?profile.phone:''
    let discordId=profile&&profile.discordId?profile.discordId:''

    return (
        <div className="w-full max-w-md rounded-xl overflow-hidden bg-[#0f0f0f] border border-[#f7b731]/20 p-6">
            <div className="mb-6">
                <h2 className="text-white text-2xl font-semibold">{ign}</h2>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-[#f7b731] font-medium">{rank}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300">{role}</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="p-3 bg-black/40 rounded-lg border border-[#f7b731]/10">
                    <div className="text-yellow-400 text-xl">🔥</div>
                    <div className="text-sm text-gray-300">KD</div>
                    <div className="text-white font-semibold">{kd}</div>
                </div>
                <div className="p-3 bg-black/40 rounded-lg border border-[#f7b731]/10">
                    <div className="text-yellow-400 text-xl">🏆</div>
                    <div className="text-sm text-gray-300">Level</div>
                    <div className="text-white font-semibold">{level}</div>
                </div>
                <div className="p-3 bg-black/40 rounded-lg border border-[#f7b731]/10">
                    <div className="text-yellow-400 text-xl">🎯</div>
                    <div className="text-sm text-gray-300">Role</div>
                    <div className="text-white font-semibold">{role}</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 mb-6">
                <div className="p-3 bg-black/30 rounded-lg border border-[#f7b731]/8">
                    <div className="text-xs text-gray-400">Device</div>
                    <div className="text-white">{device}</div>
                </div>
                <div className="p-3 bg-black/30 rounded-lg border border-[#f7b731]/8">
                    <div className="text-xs text-gray-400">Sensitivity</div>
                    <div className="text-white">{sensitivity}</div>
                </div>
            </div>

            <div>
                <h3 className="text-sm text-gray-400 mb-2">About</h3>
                <p className="text-gray-200 text-sm leading-relaxed bg-black/20 p-3 rounded-lg">{about}</p>
            </div>

            {(phone || discordId) && (
                <div className="mt-6 pt-6 border-t border-[#f7b731]/10">
                    <h3 className="text-sm text-gray-400 mb-3">Contact Information</h3>
                    <div className="space-y-2">
                        {phone && (
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📱</span>
                                <span className="text-gray-400">Phone:</span>
                                <span className="text-white">{phone}</span>
                            </div>
                        )}
                        {discordId && (
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-lg">💬</span>
                                <span className="text-gray-400">Discord:</span>
                                <span className="text-[#f7b731]">{discordId}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
