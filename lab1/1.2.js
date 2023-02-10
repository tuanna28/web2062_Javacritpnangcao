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
for (const [i, player] of match.scored.entries())
    console.log(`Goal ${i + 1}:${player}`);
//Tính trung bình odds là làm lặp lại đối tượng 
const odds = Object.values(match.odds);
let avarage = 0;
for (const odd of Object.values(match.odds))
    avarage += odd;
avarage /= odds.length;
console.log(avarage);
for (const [team, odd] of Object.entries(match.odds)) {
    const teamSrt = team === 'x' ? 'draw': `vicory ${match[team]}`;
    console.log(`Odd of ${teamSrt} ${odd}`);
} 