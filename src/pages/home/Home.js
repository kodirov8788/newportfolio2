import React from 'react'
import Slider from '../../components/slider/Sliders'
import Details from '../../components/details/Details'
import Results from '../../components/results/Results'

function Home() {
    return (
        <div>
            <video loop={true} controls={false} muted={true} autoPlay={true} src="developer.mp4"></video>
            <Slider />
            <Details />
            <Results />
        </div >
    )
}

export default Home