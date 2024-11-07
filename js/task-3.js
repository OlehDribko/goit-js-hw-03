function filterArray(numbers, value) {
    const newArray = [];  // створюємо порожній масив , для прийняття відповідних параметрів

   for(const number of numbers){ // створюємо фикл фор оф , для перебирання масиву, (так, як доступ до лічильника не потрібен)
 
if(number > value){ // перевіряємо чи нас влаштовує значення 
    newArray.push(number);// якщо влаштувало, додаємо його у новий масив
}

   }
return newArray;// виводиво новий масив як результат виконання функції




}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
