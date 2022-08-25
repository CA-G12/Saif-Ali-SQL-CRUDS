const submitBtn = document.querySelector('#contact-submit');
const tBody = document.querySelector('tbody');
const itemName = document.querySelector('#item-name');
const itemPrice = document.querySelector('#item-price');
const seller = document.querySelector('#seller');
const category = document.querySelector('#category');

//! Get all DB tables  data

const fetchAll = () => {
  fetch('/items')
    .then((data) => data.json())
    .then((res) => {
      tBody.textContent = '';

      res.forEach((ele, index) => {
        tBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${ele.item_name}</td>
            <td>${ele.price}</td>
            <td>${ele.seller_name}</td>
            <td><button class = 'del-btn' onclick = "deleteItem(${ele.item_id})">DEL</button></td>

            </tr>
        `;
      });
    })
    .catch((err) => err);

  fetch('/sellers')
    .then((data) => data.json())
    .then((res) => {
      seller.textContent = '';
      res.forEach((ele) => {
        seller.innerHTML += `
        <option id= "${ele.seller_id}">${ele.seller_name}</option>
      `;
      });
    })
    .catch((err) => err);

  // fetch('/categories')
  //   .then((data) => data.json())
  //   .then((res) => {
  //     category.textContent = '';
  //     res.forEach((ele) => {
  //       category.innerHTML += `
  //       <input type="checkbox" name="${ele.name}" id="${ele.id}">
  //       <label for="${ele.id}">${ele.name}</label>
  //     `;
  //     });
  //   })
  //   .catch((err) => err);
};
fetchAll();

//! store all form info to DB:

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const checkedCategories = [];
  const categoriesElements = Array.from(category.querySelectorAll('input[type="checkbox"]'));
  categoriesElements.forEach((ele) => (ele.checked ? checkedCategories.push(ele.id) : ''));

  const data = {
    name: itemName.value,
    seller_id: seller.options[seller.selectedIndex].id,
    price: itemPrice.value,
    category: checkedCategories,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  fetch('/insertItems', options)
    .then(() => fetchAll());

  document.querySelector('form').reset();
});

const deleteItem = (id) => {
  fetch(`/deleteItem/${id}`, { method: 'DELETE' })
    .then(() => fetchAll());
};

// const updateItem = (id) => {
//   const checkedCategories = [];
//   const categoriesElements = Array.from(category.querySelectorAll('input[type="checkbox"]'));
//   categoriesElements.forEach((ele) => (ele.checked ? checkedCategories.push(ele.id) : ''));

//   const editedData = {
//     name: itemName.value,
//     seller_id: seller.options[seller.selectedIndex].id,
//     price: itemPrice.value,
//     category: checkedCategories,
//   };

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(editedData),
//     headers: { 'Content-Type': 'application/json' },
//   };

//   fetch(`/updateItem/${id}`, options)
//     .then(() => fetchAll());
//   document.querySelector('form').reset();
// };
