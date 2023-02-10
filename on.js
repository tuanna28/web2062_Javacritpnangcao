const nha= ["Arsenal","Man City", "Newcastle","Man United"]
console.log(nha)
// 1. duyệt 
for (let items of nha){
    console.log(items);
}
for(let index in nha){
    console.log(index);
}
nha.forEach(function(){})

//2 thêm
//push
nha.push("Tottenham")
console.log(nha)
// splice 
const length= nha.length
nha.splice(length,1,"liverpool")
//3. xóa
// bước 1: tìm index
// bước 2: dùng hàm xóa
const index= nha.indexOf("liverpool")
//splice
nha.splice(index,1)
//4. sửa
// const index= nha.indexOf("Man United")
// nha[index]="MU"
//Map 
// const newArray = nha.map(function(team,index){
//     if(team =="Man United"){
//         return "MU"
//     }
//     return team
   
// })
// console.log(newArray)
//5. tìm kiếm
//find
const team= nha.find(function(team){
    return team.toLowerCase == "man city".toLowerCase

})
console.log(team)
// 6. lọc