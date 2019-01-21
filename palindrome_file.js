#!/usr/bin/node

let fs = require("fs");
let Phrase = require("jason-lizarraga-palindrome");

let text = fs.readFileSync("phrases.txt", "utf-8");
let palindromes = "";
text.split("\n").forEach(function(line) {
  let phrase = new Phrase(line);
  if (phrase.palindrome()) {
    palindromes += (line + "\n");
  }
});

fs.writeFileSync("palindromes.txt", palindromes, (err) => {
  if (err) throw err;
});
