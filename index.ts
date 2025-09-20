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

//! 12. Find All Substrings of a Given String 
function findAllSubstrings(str: string) {
  let arr: string[] = []
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      arr.push(str.slice(i, j + 1))
    }
  }
  console.log(`substrings of ${str} : ${arr}`);
}
findAllSubstrings("abcd")


