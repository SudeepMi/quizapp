import React from 'react'
import LeaderBoard from '../components/LeaderBoard'
import Questions from '../components/Questions'
import UserProfile from '../components/UserProfile'
import './home.css'
import Progressbar from '../components/Progressbar'
import Answer from '../components/Answer'

function Home({leaders}) {

  return (
    <div className="home_wrapper">
     <UserProfile/>
     <Questions mode={"optionBased"}/>
     <LeaderBoard leaders = {leaders}/>
     <Progressbar />
     <Answer leaders = {leaders}/>
    </div>
  )
}

export default Home