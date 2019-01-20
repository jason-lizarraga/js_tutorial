// 7.3.1 Exercises #1 
// Add a blank method to the String object prototype that returns true if the
//  string is empty or consists solely of whitespace (spaces, tabs, or newlines)

String.prototype.blank = function() {
    return !!this.match(/^\s*$/);
};

let example = "";
console.log(example.blank());
