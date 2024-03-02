import React from 'react'
import './About.css'
import { FaWikipediaW } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import img from "../Images/img1.png"

const About = () => {
  return (
    <>
    <div className='whole'>
        <div className='content'>
            <span>
                <h2>Rebel Poet</h2>
                <h6>Kazi Nazrul Islam is the national poet of Bangladesh who is especially recognized as a Bidrohi Kobi (rebel poet) around the country. Nazrul is a famous poet, musician and philosopher of Bangladesh. The famous poet Nazrul's writings deal with the revolution of that period of the British government. His revolutionary attempt helped him to be a national poet of Bangladesh. He has raised his voice against any kinds of fascism and oppression and got popularity swiftly around the Indian Subcontinent.</h6>
            </span>
            <span>
                <h2>Awesome Writer</h2>
                <h6>Nazrul's writings explored themes such as love, freedom, humanity, and revolution. He opposed all forms of bigotry and fundamentalism, including religious, caste-based and gender-based. Throughout his career, Nazrul wrote short stories, novels, and
essays but is best known for his songs and poems. He pioneered new
music forms such as Bengali ghazals. Nazrul wrote and composed
music for nearly 4,000 songs (many recorded on HMV and
gramophone records), collectively known as Nazrul Geeti.</h6>
            </span>
        </div>
        <div className='image'>
        <img className='imgz' src={img} alt='' />           
        </div>
        <div className='links'>
            <button className='b1'><FaWikipediaW />Learn more</button>
            <button className='b2'><RiYoutubeLine />Videos</button>
            <button className='b3'><FaAmazon />Books</button>
        </div>
    </div> 
    </>
  )
}

export default About
