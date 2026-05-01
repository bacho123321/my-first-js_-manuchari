let firstNumb = 0;

function fibonacciGenerator(n) {
    let output = [ 0 ];

    for (let firstNumb = 0; firstNumb < n - 1; firstNumb++) {
        if (output.length === 1) {
            output.push(1);
        } else {
            let nextNumb = output[output.length - 1] + output[output.length - 2];
            output.push(nextNumb);
        }
    }
    // თქვენი კოდი აქ...
    // გამოიყენეთ .push() მასივში ელემენტების დასამატებლად
    // გამოიყენეთ output.length პირობის შესამოწმებლად

    return output; 
}

console.log(fibonacciGenerator(8));
console.log(fibonacciGenerator(22));