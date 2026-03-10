// for loops




for (let i = 1; i <= 7; i+= 2) {
    console.log(i);
    
}



let sum = 0;

for (let i = 1; i <= 99; i++) {
    const num = i;
    sum++;
    if (num === 67) {
        console.log(`I love ${num} so i stop counting after that`);
        break
    }
    console.log(num);
}

console.log(sum);





const Array = ['english', 'spanish', 'korean', 'karbi', 'japanese']

for (let i = 0; i < Array.length; i++) {
    const element = Array[i];
    if (i== 3) {
        console.log(`i found it...... ${element}`);
        continue
    }
    
}




function findEvenNumber(limit){
    for (i = 1; i<= limit; i++) {
        if (i % 2 === 0) {
            console.log(i);
            
        }
    }
}

findEvenNumber(21)