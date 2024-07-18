// Berilgan qatorni sozlash uchun faqat raqamlar va harflarni saqlab, boshqa barcha belgilarni olib tashlang.

function sanitizeString(str = "") {
  let arr = str.split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[0-9a-zA-Z]/)) {
      res.push(arr[i]);
    }
  }
  return res.join("");
}

// console.log(sanitizeString("he@llo! w0rld#")); // "hello0rld"

// Berilgan massiv ichidagi musbat va manfiy sonlarni alohida massivlarga ajratib, natijani obyekt sifatida qaytaring.

function separatePositivesAndNegatives(arr) {
  let positives = [];
  let negatives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    } else {
      negatives.push(arr[i]);
    }
  }
  return {
    positives,
    negatives,
  };
}

// console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5]));
// { positives: [1, 3, 5], negatives: [-2, -4] }

// Berilgan massiv ichida faqat bir marta uchraydigan birinchi elementni toping.

function firstUniqueElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }
}

// console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4])); // 5

// Berilgan massiv ichidagi har bir elementning takrorlanish sonini qaytaruvchi obyektni yarating.

function elementCounts(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    obj[arr[i]] = count;
  }
  return obj;
}

// console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// { 1: 1, 2: 2, 3: 3, 4: 4 }

// Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.

function swapElements(arr, k) {
  let last = arr.pop();
  arr.splice(k, 0, last);
  return arr;
}

// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]

// Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
// Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// Output: const res = {a: 6, b: 9, c: 12}

const obj = { a: 2, b: 3, c: 4 };

function oshiruvchi(n) {
  for (const key in obj) {
    obj[key] = obj[key] * n;
  }
  console.log(obj);
}
// oshiruvchi(3)

// argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
let aharfli = "salom dunyo";
const aHarf = (str = "") => {
  if (str.includes("a") || str.includes("A")) {
    console.log("a yoki A harfi qatnashgan");
  } else {
    console.log("a harfi qatnashmagan");
  }
};
// aHarf(aharfli)

// Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false,
  },
  {
    title: "Dunyoning ishlari",
    author: "O’tkir Hoshimov",
    read: true,
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true,
  },
];

const readFunc = (...books) => {
  // let  res =
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].length; j++) {
      if (books[i][j].read) {
        console.log(
          ` ${books[i][j].author} ning ${books[i][j].title} kitobi o’qilgan`
        );
      } else {
        console.log(
          ` ${books[i][j].author} ning ${books[i][j].title} kitobi o’qilgan`
        );
      }
    }
  }
};

// readFunc(books);
// Output:
// 1. Akrom Malik ning Halqa kitobi o’qilmagan
// 2. O’tkir Hoshimov ning Dunyoning ishlari kitobi o’qilgan
// 3. Shayx Muhammad Sodiq Muhammad Yusuf hazratlarining Iymon kitobi o’qilgan

// String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
// Input: [”text”, “world”, “laptop”]
// Output: {”text”: 4, “world”: 4, “laptop”: 6}

const textLenghtObj = (arr) => {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = arr[i].length;
  }
  console.log(result);
};
// textLenghtObj( ["text", "world", "laptop"])

// Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}

const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

let new_animals = animals.reduce((net, item) => {
  if (net[item]) {
    net[item] += 1;
  } else {
    net[item] = 1;
  }
  return net;
}, {});
console.log(new_animals);