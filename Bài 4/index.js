let arr = [5, 2, 3, 4, 1]
for(let i=0; i < arr.length; i++){
    for(let j=0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
            let x = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = x;
        }
    }
}
console.log(arr);