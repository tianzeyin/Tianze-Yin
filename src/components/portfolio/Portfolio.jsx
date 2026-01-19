import React from 'react'
import './Portfolio.css'
import trueLight from '../../assets/true_light.png'
import chessAi from '../../assets/chess_ai.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={trueLight} alt='True Light App' />
          </div>
          <h3>True Light</h3>
          <p className="portfolio__item-desc">
            Real-time mobile accessibility app for colorblind and low-vision users.
            Built with React (Expo), FastAPI, NextJS, OpenCV.
          </p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/KrishP147/truelight' className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={chessAi} alt='Chess AI' />
          </div>
          <h3>Chess AI</h3>
          <p className="portfolio__item-desc">
            Chess bot with machine learning capabilities trained on Lichess games.
            Built with NextJS, Python, and ML algorithms.
          </p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/tianzeyin/chess_hack' className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio