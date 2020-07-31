//Link: https://www.codewars.com/kata/5b62f8a5b17883e037000136/train/javascript

function quidditchScoreboard(teams, actions) {
  // your code here
  const indVS = teams.indexOf('vs');
  const teamOne = teams.slice(0, indVS-1);
  const teamTwo = teams.slice(indVS+3);
//   console.log(teamOne, teamTwo);
  const fouls = ["Blatching", "Blurting", "Bumphing", "Haverstacking", "Quaffle-pocking", "Stooging"];
  const actionArr = actions.split(', ');
  let scoreOne = 0;
  let scoreTwo = 0;
  for(let i = 0; i < actionArr.length; i++){
//     console.log(actionArr[i]);
    const tpArr = actionArr[i].split(':');
//     console.log(tpArr);
    const team =tpArr[0].trim();
    const act = tpArr[1].trim();
//     console.log(team, act);
    
    switch (team){
      case (teamOne):
         if(act.includes("foul"))
           scoreOne-=30;
         else if(act.includes("goal"))
           scoreOne+=10;
         else
           scoreOne +=150;
        break;
      case (teamTwo):
        if(act.includes("foul"))
           scoreTwo-=30;
         else if(act.includes("goal"))
           scoreTwo+=10;
         else
           scoreTwo +=150;
         break;
        default:
          console.log('Wrong');
        break;
    }
    if(act.includes('Snitch'))
      break;
  }
  return `${teamOne}: ${scoreOne}, ${teamTwo}: ${scoreTwo}`;
}