//C1
let arr = [1,2,3,3,4,5,4,4,4,5,5];  
for(let i = 0; i < arr.length; i++){
    for(let j = i +1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
console.log(arr);


//C2
let arr1 = [1,2,3,3,4,5,4,4,4,5,5]; 
let text = [];
for (let i = 0; i < arr1.length; i++) {
    if (text.indexOf(arr1[i]) == -1) {
        text.push(arr1[i])
    }   
} 
console.log(text);