// const x = "Learn with sumit. he is very honest. sumit is best of the world developer.";

// const matches = x.match(/sumits/gi);

// const text = matches? matches.length: 0;

// console.log(text);


// let position = x.search(/sumits/i);

// position = position>= position:"not found";


// console.log(position);

// function linearSearch (arr, val) {
//     const length = arr.length;
// for (let i = 0; i < length; i++) {
//     if (arr[i] === val) {
//         return i;
//     }
// }
// return "not found";
// }

// console.log(linearSearch(['a', 'b', 'c', 'd', 'c'],'c'));

function longestString (names) {
    let longestWord = '';

for (name of names) {
    if (name.length >longestWord.length) {
        longestWord = name;
    }
}
return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(['sumi saha', 'Learn with sumit', 'akash']));