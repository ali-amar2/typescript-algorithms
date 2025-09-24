//! 1. Reverse a String
function Reverse(str: string): string {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(Reverse("random"));

//! 2. Check if a String is a Palindrome
function isPalindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("level"));

//! 3. Remove Duplicates from a String
function removeDuplicates(str: string): string {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i]!)) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeDuplicates("level"));

//! 4. Find the First Non-Repeating Character
function firstNonRepeatinigChar(str: string) {
  for (let i = 0; i < str.length; i++) {
    let isUnique = true;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) return str[i];
  }
}
console.log(firstNonRepeatinigChar("level"));

//! 5. Count the Occurrences of Each Character
function countOccurrences(str: string): Map<string, number> {
  const freq = new Map<string, number>();
  for (let i = 0; i < str.length; i++) {
    freq.set(str[i]!, (freq.get(str[i]!) || 0) + 1);
  }
  return freq;
}
console.log(countOccurrences("level"));

//! 6. Reverse Words in a Sentence
function reverseSentence(str: string): string {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseSentence("i love programming"));

//! 7. Check if Two Strings are Anagrams
function checkAnagrams(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;
  let arr2 = str2.split("");
  for (let i = 0; i < str1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (str1[i] === arr2[j]) {
        found = true;
        arr2[j] = "";
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}
console.log(checkAnagrams("abz", "aab"));

//! 8. Find the Longest Substring Without Repeating Characters
function longestSubstring(str: string): void {
  let arr: string[] = [];
  let maxsub = "";
  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i]!)) {
      arr.push(str[i]!);
    } else {
      if (arr.join("").length > maxsub.length) {
        maxsub = arr.join("");
      }
      arr = arr.slice(arr.indexOf(str[i]!) + 1);
      arr.push(str[i]!);
    }
  }
  if (arr.join("").length > maxsub.length) {
    maxsub = arr.join("");
  }
  console.log(maxsub);
}
longestSubstring("abcadcef");

//! 9. Find the Most Frequent Character
function mostFrequent(str: string): void {
  let counter = 0;
  let seenChars = new Set<string>();
  let maxCounter = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    if (seenChars.has(str[i]!)) continue;
    seenChars.add(str[i]!);
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) counter++
    }
    if (maxCounter < counter) {
      maxCounter = counter;
      maxChar = str[i]!;
    }
    counter = 0;
  }
  console.log(`Most frequent character: '${maxChar}' appeared ${maxCounter} times`);
}
mostFrequent("aliamar");

//! 10. Find All Substrings of a Given String 
function findAllSubstrings(str: string): void {
  let arr: string[] = []
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      arr.push(str.slice(i, j + 1))
    }
  }
  console.log(`substrings of ${str} : ${arr}`);
}
findAllSubstrings("abcd")

//! 11. Check if a String is a Rotation of Another String 
function isRotation(str1: string, str2: string): boolean {
  if (str1.length != str2.length) return false;
  str1 += str1
  if (str1.includes(str2)) return true
  return false
}
console.log(isRotation("abcd", "cdab"));

//! 12. Remove All White Spaces from a String 
function removeSpaces(str: string) {
  console.log(str.replace(/\s+/g, ""));
}
removeSpaces("a bcd  e")

// ! 13. Convert a String to Title Case 
function toTitleCase(str: string): string {
  let splitWords = str.split(" ")
  const words = splitWords.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  return words.join(" ")
}
console.log(toTitleCase("hello woRld"))

//! 14. Find the Longest Common Prefix between two strings
function longestCommonPrefix(str1: string, str2: string): string {
  const minLength = Math.min(str1.length, str2.length)
  let longestPrefix = ""
  for (let i = 0; i < minLength; i++) {
    if (str1[i] === str2[i]) longestPrefix += str1[i]
    else break
  }
  return longestPrefix || "There is no longest common prefix";
}
console.log(longestCommonPrefix("flower", "flight"));

//! 15. Convert a String to a Character Array 
function stringToChars(str: string): string[] {
  let charArr = str.split("")
  return charArr
}
console.log(stringToChars("hello"));

//! 16. Replace Spaces with %20 (URL Encoding) 
function encodeSpacesForURL(str: string): String {
  return str.replace(/ /g, "%20");
}
console.log(encodeSpacesForURL("Hello world"));

//! 17. Convert a Sentence into an Acronym
function toAcronym(str: string) {
  const words = str.split(" ")
  const acronym = words.map(word => word.charAt(0).toUpperCase()).join("")
  return acronym

}
console.log(toAcronym("Hello world wide web"));

//! 18. Check if a String Contains Only Digits
function containsOnlyDigit(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(Number(str[i]))) return false;
  }
  return true;
}

console.log(containsOnlyDigit("1221as")); 
