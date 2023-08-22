// dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {
  // 클래스 nav 의 li 를 찾아라
  // 저장한다. 재활용하기 위해서
  // var boxs = $(".nav ul li"); //<- 사용하지 말라
  const navLis = $(".nav ul li");
  // let boxs = $(".nav ul li"); // <- 사용하지 말라(const가 에러가 나면 사용)
});
// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function () {
  // 클래스 nav 의 li 를 찾아라
  // document.querySelector(".nav ul li");// <- 잘못된놈
  document.querySelectorAll(".nav ul li");
  // var boxs = document.querySelectorAll(".nav ul li"); // <- 사용하지 말라
  const navLis = document.querySelectorAll(".nav ul li");
  // let boxs = document.querySelectorAll(".nav ul li"); // <- 사용하지 말라(const가 에러가 나면 사용)
};
