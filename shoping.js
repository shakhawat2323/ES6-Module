// const hidos = () => {
//   const name = document.getElementById("name");
//   const num = document.getElementById("num");
//   const procuct = name.value;
//   const producttt = num.value;
//   name.value = "";
//   num.value = "";
//   console.log(procuct, producttt);
//   kmonacodos(procuct, producttt);
//   savetheprodcut(procuct, producttt);
// };

// const kmonacodos = (procuct, producttt) => {
//   const hello = document.getElementById("list");
//   const li = document.createElement("li");
//   li.innerText = ` ${procuct} : ${producttt}`;
//   hello.append(li);
// };

// const shoppingcard = () => {
//   let cart = {};
//   const soping = localStorage.getItem("cart");
//   if (soping) {
//     cart = JSON.parse(soping);
//   }
//   return cart;
// };

// const savetheprodcut = (procuct, producttt) => {
//   const cart = shoppingcard();
//   cart[procuct] = producttt;
//   const stringifii = JSON.stringify(cart);
//   localStorage.setItem("cart", stringifii);
// };

// const showthedisply = () => {
//   const savecart = shoppingcard();
//   console.log(savecart);
//   for (let hi in savecart) {
//     const producting = savecart[hi];
//     console.log(hi, producting);
//     kmonacodos(hi, producting);
//   }
// };

// showthedisply();
