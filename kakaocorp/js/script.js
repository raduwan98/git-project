// external js: masonry.pkgd.js
function init() {

  $('.items_body').masonry({
    itemSelector: '.item',
    columnWidth: 297,
    gutter: 36
  });

}

window.onload = init;

// -------------검색기능--------------------------------------------------------------------

const searchBtn = document.querySelector("#search-btn");
const searchForm = document.querySelector("#search-form");

searchBtn.addEventListener("click", function() {
  searchForm.classList.toggle("hidden");
});