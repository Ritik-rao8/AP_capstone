import { useEffect, useState } from 'react';
import './homepage.css';

const Homepage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="homepage">
            {/* Particle Background */}
            <div className="particle-container">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <section className="hero">
                {/* Background with overlay */}
                <div
                    className="hero-background"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                >
                    <div className="hero-overlay"></div>
                </div>

                {/* Hero Content */}
                <div className="hero-content">
                    {/* Main Heading */}
                    <h1 className="hero-title">
                        Find Your Perfect
                        <br />
                        <span className="gradient-text">BGMI Squad</span>
                    </h1>

                    {/* Subheading */}
                    <p className="hero-subtitle">
                        Connect with skilled players, form your team, and conquer every match. Join thousands of BGMI enthusiasts finding their perfect teammates.
                    </p>

                    {/* Buttons */}
                    <div className="hero-buttons">
                        <button className="btn btn-primary">
                            <span className="btn-text">🎮 Find Players</span>
                            <span className="btn-glow"></span>
                        </button>
                        <button className="btn btn-secondary">
                            <span className="btn-text">👤 Create Profile</span>
                            <span className="btn-glow"></span>
                        </button>
                    </div>

                    {/* Stats Tagline */}
                    <div className="hero-stats">
                        <p className="stats-text">Join 10,000+ BGMI players finding teammates every day</p>
                    </div>
                </div>
            </section>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-dot"></div>
            </div>
        </div>
    );
};

export default Homepage;
