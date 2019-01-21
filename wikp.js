#!/usr/bin/node

// Returns the paragraphs from a Wikipedia link, stripped of reference numbers.

let request = require("request");
let url = process.argv[2];

// Exit if url is empty
if (!url) {
    console.log("Please enter a URL");
    process.exit();
}

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

request(url, function (error, response, body) {
    // Simulate a Document Object Model.
    let { document } = (new JSDOM(body)).window;

    // Grab all the paragraphs and references.
    let paragraphs = document.querySelectorAll("p");
    let references = document.querySelectorAll(".reference");

    // Remove any references.
    references.forEach(function (reference) {
        reference.remove();
    });

    // Print out all of the paragraphs.
    paragraphs.forEach(function (paragraph) {
        console.log(paragraph.textContent);
    });
});
