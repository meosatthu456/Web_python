//const $ = document.querySelector.bind(document);
//const $$ = document.querySelectorAll.bind(document);
alert("1")
//let users = localStorage.getItem('myUsers') ? JSON.parse(localStorage.getItem('myUsers')) : [{
//   email: "congty@gmail.com",
//   password: "12345678",
//   phone: "0142125671",
//   typeUser: "admin",
//}
//];
//let loginUser = JSON.parse(localStorage.getItem('loginUser'))
//
//
//let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [
//   {
//      name: 'Giày thể thao GG08',
//      type: 'Giay',
//      price: 3500000,
//      quantity: 200,
//      img: './img/giaynam.PNG',
//   },
//   {
//      name: 'Giày thể thao GG09',
//      type: 'Giay',
//      price: 1200300,
//      quantity: 200,
//      img: './img/giaynam2.PNG',
//   },
//   {
//      name: 'Giày thể thao GG10',
//      type: 'Giay',
//      price: 700000,
//      quantity: 200,
//      img: './img/giaynam3.PNG',
//   },
//   {
//      name: 'Áo thun nam năng động cá tính',
//      type: 'maleCloth',
//      price: 900000,
//      quantity: 200,
//      img: './img/aonam1.PNG',
//   },
//   {
//      name: 'Bộ áo quần jiusport',
//      type: 'maleCloth',
//      price: 12000000,
//      quantity: 200,
//      img: './img/aonam2.PNG',
//   },
//   {
//      name: 'Bộ 3 áo thun viciican miasa',
//      type: 'maleCloth',
//      price: 210000,
//      quantity: 200,
//      img: './img/aonam3.PNG',
//   },
//   {
//      name: 'Áo banaca lona giành cho nữ',
//      type: 'femaleCloth',
//      price: 99000990,
//      quantity: 200,
//      img: './img/aonu1.PNG',
//   },
//   {
//      name: 'Áo thun nam unixec',
//      type: 'maleCloth',
//      price: 350000,
//      quantity: 200,
//      img: './img/aonam4.PNG',
//   },
//   {
//      name: 'Áo Amani cao cấp',
//      type: 'maleCloth',
//      price: 900000,
//      quantity: 200,
//      img: './img/aonam5.PNG',
//   },
//   {
//      name: 'Bộ áo quần nam tay dài cổ tròn ấm áp',
//      type: 'maleCloth',
//      price: 350000,
//      quantity: 200,
//      img: './img/aonam6.PNG',
//   },
//   {
//      name: 'Áo nam thời trang 2021',
//      type: 'maleCloth',
//      price: 300000,
//      quantity: 200,
//      img: './img/aonam7.PNG',
//   },
//   {
//      name: 'Áo thun nam VKLAS',
//      type: 'maleCloth',
//      price: 200000,
//      quantity: 200,
//      img: './img/aonam8.PNG',
//   },
//   {
//      name: 'Áo nam Hàn Quốc QTA3',
//      type: 'maleCloth',
//      price: 2000000,
//      quantity: 200,
//      img: './img/aonam9.PNG',
//   },
//];
//let product = []
//
//
//let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
//let order = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];
//let pageProduct = []
//
//updateLocalStorage()
//
////let productsHtml = [...products];
//let productsHtml = [];
//
//let productsInPage = 10;
//
//const modal = $('.modal')
//const btnOpenRegister = $('.js-register')
//const btnOpenLogin = $('.js-login')
//
//const topsale = $('.top-sale select')
//const listtopsale = $('.top-sale .product-list')
//
//const navItems = $$('.nav-content-list li a')
//const product = $('.product .product-list')
//
//render();
//
//// Modal
//function closeModal(modalElement) {
//   modalElement.classList.remove('open');
//}
//
//function openModal(modalElement) {
//   modalElement.classList.add('open');
//}
//
//let htmlRegister = `
//<div class="form-header">
//<a href="#" onclick="closeModal(modal)"><i class="fas fa-times"></i></a>
//<h2>Đăng ký</h2>
//</div>
//<div class="warning"></div>
//<form class="form-content form-register">
//<div class="form-group">
//   <label class="form-label">Email</label>
//   <input
//      class="form-input"
//      type="email"
//      name="email"
//      placeholder="Example@email.com"
//      value=""
//   />
//   <span class="message-error"></span>
//</div>
//<div class="form-group">
//   <label class="form-label">Mật khẩu</label>
//   <input
//      class="form-input"
//      type="password"
//      name="password"
//      placeholder="Nhập mật khẩu từ 6 kí tự trở lên"
//      value=""
//   />
//   <span class="message-error"></span>
//</div>
//<div class="form-group">
//   <label class="form-label">Nhập lại mật khẩu</label>
//   <input
//      class="form-input"
//      type="password"
//      name="comfirmpass"
//      placeholder="Nhập lại mật khẩu"
//      value=""
//   />
//   <span class="message-error"></span>
//</div>
//<div class="form-group">
//   <label class="form-label">SĐT</label>
//   <input
//      class="form-input"
//      type="number"
//      name="phone"
//      placeholder="0123456789"
//      value=""
//   />
//   <span class="message-error"></span>
//</div>
//<div class="form-group">
//   <label class="form-label"></label>
//   <div>
//      <input
//         class="form-input"
//         type="checkbox"
//         name="checkbox"
//         placeholder="0123456789"
//         value=""
//      />
//      Tôi đồng ý với <a href="#">Điều khoản sử dụng</a>
//   </div>
//   <span class="message-error"></span>
//</div>
//<button class="form-submit">Đăng ký</button>
//</form>
//`
//
//let htmlLogin = `
//<div class="form-header">
//    <a href ="#" onclick="closeModal(modal)"><i class="fas fa-times"></i></a>
//    <h2>Đăng Nhập</h2>
//</div>
//<div class="warning">
//</div>
//<form class="form-content form-login">
//   <div class="form-group">
//      <label class="form-label">Tài khoản email</label>
//      <input
//         class="form-input login-input"
//         type="email"
//         name="email"
//         placeholder="example@gmail.com"
//         value=""
//      />
//      <span class="message-error"></span>
//   </div>
//   <div class="form-group">
//      <label class="form-label">Mật khẩu</label>
//      <input
//         class="form-input login-input"
//         type="password"
//         name="password"
//         placeholder="Nhập mật khẩu"
//         value=""
//      />
//      <span class="message-error"></span>
//   </div>
//   <button class="form-submit">Đăng nhập</button>
//   <p>Bạn chưa có tài khoản? <a href="#" onclick="tranferRegister()">Đăng ký</a></p>
//</form>
//`
//
//btnOpenRegister.addEventListener('click', () => {
//   openModal(modal);
//   $('.modal-form').innerHTML = htmlRegister;
//   runCheckRegister();
//});
//
//btnOpenLogin.addEventListener('click', () => {
//   openModal(modal);
//   $('.modal-form').innerHTML = htmlLogin;
//   runCheckLogin();
//});
//
//function tranferRegister() {
//   $('.modal-form').innerHTML = htmlRegister
//   runCheckRegister();
//}
//
//// Content Code
//function viewTopSale(inp) {
//   switch (inp) {
//      case 'ngay':
//         listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/aonu1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">áo banacani lona giành cho nữ </p><button class="buy">Mua ngay</button></div></li> <li class="products" ><img src="./img/aonam1.PNG" alt="product"><div class="products-content"><p class="price">300000 đ</p><p class="description">Áo nam năng động cá tính</p><button class="buy">Mua ngay</button></div></li></ul> '
//         break;
//      case 'thang':
//         listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/aonu1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">áo banacani lona giành cho nữ </p><button class="buy">Mua ngay</button></div></li><li class="products" ><img src="./img/aonam1.PNG" alt="product"><div class="products-content"><p class="price">300000 đ</p><p class="description">Áo nam năng động cá tính</p><button class="buy">Mua ngay</button></div></li> </ul> '
//         break;
//      case 'nam':
//         listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/giaynam.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">Giày thể thao GG08</p><button class="buy">Mua ngay</button></div></li><li class="products" ><img src="./img/aonu1.PNG" alt="product"><div class="products-content"><p class="price">99000990 đ</p><p class="description">áo banacani lona giành cho nữ </p><button class="buy">Mua ngay</button></div></li> </ul> '
//         break;
//
//      default:
//         break;
//   }
//}
//
////Lọc product
//
//for (let item of navItems) {
//   item.addEventListener('click', () => {
//      productsHtml = [];
////      for (let product of products) {
////         if (item.getAttribute('typeproduct').toLowerCase() == product.type.toLowerCase())
////            productsHtml.push(product);
////      }
////      render()
//   });
//}
//
//function nonAccentVietnamese(str) {
//   str = str.toLowerCase();
//   //     We can also use this instead of from line 11 to line 17
//   //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
//   //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
//   //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
//   //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
//   //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
//   //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
//   //     str = str.replace(/\u0111/g, "d");
//   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//   str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//   str = str.replace(/đ/g, "d");
//   // Some system encode vietnamese combining accent as individual utf-8 characters
//   str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
//   str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
//   return str;
//}
//
//$('.search a').addEventListener('click', () => {
//   let searchValue = nonAccentVietnamese($('.search-ip').value.toLowerCase());
//   productsHtml = [];
//   for (let product of products) {
//      if (nonAccentVietnamese(product.name.toLowerCase()).includes(searchValue))
//         productsHtml.push(product);
//   }
//   $('.search-ip').value = '';
//   render();
//})
//
//
////========Validate=========
////Register form
//function runCheckRegister() {
//   Validator({
//      form: '.form-register',
//      formGroupSelector: '.form-group',
//      errorSelector: '.message-error',
//      rules: [
//         Validator.isRequired(
//            'input[name="email"]',
//            "Vui lòng nhập email"
//         ),
//         Validator.isEmail('input[name="email"]'),
//         Validator.isRequired(
//            'input[name="password"]',
//            "Vui lòng nhập mật khẩu"
//         ),
//         Validator.minLength('input[name="password"]', 6),
//         Validator.isRequired(
//            'input[name="comfirmpass"]',
//            'Vui lòng nhập mật khẩu'
//         ),
//         Validator.isDuplicated(
//            'input[name="comfirmpass"]',
//            () => {
//               return document.querySelector('input[name="password"]')
//                  .value;
//            },
//            "Mật khẩu không trùng khớp"
//         ),
//         Validator.isRequired(
//            'input[name="phone"]',
//            "Vui lòng nhập số điện thoại"
//         ),
//         Validator.isCorrectPhone('input[name="phone"]'),
//         Validator.isRequired(
//            'input[name="checkbox"]',
//            'Bạn chưa đồng ý điều khoản sử dụng'
//         ),
//      ],
//      onSubmit: function (data) {
//         checkRegister(data);
//      },
//   })
//
//   function checkRegister(data) {
//      let isFound = false;
//      let errorMessage = ``
//      for (let user of users) {
//         if (data.email === user.email && data.phone === user.phone) {
//            isFound = true;
//            errorMessage = `Email và số điện thoại này đã được đăng ký`
//         }
//         else if (data.email === user.email) {
//            isFound = true;
//            errorMessage = `Email này đã được đăng ký. `
//         }
//         else if (data.phone === user.phone) {
//            isFound = true;
//            errorMessage = `Số điện thoại này đã được đăng ký`
//         }
//
//         if (isFound) {
//            $('.warning').innerHTML = `<div class="block-warning">
//                    <i class="fas fa-exclamation-circle"></i> ${errorMessage}</div>`
//            break;
//         }
//      }
//      if (!isFound) {
//         updateUsers(data)
//         window.location = "./index.html"
//      }
//   }
//
//   function updateUsers(data) {
//      users.push({
//         email: data.email,
//         password: data.password,
//         phone: data.phone,
//         typeUser: "member"
//      });
//      loginUser = users[users.length - 1];
//      updateLocalStorage();
//   }
//
//   enableSubmit();
//}
//
////Login form
//function runCheckLogin() {
//   Validator({
//      form: '.form-login',
//      formGroupSelector: '.form-group',
//      errorSelector: '.message-error',
//      rules: [
//         Validator.isRequired(
//            'input[name="email"]',
//            "Vui lòng nhập email"
//         ),
//         Validator.isEmail('input[name="email"]'),
//         Validator.isRequired(
//            'input[name="password"]',
//            "Vui lòng nhập mật khẩu"
//         ),
//         Validator.minLength('input[name="password"]', 6),
//      ],
//      onSubmit: function (data) {
//         checkLogin(data)
//      }
//   });
//
//   function checkLogin(data) {
//      let isFound = false;
//      for (let user of users) {
//         if (data.email === user.email && data.password === user.password && user.typeUser === 'member') {
//            isFound = true;
//            loginUser = user;
//            updateLocalStorage();
//            window.location = "./index.html"
//         }
//      }
//      if (!isFound) {
//         $('.warning').innerHTML = `<div class="block-warning">
//                 <i class="fas fa-exclamation-circle"></i> Tài khoản hoặc mật khẩu của bạn đã sai
//              </div>`
//         resetInput()
//      }
//   }
//
//   function resetInput() {
//      let inputs = $$('input')
//      for (let input of inputs) {
//         input.value = '';
//      }
//   }
//   enableSubmit();
//}
//
//function updateLocalStorage() {
//   let usersData = JSON.stringify(users);
//   let loginUserData = JSON.stringify(loginUser);
//
//   localStorage.setItem('myUsers', usersData);
//   localStorage.setItem('loginUser', loginUserData)
//}
//
//function enableSubmit() {
//   $('body').addEventListener('keypress', (e) => {
//      if (e.keyCode === 13)
//         $('button[class="form-submit"]').click();
//   })
//}
//
////render
//function renderNumberPage() {
//   for (let item of $$('.product-pages-number')) {
//      item.addEventListener('click', () => {
//         $('.product-list').innerHTML = htmlProduct(item.getAttribute('index'));
//      })
//   }
//}
//
////renderNumberPage()
//
//
//function render() {
//   let myLogo = $('.nav .login-register');
//
//   //render UserLogin
//   if (loginUser) {
//      myLogo.innerHTML = `<div class="user-login">
//          <p>Xin chào ${loginUser.email}</p>
//          <a href="" id="logout" onclick="logout()">Đăng xuất</a>
//          <a href="./check_order.html" id="logout">Xem đơn hàng</a>
//       </div>`
//   }
//
//   //Number Page
//   let pages = Math.ceil(productsHtml.length / productsInPage);
//   let pagesHTML = [];
//   for (let i = 0; i < pages; i++) {
//      if (i === 0)
//         pagesHTML.push(
//            `<li class="product-pages-number" index="${i}"><a href="">${i + 1}</a></li>`
//         )
//      else
//         pagesHTML.push(
//            `<li class="product-pages-number" index="${i}"><a href"#">${i + 1}</a></li>`
//         )
//   }
//
//   $('.product-pages').innerHTML = pagesHTML.join("");
//
//   //render product
//    $('.product-list').innerHTML = ""; //htmlProduct();
//   renderNumberPage();
//
//   let productBtn = $$('.products a')
//   const buyBtns = $$('.products .js-buy');
//
//   for (let i = 0; i < productBtn.length; i++) {
//      let btnIndex = parseInt(productBtn[i].getAttribute('index'))
//
//      //link to Pro Info
//      productBtn[i].addEventListener('click', () => {
//         pageProduct = productsHtml[btnIndex];
//         localStorage.setItem('pageProduct', JSON.stringify(pageProduct));
//      })
//      //Handle buyBtn
//      buyBtns[i].addEventListener('click', () => {
//         if (loginUser) {
//            alert('Đã thêm vào giỏ hàng')
//            if (cart.length === 0)
//               cart.push(createCartProduct(productsHtml[btnIndex]));
//            else {
//               let isFind = false;
//               for (let product of cart) {
//                  if (product.name == productsHtml[btnIndex].name) {
//                     product.count += 1;
//                     isFind = true;
//                     break;
//                  }
//               }
//
//               if (!isFind) {
//                  cart.push(createCartProduct(productsHtml[btnIndex]));
//               }
//            }
//            updateProductToCart();
//            renderCart();
//         }
//         else {
//            alert('Bạn phải đăng nhập để có thể mua hàng!!');
//            openModal(modal);
//            $('.modal-form').innerHTML = htmlLogin;
//            runCheckLogin();
//         }
//      })
//
//      function createCartProduct(product) {
//         let cartProduct = product;
//         cartProduct.count = 1;
//         delete cartProduct.quantity;
//         return cartProduct;
//      }
//   }
//
//}
//
//function htmlProduct(index = 0) {
//   let html = [];
//   for (let i = index * productsInPage; i < index * productsInPage + productsInPage && i < productsHtml.length; i++) {
//      html.push(`<li class="products">
//         <a href="./pro_info.html" index="${i}"><img src="${productsHtml[i].img}" alt="product" /></a>
//         <div class="products-content">
//            <p class="price">${productsHtml[i].price}đ</p>
//            <p class="description">${productsHtml[i].name}</p>
//            <button class="buy js-buy">Thêm vào giỏ hàng</button>
//         </div>
//      </li>`)
//   }
//   return html.join("");
//}
//
//function logout() {
//   loginUser = null;
//   updateLocalStorage();
//   render();
//}
//
////cart
//function updateProductToCart() {
//   let cartData = JSON.stringify(cart);
//   localStorage.setItem('cart', cartData);
//}
//
//function deleteCart(index, quantity = 1) {
//   cart.splice(index, quantity);
//}
//
//function updateCount(index, count) {
//   if (count < 1) return;
//   cart[index].count = count;
//   updateProductToCart();
//   renderCart()
//}
//
//
//
//function renderCart() {
//   let cartHtml = ``;
//   let Total = 0;
//   cart.forEach(item => Total += item.count * item.price)
//
//   for (let item of cart) {
//      cartHtml += `<li>
//      <div class="info"><img src="${item.img}" alt="img">
//         <p>${item.name}</p>
//      </div>
//      <p class="p">${item.price} đ</p>
//      <div class="quantity">
//         <button class="remove">-</button>
//         <input type="text" value="${item.count}">
//         <button class="add">+</button>
//      </div>
//      <p class="total-price-product">${item.price * item.count} đ</p>
//      <i class="fas fa-times delete-product"></i>
//   </li>`
//   }
//
//
//   $('.cart-list').innerHTML = cartHtml;
//
//   let deleteBtns = $$('.delete-product');
//   let addCountBtns = $$('.add');
//   let removeCountBtns = $$('.remove');
//
//   for (let i = 0; i < deleteBtns.length; i++) {
//      deleteBtns[i].addEventListener('click', () => {
//         deleteCart(i);
//         updateProductToCart();
//         renderCart();
//      })
//
//      addCountBtns[i].addEventListener('click', () => updateCount(i, cart[i].count + 1))
//      removeCountBtns[i].addEventListener('click', () => updateCount(i, cart[i].count - 1))
//   }
//
//   $('.total-price').innerHTML = `${Total} đ`;
//}
//
//$('.clean-cart').addEventListener('click', () => {
//   if (confirm("Bạn có muốn xóa tất cả sản phẩm không ?")) {
//      deleteCart(0, cart.length);
//      updateProductToCart()
//      renderCart();
//   }
//})
//
//
//renderCart()
//
////responsive
//var nav = $('.nav')
//var navlist = $('.fa-chevron-down')
//
//navlist.onclick = function name(params) {
//   let isclose = nav.clientHeight === 48;
//   if (isclose) {
//      nav.style.height = 'auto'
//   }
//   else {
//      nav.style.height = null
//   }
//}
//localStorage.clear();
//
//
