import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/edu.css'

export default function Education() {
  return (
    <div className='outer--edu'>
      <Navbar/>
      <div className="image--edu">
        <img src="../ugi.jpg" alt="" />
      </div>
      <div className="inner--edu--univ">
        <h4 style={{color:"blue"}}>University Education</h4>
        <p>Continuing my educational journey, I pursued higher education at [Name of University/College]. I enrolled in the [Name of Program/Major], where I gained in-depth knowledge and expertise in my chosen field. My coursework exposed me to advanced concepts, research methodologies, and real-world applications. I actively engaged in classroom discussions, collaborated on group projects, and sought out opportunities for independent research.</p>
        <h4 style={{marginTop:"20px",color:"blue"}}>Noworthy Accomplishment</h4>
        <p>During my university years, I had the privilege of being involved in various noteworthy accomplishments. I received academic scholarships for my exceptional performance, recognizing my dedication to learning and commitment to excellence. Moreover, I actively participated in research projects, contributing to advancements in my field of study. These experiences not only expanded my knowledge but also sharpened my critical thinking, problem-solving, and research skills.</p>
      </div>
      <div className="image--school">
        <img src="../mvm.jpg" alt="" />
      </div>
      <div className="inner--edu--school">
        <h4 style={{color:"blue"}}>High School</h4>
        <p>In high school, I excelled academically, consistently achieving top grades across multiple subjects. Additionally, I actively participated in extracurricular activities, including debate club, student council, and community service projects. These experiences enhanced my leadership abilities, teamwork skills, and fostered a sense of social responsibility.</p>
        <h4 style={{color:"blue",marginTop:"20px"}}>Secondary Education</h4>
        <p>During my secondary education, I embraced a diverse range of subjects, enabling me to explore various fields of knowledge. I eagerly engaged in subjects such as mathematics, sciences, humanities, and languages. This multidisciplinary approach allowed me to develop a well-rounded understanding of the world, honing my analytical and problem-solving skills.</p>
      </div>
    </div>
  )
}
