import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import bgImage1 from '../assets/wp7550163-pubg-pc-4k-wallpapers.jpg'
import bgImage2 from '../assets/wp7550177-pubg-pc-4k-wallpapers.jpg'
import bgImage3 from '../assets/wp7550805-pubg-pc-4k-wallpapers.jpg'
import bgImage4 from '../assets/wp5119089-pubg-desktop-wallpapers.jpg'

export default function HeroSection(){
    let [showSuccess,setShowSuccess]=useState(false)
    let [userName,setUserName]=useState('')
    let [isLoggedIn,setIsLoggedIn]=useState(false)
    let [currentImageIndex,setCurrentImageIndex]=useState(0)
    let [isPlaying,setIsPlaying]=useState(true)

    let bgImages=[bgImage1,bgImage2,bgImage3,bgImage4]

    useEffect(()=>{
        if(!isPlaying)return
        let interval=setInterval(()=>{
            setCurrentImageIndex(prev=>(prev+1)%bgImages.length)
        },8000)
        return ()=>clearInterval(interval)
    },[isPlaying])

    useEffect(()=>{
        let token=localStorage.getItem('token')
        if(token){
            setIsLoggedIn(true)
        }

        let urlParams=new URLSearchParams(window.location.search)
        let token2=urlParams.get('token')
        let name=urlParams.get('name')
        let email=urlParams.get('email')
        let error=urlParams.get('error')

        if(error){
            alert('Google authentication failed. Please try again.')
            window.history.replaceState({},document.title,'/')
        }else if(token2 && name && email){
            localStorage.setItem('token',token2)
            localStorage.setItem('user',JSON.stringify({name,email}))
            
            setUserName(name)
            setShowSuccess(true)
            setIsLoggedIn(true)
            
            window.history.replaceState({},document.title,'/')
            
            setTimeout(()=>{
                setShowSuccess(false)
            },5000)
        }
    },[])

    return (
        <section 
            className="h-[85vh] relative overflow-hidden flex items-center justify-center"
            onMouseEnter={()=>setIsPlaying(false)}
            onMouseLeave={()=>setIsPlaying(true)}
        >
            <div className="absolute inset-0">
                {bgImages.map((img,i)=>(
                    <div
                        key={i}
                        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${i===currentImageIndex?'opacity-100':'opacity-0'}`}
                        style={{backgroundImage:`url(${img})`}}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
            </div>

            {showSuccess && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-900/90 border border-green-700 text-green-100 px-6 py-3 rounded-lg shadow-lg">
                    Welcome back, {userName}! You're successfully logged in.
                </div>
            )}

            <div className="relative z-10 max-w-4xl text-center px-6">
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-white drop-shadow-md">
                    <span className="block">Find Your Perfect <span className="text-[#f7b731]">BGMI Squad</span></span>
                </h1>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">Team up. Rank up. Dominate together.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/find-players" className="inline-block rounded-xl px-6 py-3 font-semibold text-black bg-[#f7b731] shadow-md hover:scale-105 transition" aria-label="Find Players">Find Players</Link>
                    {isLoggedIn && (
                        <Link to="/profile" className="inline-block rounded-xl px-6 py-3 font-semibold text-white border-2 border-[#f7b731] hover:bg-[#f7b731] hover:text-black transition" aria-label="Create Profile">Your Profile</Link>
                    )}
                </div>
            </div>
        </section>
    )
}
