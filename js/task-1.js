function slugify(title) {
    const textTransfom = title.toLowerCase().split(" "); // переводимо у нижній регістр та перетворюємо на масив , з роздільником пробіл
    
     
    
    return textTransfom.join('-'); // передаємо значення функції з обєднанням




}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
