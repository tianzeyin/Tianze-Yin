import React from 'react'
import './Services.css'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Journey</h5>
      <h2>Work Experience</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Kortex</h3>
            <p className='service__role'>Frontend Developer & E2E Tester</p>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Developed and maintained Kortex, a note taking application.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Performed E2E testing with Playwright to improve reliability.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Automated interaction testing and reported defects.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Refined frontend structures and streamlined codebase.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Collaborated via GitHub with branching and PR workflows.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>UW Orbital Design Team</h3>
            <p className='service__role'>Ground Station Team</p>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Developed backend features for spacecraft command management.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Implemented data validation for command parameters.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Built FastAPI routes to create, view, and delete commands.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Managed command data storage using SQLModel.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Implemented logging and status tracking for debugging.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Student Council Web Manager</h3>
            <p className='service__role'>St. Paul’s High School</p>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Designed and maintained school website for updates.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Implemented React layouts and responsive CSS.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Improved accessibility and navigation for users.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Collaborated with council to publish content.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}


export default Services