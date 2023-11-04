//whish count
if (JSON.parse(localStorage.getItem("fav"))) {
  let wishCount = JSON.parse(localStorage.getItem("fav")).length;
  let wishCountSpan = document.querySelector("#whish-list-count");
  wishCountSpan.textContent = wishCount;
}

//cart count
if (JSON.parse(localStorage.getItem("cart"))) {
  let basketCount = JSON.parse(localStorage.getItem("cart")).length;
  let basketCountSpan = document.querySelector("#basket-quantity");
  basketCountSpan.textContent = basketCount;
}



const userInfo = document.querySelector('#user-info');
const userOrder = document.querySelector('#user-orders');

document.addEventListener("DOMContentLoaded", () => {
    
    const API_BASE_URL = 'http://localhost:3000';
    
    axios.get(API_BASE_URL + '/users')
      .then( async (response)  => {
        console.log(response);

        const users = await response.data;
        console.log(users);

        const dataFromLocal = JSON.parse(localStorage.getItem('users')); 
    
        let i = 0;
        const newArr = [];
        while (i < dataFromLocal.length) {
          const findedUser = users.find((user) => user.id == dataFromLocal[i]);
          if (findedUser) {
              newArr.push(findedUser);
              console.log(newArr);
            }
            i++;
        }
        console.log(newArr); 
      })
  });
  





// const userInfo = document.querySelector('#user-info');
// const userOrder = document.querySelector('#user-orders');


// document.addEventListener("DOMContentLoaded", () => {
    
//     const API_BASE_URL = 'http://localhost:3000';
    
//     axios.get(API_BASE_URL + '/users')


//       .then(async (response) => {
//         const users = await response.data;
//         console.log(users); 
  
//         const dataFromLocal = JSON.parse(localStorage.getItem('users'));
//         console.log(dataFromLocal); 

//         dataFromLocal.JSON.stringify.forEach((id) =>{
//             id == user.id
//             console.log(id);
//         })
    
//       })
//   });
  