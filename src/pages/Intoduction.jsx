import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Intro.css'


export default function Intoduction() {
  return (
    <div className='outer--box'>
      <Navbar/>
      <div className="image">
        <img src="../suraj 1.jpg" alt="" />
      </div>
      <div className="inner--box">
          <h2>I'm <font style={{color:"blue"}}>Abhishek</font> Kumar <font style={{color:"red"}}>Tiwari</font></h2>
          <p>I am presuing Batchlor of Technology (B-TECH) in Computer Science from <strong>United College of Engineering and Research, Prayagraj.</strong></p>

          <p>I have done my schooling from <strong>MAHARISHI VIDYA MANDIR</strong> Prayagraj. I had scored '91%' in my high school and '71%' in Intermediate. </p>

          <p>I am a certified <strong>(IBM)</strong> Full Stack developer (MERN). I have the good knowledge of Data Structures and Algorithms and Object oriented programing languages like JAVA and PYTHON, also I have acheived <strong>three stars ✨✨✨ </strong>in problem solving on Hacker Rank and also I have done the internship in Machine Learning from TCR INNOVATION.</p>

          <p>I have been the Campus ambassador of <strong>"TCR INNOVATION".</strong> I am a person with good communication skills and having the good leadership quality.</p>
      </div>
     
    </div>
  )
}
