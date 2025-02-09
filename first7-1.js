//continue --> skip rest of the code fot this iteration
//break --> i am done this loop. loop end.

for(let b = 1; b < 10; b++){
    if(b % 2 !== 0){
        continue;
    }
    console.log(b);
}