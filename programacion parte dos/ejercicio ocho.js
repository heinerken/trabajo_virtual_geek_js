
const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const ul = document.querySelector ("ul")

ul.innerHTML = `

<li> 
${firstDogName}
<img src = ${firstDogImage}>
</li>
<li>
${secondDogName}
<img src = ${secondDogImage}>
</li>
<li> 
${thirdDogName}
<img src = ${thirdDogImage}>
</li>`