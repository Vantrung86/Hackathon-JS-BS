//C1
let text = "program";
let result = "";
for(let i=text.length-1; i>=0; i--){
    result+=text[i]
}
console.log(result);


//C2
let tr = "program";
let res = [];
for (let i = 0; i < tr.length; i++) {
    res.unshift(tr[i]) 
}
console.log(res.join(""));