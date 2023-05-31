import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import cloud from '../images/Cloud.jpg';
import git from '../images/Git.jpg'
import ibm from '../images/IBM Project Certificate.jpg'
import ncc from '../images/NCC.jpg'
import tcr from '../images/TCR certificate.png'
import '../styles/achv.css'


export default function Acheivements() {
  return (
    <div className='outer--ach'>
      <Navbar/>
      <h2 style={{textAlign:"center"}}>Here are my acheivements</h2>
      <div className="inner--ach">
        
        <div className="inner--ach1">
          <Cards img = {cloud}/>
          <Cards img = {git}/>
          <Cards img = {git}/>
        </div>
        <div className="inner--ach2">
          <Cards img = {ibm}/>
          <Cards img = {tcr}/>
          <Cards img = {ncc}/>
        </div>
      </div>
    </div>
  )
}
