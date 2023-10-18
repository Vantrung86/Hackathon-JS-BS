let string = "hello rikkei academy";
let arr = string.trim().split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
}
console.log(arr.join(" "));