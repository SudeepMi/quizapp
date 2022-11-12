import React from 'react'
import LeaderBoard from '../components/LeaderBoard'
import Questions from '../components/Questions'
import UserProfile from '../components/UserProfile'
import './home.css'
import Pusher from "pusher-js"
import Progressbar from '../components/Progressbar'

function Home() {
  const next = () =>{
    // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true;
    const pusher = new Pusher('2142cda6d39765cba2a9', {
        cluster: 'ap2'
    });

    const channel = pusher.subscribe('main');
    channel.bind('current', function (data) {
        alert(JSON.stringify(data));
    });
  }

  return (
    <div className="home_wrapper">
     <UserProfile/>
     <Questions next={next} />
     <LeaderBoard />
     <Progressbar />
    </div>
  )
}

export default Home