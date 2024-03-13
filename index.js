const x = "Learn with sumit. he is very honest. sumit is best of the world developer.";

const matches = x.match(/sumits/gi);

const text = matches? matches.length: 0;

console.log(text);


let position = x.search(/sumits/i);

position = position>= position:"not found";


console.log(position);

