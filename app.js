// Berilgan qatorni sozlash uchun faqat raqamlar va harflarni saqlab, boshqa barcha belgilarni olib tashlang.

function sanitizeString(str = "") {
  let  arr = str.split("")
 let res = []
 for (let i = 0; i < arr.length; i++) {
      if (arr[i].match(/[a-zA-Z]/)) {
        res.push(arr[i]);
      }
 }
return res.join("")
}

// console.log(sanitizeString("he@llo! w0rld#")); // "hello0rld"


// Berilgan massiv ichidagi musbat va manfiy sonlarni alohida massivlarga ajratib, natijani obyekt sifatida qaytaring.

function separatePositivesAndNegatives(arr) {
  let positives = []
  let negatives = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i])
    } else {
      negatives.push(arr[i])
    }
  }
  return {
    positives,
    negatives
  }
}

// console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5])); 
// { positives: [1, 3, 5], negatives: [-2, -4] }


// Berilgan massiv ichida faqat bir marta uchraydigan birinchi elementni toping.

function firstUniqueElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    if (count === 1) {
      return arr[i]
    }
  }
}

// console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4])); // 5




// Berilgan massiv ichidagi har bir elementning takrorlanish sonini qaytaruvchi obyektni yarating.


function elementCounts(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    obj[arr[i]] = count
  }
  return obj
}

// console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// { 1: 1, 2: 2, 3: 3, 4: 4 }


// Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.



function swapElements(arr, k) {
  let last = arr.pop()
  arr.splice(k, 0, last)
  return arr
}

// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]