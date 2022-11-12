import React from 'react'
import Questions from '../components/Questions'
import Pusher from "pusher-js"
const Public = () => {

  React.useEffect(()=>{
      // Enable pusher logging - don't include this in production
      // Pusher.logToConsole = true;
      const pusher = new Pusher('2142cda6d39765cba2a9', {
          cluster: 'ap2'
      });

      const channel = pusher.subscribe('main');
      channel.bind('current', function (data) {
          alert(JSON.stringify(data));
      });
      return () => {
          channel.unbind_all()
          channel.unsubscribe()
      }
  },[])
  return (
    <div>
      <Questions />
    </div>
  )
}

export default Public