import React from 'react'
import HeroSection from '../homepage/HeroSection'
import FeaturesSection from '../homepage/FeaturesSection'
import HowItWorks from '../homepage/HowItWorks'
import CTAFindTeammates from '../homepage/CTAFindTeammates'

export default function HomePage(){
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <CTAFindTeammates />
        </>
    )
}
