#!/usr/bin/node

let request = require("request");
let Phrase = require("jason-lizarraga-palindrome");
let url = 'https://cdn.learnenough.com/phrases.txt'

// request(url, function(error, response, body) {
//   body.split("\n").forEach(function(line) {
//     phrase = new Phrase(line);
//     if (phrase.palindrome()) {
//       console.log("palindrome detected:", line);
//     }
//   });
// });

request(url, function(error, response, body) {
    let lines = body.split("\n");
    let palindromes = lines.filter(line => new Phrase(line).palindrome());
  
    palindromes.forEach(function(palindrome) {
      console.log("palindrome detected:", palindrome);
    });
  });
