//Using the two-pointer method to determine if a string is a palindrome

//A palindrome is a word that is spelled the same backwards as forwards 

function palindrome(word) {
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(palindrome("not"))


