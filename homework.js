// const min_ = [];

// for (let i = 0; i < 60; i++) {
//     min_.push(i);
// }

// let randomNum = min_[Math.floor((Math.random()) * min_.length)];
// console.log(randomNum);

// if (randomNum <= 15) {
//     console.log('первая четверть часа');
// } else if(randomNum <= 30) {
//     console.log('вторая четверть часа');
// } else if(randomNum <= 45) {
//     console.log('третья четверть часа');
// } else {
//     console.log('четвертая четверть часа');
// }

// const time = new Date(),
//     getHours = time.getHours();

// if (getHours <= 5){
//     alert('Доброй ночи');
// } else if (getHours <= 11) {
//     alert('Доброе утро');
// } else if(getHours <= 18) {
//     alert('Доброй день');
// } else if(getHours <= 24) {
//     alert('Добрый вечер');
// } 



let arr = [1, -3, 5, 6, -7, 15, -8, 9, -11];

arr.filter(item => {
    if (item < 0) {
        console.log(item);
    }
});



let boys = ['Azat', 'Eldos', 'Azamat', 'Baktiyar'];

let i = 0; 
boys.forEach(name => {
    console.log(`под индексом ${i} ${name}`);
    i++;
});



function palindrome(words) {
    let updateWords = words.split('').reverse().join('');
    if (updateWords === words) {
        console.log(`да, это палиндром: ${words}`);
    } else {
        console.log(`нет, это не палиндром: ${words}`);
    }
}

palindrome('aza');
palindrome('azaa');


function factorial(num) {
    let result = [];

    for (let num1 = 1; num1 <= num; num1++) {
        result.push(num1);
    }

    console.log(result.reduce((a, b) => a * b));
}

factorial(5);




