import faker from 'faker';

let products = ""

for (let i = 0; i < 4; i++) {
    const product = faker.commerce.product();
    products += `<div>${product}</div>`;
}
console.log(products)
document.querySelector('#dev-products').innerHTML = products;