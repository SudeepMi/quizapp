import React from 'react'

const getTeamRank = (teams) => {
    let _teams = teams;
    const len = _teams.length
    for (let index = 0; index < len; index++) {
        const element = _teams[index];
        element.rank = index+1;
    }
  return (
    _teams
  )
}

export default getTeamRank