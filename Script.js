var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    
// A:-
    console.log(`A:- Country and region:`);
    var res1 = result.filter((z1)=>z1.region==="Asia");
   
    var res2 = res1.map((ele)=>{
        console.log(`${ele.name.common} / ${ele.region}`);
    })

// B:-
console.log(`B:- Population less than 2Lakhs:`);
var show = result.filter((z2)=>z2.population<200000);
var res2 = show.map((ele)=>{
    console.log(`${ele.name.common} / ${ele.population}`)
})
    
// C:-
console.log(`C:- Name,Capital,Flag:`);
var show2 = result.forEach(ele => {
    console.log(`${ele.name.common} / ${ele.capital} / ${ele.flags.png}`);
});

// D:-
console.log(`D:- Population using reduce:`);
var show4 = result.reduce((acc,cv)=>{
   return acc+cv.population;
},0);
console.log(show4); 

// E:-
console.log(`D:-`);

var res5 = result.filter((z4)=>z4.currencies && z4.currencies.USD);
res5.map((ele)=>console.log(ele.name.common));

                         }
