$(document).ready(function () {
  var nut = document.querySelectorAll(".category-active-item");
  for (var i = 0; i < nut.length; i++) {
    nut[i].addEventListener("click", function () {
      for (var i = 0; i < nut.length; i++) {
        nut[i].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
  $(".category-title").click(function () {
    $(".category_list-item").toggleClass("down");
  });
  $(".button-menu").click(function () {
    $(".menu").toggleClass("right");
  });
  $(".button-exit").click(function () {
    $(".menu").removeClass("right");
  });
});
function validateEmail() {
  var email = document.getElementById("email").value;
  var email_error = document.getElementById("email_error");
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (email == "" || email == null) {
    $("#email_error").text("Email không được để trống!");
  }
  if (!emailReg.test(email)) {
    $("#email_error").text("Email không đúng định dạng!");
  }
  return false;
}
