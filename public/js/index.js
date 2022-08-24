const submitBtn = document.querySelector('#contact-submit');
const tBody = document.querySelector('tbody');
const itemName = document.querySelector('#item-name');
const itemPrice = document.querySelector('#item-price');
const seller = document.querySelector('#seller');
const category = document.querySelector('#category');

fetch('/items')
  .then((data) => data.json())
  .then((res) => {
    tBody.textContent = '';
    res.forEach((ele) => {
      tBody.innerHTML += `
        <tr>
            <td>${ele.id}</td>
            <td>${ele.name}</td>
            <td>${ele.price}</td>
            <td>+${ele.seller_id}</td>
            <td>-0.36%</td>
        </tr>
        `;
    });
  })
  .catch((err) => err);

//! Append Sellers names to Home Page Dynamically

fetch('/sellers')
  .then((data) => data.json())
  .then((res) => {
    seller.textContent = '';
    res.forEach((ele) => {
      seller.innerHTML += `
        <option>${ele.name}</option>
      `;
    });
  })
  .catch((err) => err);

//! Append Categories names to Home Page Dynamically

fetch('/categories')
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    category.textContent = '';
    res.forEach((ele) => {
      category.innerHTML += `
        <input type="checkbox" name="${ele.name}" id="${ele.name}">
        <label for="${ele.name}">${ele.name}</label>        
      `;
    });
  })
  .catch((err) => err);

//! Append Categories names to Home Page Dynamically





// submitBtn.addEventListener('click', () => {

//   const data = {
//     name: itemName.value,
//     seller: seller.value,
//     price: itemPrice.value,
//   };

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: { 'Content-Type': 'application/json' }
//   };


// });
