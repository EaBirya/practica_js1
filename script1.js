/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
//     personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     },
//     lastMovies = prompt('Один из последних просмотренных фильмов?', ''),
//     grade = prompt('На сколько оцените его?', ''),
//     lastMovies2 = prompt('Один из последних просмотренных фильмов?', ''),
//     grade2 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[lastMovies] = grade;
// personalMovieDB.movies[lastMovies2] = grade2; 

// console.log(personalMovieDB);

// console.log( NaN || 2 || undefined );
 
// console.log( NaN && 2 && undefined );
 
// console.log( 1 && 2 && 3 );
 
// console.log( !1 && 2 || !3 );
 
// console.log( 25 || null && !3 );
 
// console.log( NaN || null || !3 || undefined || 5);
 
// console.log( NaN || null && !3 && undefined || 5);
 
// console.log( 5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
//     console.log('Нихуя!');
// } 

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++; 
// }
// while (num < 55);

// let result = '';
// const Length = 7;

// for (let i = 1; i < Length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) {
//                 continue first;
//             }    
//             console.log(`Third level: ${k}`);
//         }
//     }        
// }

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//     if (i%2 === 1) {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }
// let i = 2;
// while (i <= 16) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++;
// }


// let arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);



// const arr = [3, 5, 8, 16, 20, 23, 50],
//       result = [];

// for (let i = 0; i <=6; i++) {
//     result[i] = arr[i];
// }      
// console.log(result);



// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for (let i = 0; i <= data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] += " - done";
//         }
//     }
// console.log(data);


// const data = [5, 10, 'Shopping', 20, 'Homework'],
//       result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
//     console.log(result);



// let result = '';
// const lines = 5;

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);



