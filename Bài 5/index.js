for(let i=1; i<=6; i++){
    for(let j=1; j<=7; j++){
        if(i==1 && (j==2 || j==3 || j==5 || j==6)
            || i==2 && (j==1 || j==4 || j==7)
            || i==3 && (j==1 || j==7)
            || i==4 && (j==2 || j==6)
            || i==5 && (j==3 || j==5)
            || i==6 && j==4
        ){
           document.write(" * ")
        }else{
            document.write("&nbsp&nbsp&nbsp")
        }
    }
    document.write("<br>")
}