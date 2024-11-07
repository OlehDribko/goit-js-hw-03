function makeArray (firstArray, secondArray, maxLength) {
    const fullArray = firstArray.concat(secondArray); // обєднужємо 2 масиви
    
if(fullArray.length > maxLength){                 // визначаємо надто довгий масив

    const truncatedArray = fullArray.slice(0, maxLength); // вирізаємо зайві елементи

return truncatedArray; // повертаємо функції потрібний масив
}




return fullArray;// повертаємо обєднаний масив який задовільняє парамент довжини




}



console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
