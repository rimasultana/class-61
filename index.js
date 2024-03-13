const sentence = "Rima is a good gril. he is very honest.Rima fathers name Golam Mostafa. rima mothers name shemsunnaher."

const matches = sentence.match(/Rimas/gi);

const text = matches? matches.length: 0;

console.log(text);