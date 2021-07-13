// Code your solution here!
function printString(str) {
  console.log(str[0])
  if (str.length <= 1){
    return true
  } else {
    printString(str.substring(1, str.length))
  }
}

function reverseString(str){
  if (str === "") return ""
  return reverseString(str.substring(1)) + str.charAt(0)
}

function isPalindrome(str){
  if (str.length === 1) return true
  if (str[0] !== str[str.length - 1]) return false
  return isPalindrome(str.substring(1, str.length - 1))
}

function addUpTo(arr, idx){
  if (idx === 0) return arr[0]
  return addUpTo(arr, idx - 1) + arr[idx]
}

function maxOf(arr){
  if (arr.length === 1) return arr[0]
  return Math.max(arr.pop(), maxOf(arr))
}

function includesNumber(arr, num) {
  if (arr.length === 0) return false
  if (arr[0] === num) return true
  return includesNumber(arr.slice(1), num)
}
