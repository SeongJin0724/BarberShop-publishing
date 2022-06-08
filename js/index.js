// $(function(){
//     $('.').on('click',function(evt){
//         evt.preventDefault();
//         $('ul>li').removeClass('underbar');
//         $('.innerbox').hide();
//         $(this).next('.innerbox').fadeIn().parent('li').addClass('underbar');
//         })
//         $('ul>li').first().trigger('click');
//     })

const tabThumbnail = document.querySelectorAll(".team-thumbnail-container div");
const tabContents = document.querySelectorAll(".team-box-wrap .team-box");

// for (let i = 0; i < tabThumbnail.length; i++) {
//   tabOpen(i);
// }

tabThumbnail.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    showContent(idx);
    removeClassUnderBar(idx);
    addClassUnderBar(idx);
  });
});
function showContent(num) {
  tabContents.forEach(function (item) {
    item.style.display = "none";
  });
  tabContents[num].style.display = "block";
}

function removeClassUnderBar() {
  tabThumbnail.forEach((item) => {
    item.classList.remove("underbar");
  });
}
function addClassUnderBar(num) {
  tabThumbnail.forEach(() => {
    tabThumbnail[num].classList.add("underbar");
  });
}
// const tabMenu = (e) => {
//   e.stopPropagation();
//   let menuIndex = [...tabThumbnail].indexOf(e.target);

//   tabThumbnail.forEach((menu) => {
//     [...tabThumbnail].indexOf(menu) === menuIndex
//       ? menu.classList.add("underbar")
//       : menu.classList.remove("underbar");
//   });
// };
// tabThumbnail.forEach((menu) => {
//   menu.addEventListener("click", tabMenu);
// });
