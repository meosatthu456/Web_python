const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let users = JSON.parse(localStorage.getItem('myUsers'));
let loginUser = JSON.parse(localStorage.getItem('loginUser'));
let pageProduct = JSON.parse(localStorage.getItem('pageProduct'))
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];


function render() {
   $('.content-container').innerHTML = `
   <img src="${pageProduct.img}" alt="img">
   <div class="info-container">
       <div class="info-container-header">
           <h3>${pageProduct.name}</h3>
           <p>Thương hiệu doncle & banana</p>
       </div>
       <p class="discount"><i class="fas fa-tag"></i> Giảm giá 0.1%</p>
       <h3 class="price">${pageProduct.price} đ</h3>             
       <div class="info-container-footer">
           <div class="pro-pic">
               <p>Hình ảnh sản phẩm: 1</p>
               <img src="${pageProduct.img}" alt="">
           </div>
           <button>Chọn Mua</button>
       </div>
   </div>`

   if (loginUser) {
      $('.nav .login-register').innerHTML = `<div class="user-login">
          <p>Xin chào ${loginUser.email}</p>
          <a href="" id="logout" onclick="logout()">Đăng xuất</a>
          <a href="./check_order.html" id="logout">Xem đơn hàng</a>
       </div>`
   }
}

function logout() {
   loginUser = null;
   localStorage.setItem('loginUser', JSON.stringify(loginUser));
   render();
}


const modal = $('.modal')
const btnOpenRegister = $('.js-register')
const btnOpenLogin = $('.js-login')

render()

// Modal
function closeModal(modalElement) {
   modalElement.classList.remove('open');
}

function openModal(modalElement) {
   modalElement.classList.add('open');
}

btnOpenRegister.addEventListener('click', () => {
   openModal(modal);
   $('.modal-form').innerHTML = htmlRegister;
   runCheckRegister();
});

btnOpenLogin.addEventListener('click', () => {
   openModal(modal);
   $('.modal-form').innerHTML = htmlLogin;
   runCheckLogin();
});

function updateLocalStorage() {
   let usersData = JSON.stringify(users);
   let loginUserData = JSON.stringify(loginUser);

   localStorage.setItem('myUsers', usersData);
   localStorage.setItem('loginUser', loginUserData)
}

//========Validate=========
let htmlRegister = `
<div class="form-header">
<a href="#" onclick="closeModal(modal)"><i class="fas fa-times"></i></a>
<h2>Đăng ký</h2>
</div>
<div class="warning"></div>
<form class="form-content form-register">
<div class="form-group">
   <label class="form-label">Email</label>
   <input
      class="form-input"
      type="email"
      name="email"
      placeholder="Example@email.com"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">Mật khẩu</label>
   <input
      class="form-input"
      type="password"
      name="password"
      placeholder="Nhập mật khẩu từ 6 kí tự trở lên"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">Nhập lại mật khảu</label>
   <input
      class="form-input"
      type="password"
      name="comfirmpass"
      placeholder="Nhập lại mật khẩu"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">SĐT</label>
   <input
      class="form-input"
      type="number"
      name="phone"
      placeholder="0123456789"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label"></label>
   <div>
      <input
         class="form-input"
         type="checkbox"
         name="checkbox"
         placeholder="0123456789"
         value=""                
      />
      Tôi đồng ý với <a href="#">Điều khoản sử dụng</a>
   </div>
   <span class="message-error"></span>
</div>
<button class="form-submit">Đăng ký</button>
</form>
`

let htmlLogin = `
<div class="form-header">
    <a href ="#" onclick="closeModal(modal)"><i class="fas fa-times"></i></a>
    <h2>Đăng Nhập</h2>
</div>
<div class="warning">
</div>
<form class="form-content form-login">
   <div class="form-group">
      <label class="form-label">Tài khoản email</label>
      <input
         class="form-input login-input"
         type="email"
         name="email"
         placeholder="example@gmail.com"
         value=""
      />
      <span class="message-error"></span>
   </div>
   <div class="form-group">
      <label class="form-label">Mật khẩu</label>
      <input
         class="form-input login-input"
         type="password"
         name="password"
         placeholder="Nhập mật khẩu"
         value=""
      />
      <span class="message-error"></span>
   </div>
   <button class="form-submit">Đăng nhập</button>
   <p>Bạn chưa có tài khoản? <a href="#" onclick="tranferRegister()">Đăng ký</a></p>
   <a href="./login.html">Đăng nhập admin</a>
</form>
`

//Register form
function runCheckRegister() {
   Validator({
      form: '.form-register',
      formGroupSelector: '.form-group',
      errorSelector: '.message-error',
      rules: [
         Validator.isRequired(
            'input[name="email"]',
            "Vui lòng nhập email"
         ),
         Validator.isEmail('input[name="email"]'),
         Validator.isRequired(
            'input[name="password"]',
            "Vui lòng nhập mật khẩu"
         ),
         Validator.minLength('input[name="password"]', 6),
         Validator.isRequired(
            'input[name="comfirmpass"]',
            'Vui lòng nhập mật khẩu'
         ),
         Validator.isDuplicated(
            'input[name="comfirmpass"]',
            () => {
               return document.querySelector('input[name="password"]')
                  .value;
            },
            "Mật khẩu không trùng khớp"
         ),
         Validator.isRequired(
            'input[name="phone"]',
            "Vui lòng nhập số điện thoại"
         ),
         Validator.isCorrectPhone('input[name="phone"]'),
         Validator.isRequired(
            'input[name="checkbox"]',
            'Bạn chưa đồng ý điều khoản sử dụng'
         ),
      ],
      onSubmit: function (data) {
         checkRegister(data);
      },
   })

   function checkRegister(data) {
      let isFound = false;
      let errorMessage = ``
      for (let user of users) {
         if (data.email === user.email && data.phone === user.phone) {
            isFound = true;
         errorMessage = `Email và số điện thoại này đã được đăng ký`
         }
         else if (data.email === user.email) {
            isFound = true;
            errorMessage = `Email này đã được đăng ký. `
         }
         else if (data.phone === user.phone) {
            isFound = true;
            errorMessage = `Số điện thoại này đã được đăng ký`
         }

         if (isFound) {
            $('.warning').innerHTML = `<div class="block-warning">
                    <i class="fas fa-exclamation-circle"></i> ${errorMessage}</div>`
            break;
         }
      }
      if (!isFound) {
         updateUsers(data)
         window.location = "./pro_info.html"
      }
   }

   function updateUsers(data) {
      users.push({
         email: data.email,
         password: data.password,
         phone: data.phone,
         typeUser: "member"
      });
      loginUser = users[users.length - 1];
      updateLocalStorage();
   }

   enableSubmit();
}

//Login form
function runCheckLogin() {
   Validator({
      form: '.form-login',
      formGroupSelector: '.form-group',
      errorSelector: '.message-error',
      rules: [
         Validator.isRequired(
            'input[name="email"]',
            "Vui lòng nhập email"
         ),
         Validator.isEmail('input[name="email"]'),
         Validator.isRequired(
            'input[name="password"]',
            "Vui lòng nhập mật khẩu"
         ),
         Validator.minLength('input[name="password"]', 6),
      ],
      onSubmit: function (data) {
         checkLogin(data)
      }
   });

   function checkLogin(data) {
      let isFound = false;
      for (let user of users) {
         if (data.email === user.email && data.password === user.password && user.typeUser === 'member') {
            isFound = true;
            loginUser = user;
            updateLocalStorage();
            window.location = "./pro_info.html"
         }
      }
      if (!isFound) {
         $('.warning').innerHTML = `<div class="block-warning">
                 <i class="fas fa-exclamation-circle"></i> Tài khoản hoặc mật khẩu của bạn đã sai
              </div>`
         resetInput()
      }
   }

   function resetInput() {
      let inputs = $$('input')
      for (let input of inputs) {
         input.value = '';
      }
   }
   enableSubmit();
}

function enableSubmit() {
   $('body').addEventListener('keypress', (e) => {
      if (e.keyCode === 13)
         $('button[class="form-submit"]').click();
   })
}

//===cart
function updateProductToCart() {
   let cartData = JSON.stringify(cart);
   localStorage.setItem('cart', cartData);
}

function deleteCart(index, quantity = 1) {
   cart.splice(index, quantity);
}

function updateCount(index, count) {
   if (count < 1) return;
   cart[index].count = count;
   renderCart()
}

$('.info-container-footer button').addEventListener('click', () => {
   if (loginUser) {
      alert('Đã thêm vào giỏ hàng')
      if (cart.length === 0)
         cart.push(createCartProduct(pageProduct));
      else {
         let isFind = false;
         for (let product of cart) {
            if (product.name == pageProduct.name) {
               product.count+= 1;
               isFind = true;
               break;
            }
         }

         if(!isFind) {
            cart.push(createCartProduct(pageProduct));
         }
      }
      updateProductToCart();
      renderCart()
   }
   else {
      alert('Bạn phải đăng nhập để có thể mua hàng!!');
   }
})

function createCartProduct(product) {
   let cartProduct = product;
   cartProduct.count = 1;
   delete cartProduct.quantity;
   return cartProduct;
}

function updateProductToCart() {
   let cartData = JSON.stringify(cart);
   localStorage.setItem('cart', cartData);
}

function renderCart() {
   let cartHtml = ``;
   let Total = 0;
   cart.forEach(item => Total += item.count * item.price)

   for (let item of cart) {
      cartHtml += `<li>
      <div class="info"><img src="${item.img}" alt="img">
         <p>${item.name}</p>
      </div>
      <p class="p">${item.price} đ</p>
      <div class="quantity">
         <button class="remove">-</button>
         <input type="text" value="${item.count}">
         <button class="add">+</button>
      </div>
      <p class="total-price-product">${item.price * item.count} đ</p>
      <i class="fas fa-times delete-product"></i>
   </li>`
   }


   $('.cart-list').innerHTML = cartHtml;

   let deleteBtns = $$('.delete-product');
   let addCountBtns = $$('.add');
   let removeCountBtns = $$('.remove');

   for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener('click', () => {
         deleteCart(i);
         updateProductToCart();
         renderCart();
      })

      addCountBtns[i].addEventListener('click', () => updateCount(i, cart[i].count + 1))
      removeCountBtns[i].addEventListener('click', () => updateCount(i, cart[i].count - 1))
   }

   $('.total-price').innerHTML = `${Total} đ`;
}

$('.clean-cart').addEventListener('click', () => {
   if (confirm("Bạn có muốn xóa tất cả sản phẩm không ?")) {
      deleteCart(0, cart.length);
      updateProductToCart()
      renderCart();
   }
})

renderCart()