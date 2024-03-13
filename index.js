const x = "Learn with sumit. he is very honest. sumit is best of the world developer.";

const matches = x.match(/sumits/gi);

const text = matches? matches.length: 0;

console.log(text);


const position = x.search(/sumit/);

console.log(position);

