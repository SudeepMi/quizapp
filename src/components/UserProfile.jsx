import React from 'react'

function UserProfile() {
    const rand = Math.random() * 10;
  return (
    <div className='user_profile'>
        <div className='profile_box'>
        <div className='profile_avatar'>
            <img src={`https://robohash.org/${rand}`} />
            <h3>Team A</h3>
        </div>
        <div className='user_stat'>
            <p><i className="ri-questionnaire-line"></i> Attemted: 20</p>
            <p><i className="ri-questionnaire-line"></i> Correct: 20</p>
            <p><i className="ri-questionnaire-line"></i> Rank: 20</p>
        </div>
        </div>
    </div>
  )
}

export default UserProfile