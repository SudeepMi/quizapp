import React from 'react'
import LeaderBoard from '../components/LeaderBoard'
import Questions from '../components/Questions'
import UserProfile from '../components/UserProfile'
import './home.css'

function Home() {
  return (
    <div className="home_wrapper">
     <UserProfile/>
     <Questions />
     <LeaderBoard />
    </div>
  )
}

export default Home