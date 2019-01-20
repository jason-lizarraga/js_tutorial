// 7.3.1 Exercises #2
Array.prototype.last = function() {
    return this.slice(-1);
};

a = [42, 8, 17, 99];
console.log(a.last());
