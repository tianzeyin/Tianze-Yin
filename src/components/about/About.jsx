import React from 'react'
import './About.css'
import FootballImg from '../../assets/football.JPG'
import HumanRightsImg from '../../assets/human rights.jpg'
import UWaterlooImg from '../../assets/e7.avif'


const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>


        <div className="about__descriptions">
          <div className="about__description-item">
            <div className="about__text">
              <h3>🏈 Sports</h3>
              <p>
                I am a committed student athlete who plays linebacker on my school football team. Football has taught me discipline, resilience, and the importance of teamwork under pressure. Competing in high intensity environments has strengthened my leadership, communication, and ability to perform consistently as part of a team skills I carry into both academics and engineering projects.
              </p>
            </div>
            <div className="about__section-image">
              <img src={FootballImg} alt="Football" className="football-img" />
            </div>
          </div>
          <div className="about__description-item">
            <div className="about__text">
              <h3>🌍 Social Impact & Leadership</h3>
              <p>
                I serve as an ambassador at the Canadian Museum for Human Rights, where I engage with visitors, support educational initiatives, and help communicate complex human rights topics to diverse audiences. This role has strengthened my public speaking, empathy, and responsibility, and reinforced my commitment to ethical leadership and community engagement.
              </p>
            </div>
            <div className="about__section-image">
              <img src={HumanRightsImg} alt="Human Rights" />
            </div>
          </div>
          <div className="about__description-item">
            <div className="about__text">
              <h3>🎓 Academics & Engineering</h3>
              <p>
                I am a Computer Engineering student at the University of Waterloo with a strong interest in software systems, backend development, and applied problem-solving. I enjoy building real-world applications, working in collaborative technical teams, and continuously improving my skills through projects, hackathons, and design teams.
              </p>
            </div>
            <div className="about__section-image">
              <img src={UWaterlooImg} alt="Academics & Engineering" />
            </div>
          </div>
        </div>


      </div>
    </section >
  )
}

export default About