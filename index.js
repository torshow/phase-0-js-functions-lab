function calculateTax(amount) {
    return amount * (10/100);

}
function convertToUpperCase(test) {
    return test.toUpperCase();

}
function findMaximum(num1, num2) {
    if (num1,num2) {
        return num1;
    }  else {
        return num2;
    }
}
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}
function calculateDiscountedPrice(originalPrice, discountpersentage) {
    const discount = originalPrice * (discountpersentage / 100);
    return originalPrice - discount;

}
console.log(calculateTax(100)); //Expected: 10
console.log(convertToUpperCase("hello")); //Expected: "HELLO"
console.log(findMaximum(10,20)); //Expected: true
console.log(calculateDiscountedPrice(200,15)); //Expected: 170



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };