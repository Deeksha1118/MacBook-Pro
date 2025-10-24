import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef();
    
    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.playbackRate = 1;  //to increase the speed of the video
        }
    }, []);

    return (
        <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
        <button>Buy</button>
        <p>From ₹169900.00* or ₹13325.00/mon. for 12 months</p>
        </section>
    )
}

export default Hero
