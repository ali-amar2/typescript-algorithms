//! 1. Reverse a String
function Reverse(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(Reverse("random"));
//! 2. Check if a String is a Palindrome
function isPalindrome(str) {
    var left = 0;
    var right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right])
            return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("level"));
//! 3. Remove Duplicates from a String
function removeDuplicates(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}
console.log(removeDuplicates("level"));
//! 4. Find the First Non-Repeating Character
function firstNonRepeatinigChar(str) {
    for (var i = 0; i < str.length; i++) {
        var isUnique = true;
        for (var j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique)
            return str[i];
    }
}
console.log(firstNonRepeatinigChar("level"));
//! 5. Count the Occurrences of Each Character
function countOccurrences(str) {
    var freq = new Map();
    for (var i = 0; i < str.length; i++) {
        freq.set(str[i], (freq.get(str[i]) || 0) + 1);
    }
    return freq;
}
console.log(countOccurrences("level"));
//! 6. Reverse Words in a Sentence
function reverseSentence(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseSentence("i love programming"));
//! 7. Check if Two Strings are Anagrams
function checkAnagrams(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    var arr2 = str2.split("");
    for (var i = 0; i < str1.length; i++) {
        var found = false;
        for (var j = 0; j < arr2.length; j++) {
            if (str1[i] === arr2[j]) {
                found = true;
                arr2[j] = "";
                break;
            }
        }
        if (!found)
            return false;
    }
    return true;
}
console.log(checkAnagrams("abz", "aab"));
//! 8. Find the Longest Substring Without Repeating Characters
function longestSubstring(str) {
    var arr = [];
    var maxsub = "";
    for (var i = 0; i < str.length; i++) {
        if (!arr.includes(str[i])) {
            arr.push(str[i]);
        }
        else {
            if (arr.join("").length > maxsub.length) {
                maxsub = arr.join("");
            }
            arr = arr.slice(arr.indexOf(str[i]) + 1);
            arr.push(str[i]);
        }
    }
    if (arr.join("").length > maxsub.length) {
        maxsub = arr.join("");
    }
    console.log(maxsub);
}
longestSubstring("abcadcef");
//! 9. Find the Most Frequent Character
function mostFrequent(str) {
    var counter = 0;
    var seenChars = new Set();
    var maxCounter = 0;
    var maxChar = "";
    for (var i = 0; i < str.length; i++) {
        if (seenChars.has(str[i]))
            continue;
        seenChars.add(str[i]);
        for (var j = 0; j < str.length; j++) {
            if (str[i] === str[j])
                counter++;
        }
        if (maxCounter < counter) {
            maxCounter = counter;
            maxChar = str[i];
        }
        counter = 0;
    }
    console.log("Most frequent character: '".concat(maxChar, "' appeared ").concat(maxCounter, " times"));
}
mostFrequent("aliamar");
//! 10. Find All Substrings of a Given String 
function findAllSubstrings(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            arr.push(str.slice(i, j + 1));
        }
    }
    console.log("substrings of ".concat(str, " : ").concat(arr));
}
findAllSubstrings("abcd");
//! 11. Check if a String is a Rotation of Another String 
function isRotation(str1, str2) {
    if (str1.length != str2.length)
        return false;
    str1 += str1;
    if (str1.includes(str2))
        return true;
    return false;
}
console.log(isRotation("abcd", "cdab"));
//! 12. Remove All White Spaces from a String 
function removeSpaces(str) {
    console.log(str.replace(/\s+/g, ""));
}
removeSpaces("a bcd  e");
// ! 13. Convert a String to Title Case 
function toTitleCase(str) {
    var splitWords = str.split(" ");
    var words = splitWords.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); });
    return words.join(" ");
}
console.log(toTitleCase("hello woRld"));
//! 14. Find the Longest Common Prefix between two strings
function longestCommonPrefix(str1, str2) {
    var minLength = Math.min(str1.length, str2.length);
    var longestPrefix = "";
    for (var i = 0; i < minLength; i++) {
        if (str1[i] === str2[i])
            longestPrefix += str1[i];
        else
            break;
    }
    return longestPrefix || "There is no longest common prefix";
}
console.log(longestCommonPrefix("flower", "flight"));
//! 15. Convert a String to a Character Array 
function stringToChars(str) {
    var charArr = str.split("");
    return charArr;
}
console.log(stringToChars("hello"));
