const min_ = [];

for (let i = 0; i < 60; i++) {
    min_.push(i);
}

let randomNum = min_[Math.floor(Math.random() * min_.length)];

if (randomNum >= 15) {
    console.log('первая четверть часа');
} else if(randomNum >= 30) {
    console.log('вторая четверть часа');
} else if(randomNum >= 45) {
    console.log('третья четверть часа');
} else {
    console.log('четвертая четверть часа');
}

const time = new Date(),
    getHours = time.getHours();

if (getHours <= 5){
    alert('Доброй ночи');
} else if (getHours <= 11) {
    alert('Доброе утро');
} else if(getHours <= 18) {
    alert('Доброй день');
} else if(getHours <= 24) {
    alert('Добрый вечер');
} 
