const match={ 
    team1:"Bayern Munich",
  team2: "Hà Nội",
  players: [
    [
    'Neuer',
    'Davies',
    'Sule',
    'De ligt',
    'Pavad',
    ' Goretzka',
    'Kimmich',
    'Muller',
    'Sane',
    'Gnarby',
    'lewandowski',

  ],
  [
    'Tấn Trường',
    'Văn Hậu',
    'Duy Mạnh',
    'Bùi Hoàng Việt Anh',
    'Lê Văn Xuân',
    'Đỗ Hùng Dũng',
    ' Văn Quyết',
    ' Thành Lương',
    ' Tuấn Hải',
    'Quang Hải',
    'Văn Tùng'
  ],
  ],
  score: '4:0',
  scorder:['lewandowski','Văn Quyết','lewamdowski','Sane'],
  date: 'january 1 2023',
  odds: {
    team1: 1.4,
    x: 3.25,
    team2: 6.5,
  }
};


const [ player1, player2] = match.players;
console.log(player1,player2);


// tạo thủ môn và mảng tất cả cầu thủ
const [gk, fieldPlayer]= player1;
console.log(gk, fieldPlayer);
// tạo mảng tất cả các cầu thủ trên sân
const allPlayer=[player1, player2];
console.log(allPlayer);
//tạo biến biến dựa trên tỉ lệ cược odds
const playerFinal=[player1, 'Thiago','Coutinho','Periscric'];
const { odds: {team1, x: draw, team2}}= match;
console.log(team1,draw,team2);
//5. Tạo hàm printGoals
const printGoals= function(players){
console.log(`${player.length} goals were scored`);

}
printGoals(match.scored);
team1<team2 && console.log('Team 1 is more likely to win');
team1> team2 && console.log('team 2 is more likely to win');

