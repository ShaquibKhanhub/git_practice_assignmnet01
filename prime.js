let num =13;
let fact = 0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        fact++;
    }
}
  if(fact==2){
    console.log("yes")
}else {
    console.log("No")
}