fetch('/items')
  .then((data) => data.json())
  .then((res) => {
    document.querySelector('tbody').textContent = '';
    res.forEach((ele) => {
      document.querySelector('tbody').innerHTML += `
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
