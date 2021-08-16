
for (let i = 2; i<=100; i++) {
    
    let primo = true;

    for (let j = i; j>2; j--) {
        if (i % (j-1) === 0) {
            primo = false;
        }
    }

    if (primo){
        console.log(i);
    }
}