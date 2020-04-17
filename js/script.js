// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// const age = +prompt('Enter your age');

// if (age >= 0 && age < 12) {
//     console.log('You are a child');
// } else if (age >= 12 && age < 18) {
//     console.log('You are a teenager');
// } else if (age >= 18 && age < 60) {
//     console.log('You are an adult');
// } else if (age >= 60) {
//     console.log('You are an senior citizen');
// } else {
//     console.error('Error. Please, enter your age');
// }



// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

// const number = +prompt('Enter a number (from 0 to 9)');

// switch (number) {
//     case 0:
//         console.log(')');
//         break;
//     case 1:
//         console.log('!');
//         break;
//     case 2:
//         console.log('@');
//         break;
//     case 3:
//         console.log('#');
//         break;
//     case 4:
//         console.log('$');
//         break;
//     case 5:
//         console.log('%');
//         break;
//     case 6:
//         console.log('^');
//         break;
//     case 7:
//         console.log('&');
//         break;
//     case 8:
//         console.log('*');
//         break;
//     case 9:
//         console.log('(');
//         break;
//     default:
//         console.error('Wrong')
//         break;
// }


// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// const number = +prompt('Enter a three-digit number');

// const firstDigit = (number - (number % 100)) / 100;
// const secondDigit = ((number % 100) - ((number % 100) % 10)) / 10;
// const thirdDigit = number % 10;

// if (number >= 100 && number <= 999) {

//     // Solution №1
//     // if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
//     //     console.log('Identical digits');
//     // } else {
//     //     console.log('No identical digits');
//     // }


//     // Solution №2
//     // console.log(firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit ? 'Yes' : 'No')

// } else {
//     console.error('Enter a number from 100 to 999');
// }


// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// const year = +prompt('Enter year');
// console.log((year % 400 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 !== 0) ? 'Leap year' : 'Not a leap year');



// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// const number = +prompt('Enter a five-digit number');
// const firstDigit = (number - (number % 10000)) / 10000;
// const secondDigit = ((number - (number % 1000)) % 10000) / 1000;
// const fourthDigit = ((number - (number % 10)) % 100) / 10;
// const fifthDigit = number % 10;

// if (number >= 10000 && number <= 99999) {
//     if (firstDigit === fifthDigit && secondDigit === fourthDigit) {
//         console.log('This number is a palindrome');
//     } else {
//         console.log('This number is not a palindrome');
//     }
// } else {
//     console.error('Enter a number from 10000 to 99999');
// }

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// const amount = +prompt('Enter the amount (in USD)');
// const currency = prompt('Please, enter the currency to which you want to convert your amount (EUR, UAH or AZN)').toUpperCase();
// const currencyRateEUR = 0.92;
// const currencyRateUAH = 27.25;
// const currencyRateAZN = 1.70;

// switch (currency) {
//     case 'EUR':
//         console.log(`${amount * currencyRateEUR} ${currency}`);
//         break;
//     case 'UAH':
//         console.log(`${amount * currencyRateUAH} ${currency}`);
//         break;
//     case 'AZN':
//         console.log(`${amount * currencyRateAZN} ${currency}`);
//         break;
//     default:
//         console.error('Wrong')
//         break;
// }

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// const amount = +prompt('Enter purchase amount');

// if (amount < 200) {
//     console.log(`To pay: ${amount}`);
// } else if (amount >= 200 && amount < 300) {
//     console.log(`To pay: ${amount - (amount * 0.03)}`);
// } else if (amount >= 300 && amount < 500) {
//     console.log(`To pay: ${amount - (amount * 0.05)}`);
// } else if (amount >= 500) {
//     console.log(`To pay: ${amount - (amount * 0.07)}`);
// }



// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// const length = +prompt('Enter the length of the circumference');
// const perimeter = +prompt('Enter the perimeter of the square');

// const sideSquare = perimeter / 4;
// const maxRadius = sideSquare / 2;
// const radius = length / (2 * Math.PI);
// console.log(radius <= maxRadius ? 'Circle fits into a square' : 'Circle doesn\'t fit into a square')





// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// const answer1 = +prompt('How much will 5 multiply by 9? \n 1. 35 \n 2. 45 \n 3. 55')
// const answer2 = +prompt('From which side of the world does the sunrise? \n 1. east \n 2. west \n 3. south')
// const answer3 = +prompt('Select a conditional operator. \n 1. else \n 2. if \n 3. prompt')

// let score = 0;
// if (answer1 == 2) score += 2;
// if (answer2 == 1) score += 2;
// if (answer3 == 2) score += 2;

// console.log('Congratulations! Your score: ', score);


// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.


