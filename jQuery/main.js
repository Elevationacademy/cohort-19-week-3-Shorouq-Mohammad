//exercise 1 & 2
// $("body").append(`<input type="text" name="" id="input" placeholder="Human Name">`)
// $("body").append(`<button>Add human</button>`)

// $("body").on("click","button", function(){
//     $("ul").append(`<li>${$("input").val()}</li>`)
// })

// $("ul").on("click", "li", function(){
//     $(this).remove()
// })

//exercise 3
// $("body").append(`<div id="p1" class='box'></div>`)
// $("body").append(`<div  class="space"></div>`)
// $(".space").css("display", "inline-block")
// $(".space").css("width", "5px")
// $(".space").css("height", "70px")
// $("body").append(`<div id="p2" class='box'></div>`)

// $("body").on("mouseenter", ".space", function(){
//     if($("#p1").css("background-color") == "rgb(142, 68, 173)"){
//         $("#p1").css("background-color", "rgb(194, 44, 44)")
//         $("#p2").css("background-color", "#8e44ad")
//     }else{
//         $("#p2").css("background-color", "rgb(194, 44, 44)")
//         $("#p1").css("background-color", "#8e44ad")

//     }

// })

//exercise 4 & extension
const cart = [];
const renderCart = function () {
  for (let item of cart) {
    $("#cart").append(
      `<div class=cart-item>${item.name} x${item.number}</div>`
    );
  }
};
const search = function (item) {
  for (let i in cart) {
    if (cart[i].name == item) {
      return i;
    }
  }
  return -1;
};
$(".item").click(function () {
  if ($(this).data().instock) {
    const i = search($(this).text());
    if (cart.length == 0 || i == -1) {
      let item = { name: $(this).text(), number: 1 };
      cart.push(item);
    } else if (i>=0) {
        cart[i].number +=1
    }
    $("#cart").empty()
    renderCart();
  }
});
$("#cart").on("click", ".cart-item", function(){
    const item= $(this).text().split(" x")
    const i = search(item[0])
    if(cart[i].number == 1){
        cart.splice(i,1)
    }else{
        cart[i].number -= 1
    }
    $("#cart").empty()
    renderCart();

})

//exercise 5
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]
// for(let fruit of fruits){
//     $("#basket").append(`<div class=${fruit.color}>${fruit.name}</div>
//     `)
// }

//extensions color picker
// $("span").each(function(){
//     let btn = $(`<button class='picker'>${$(this).text()}</button>`)
//     btn.css("background-color", $(this).data().color)
//     $("#colors").append(btn)
//     $(this).remove()
// })
// $("#colors").on("click", ".picker", function(){
//     $(".box").css("background-color", $(this).css("background-color"))
// })

//recap exercise data flow and Extension
// const posts =  [
//     {name: "musa", text: "happy"},
//     {name: "ali", text:"happy birthday"},
//     {name: "samar", text: "i wish you succeed in life"}
// ]
// const render = function(){
//     for(let post of posts){
//         $("#posts").append(`<div class='post'><p><span style="font-weight:bold">${post.name}:</span> ${post.text}</p></div>`)

//     }
// }

// $("body").append("<div id='posts'></div>")
// render()

// $("button").on("click", function(){
//     let newPost={
//         name: $("#name").val(),
//         text: $("#text").val()
//     }
//     posts.push(newPost)
//     $("#posts").empty()
//     render()
// })
// $("#posts").on("click", ".post", function(){
//     const str = $(this).text().split(": ")
//     for(let i in posts){
//         if(str[0] == posts[i].name && str[1] == posts[i].text){
//             posts.splice(i, 1)
//             $("#posts").empty()
//             render()
//             break;
//         }
//     }
// })
