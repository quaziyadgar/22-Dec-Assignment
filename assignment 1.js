var ar=[];
for (let i=0;i<3;i=i+1){
    var num= parseInt(prompt("Enter the Number :"));
    ar.push(num);
}
alert(Math.max(ar[0],ar[1],ar[2])+" is greatest number");