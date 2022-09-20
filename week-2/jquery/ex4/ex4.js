$(".item").on("click", function () {
  if ($(this).data().instock) {
    $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`);
  }
});
