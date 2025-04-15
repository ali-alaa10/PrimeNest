// menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navBar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("d-none");
    navMenu.classList.toggle("d-flex");
    navBar.classList.toggle("navbar-brr");
  });
});

if(document.body.id === "home"){
  // search form
document.addEventListener("DOMContentLoaded", function () {
  const rentBtn = document.getElementById("rentBtn");
  const saleBtn = document.getElementById("saleBtn");
  const searchForm = document.getElementById("search-form");

  function updateForm(type) {
    if (type === "rent") {
      searchForm.innerHTML = `
        <div class="row g-3">
        <div class="col-md-6">
            <select name="city" class="form-select">
              <option selected>ابحث عن محافظة/مدينة</option>
              <option>الدقهلية</option>
              <option>القاهرة</option>
              <option>المنيا</option>
              <option>القليوبية</option>
              <option>الإسكندرية</option>
              <option>البحيرة</option>
              <option>الإسماعيلية</option>
              <option>الجيزة</option>
              
          </select>
        </div>
        <div class="col-md-6">
            <select name="type" class="form-select">
                <option selected>نوع العقار</option>
                <option>شقة</option>
                <option>فيلا</option>
                <option>أرض</option>
            </select>
        </div>
        <div class="col-md-4">
            <input name="price" type="text" class="form-control" placeholder="السعر">
        </div>
        <div class="col-md-4">
            <select name="type" class="form-select">
                <option selected>النوع الفرعي</option>
                <option>مفروشة</option>
                <option>غير مفروشة</option>
            </select>
        </div>
        <div class="col-md-4">
            <input name="search" type="text" class="form-control" placeholder="ابحث بكلمة محددة (شقة للإيجار)">
        </div>
        <div class="col-md-6">
            <input name="date" type="date" class="form-control" placeholder="تاريخ البناء">
        </div>
        <div class="col-md-6">
            <input name="area" type="number" class="form-control" placeholder="المساحة">
        </div>
        <div class="col-12">
            <button type="submit" class="btn search-btn">بحث</button>
        </div>
    </div>
          `;
    } else {
      searchForm.innerHTML = `
  <div class="row g-3">
     <div class="col-md-6">
      <select name="city" class="form-select">
       <option selected>ابحث عن محافظة/مدينة</option>
       <option>الدقهلية</option>
       <option>القاهرة</option>
       <option>المنيا</option>
       <option>القليوبية</option>
       <option>الإسكندرية</option>
       <option>البحيرة</option>
       <option>الإسماعيلية</option>
       <option>الجيزة</option>
        </select>
      </div>
      <div class="col-md-6">
          <select name="type" class="form-select">
              <option selected>نوع العقار</option>
              <option>شقة</option>
              <option>فيلا</option>
              <option>أرض</option>
          </select>
      </div>
      <div class="col-md-4">
          <input name="price" type="text" class="form-control" placeholder="السعر">
      </div>
      <div class="col-md-4">
          <select name="type" class="form-select">
              <option selected>النوع الفرعي</option>
              <option>مفروشة</option>
              <option>غير مفروشة</option>
          </select>
      </div>
      <div class="col-md-4">
          <input name="num" type="number" class="form-control" placeholder="عدد الغرف">
      </div>
      <div class="col-md-4">
          <input name="date" type="date" class="form-control" placeholder="تاريخ البناء">
      </div>
      <div class="col-md-4">
          <input name="area" type="number" class="form-control" placeholder="المساحة">
      </div>
      <div class="col-md-4">
           <select name="type" class="form-select">
              <option selected>حالة العقار</option>
              <option>جديد</option>
              <option>مستعمل</option>
          </select>
      </div>
      <div class="col-12">
          <button type="submit" class="btn search-btn">بحث</button>
      </div>
  </div>`;
    }
  }

  rentBtn.addEventListener("click", function () {
    rentBtn.classList.add("active");
    rentBtn.classList.remove("inactive");
    saleBtn.classList.add("inactive");
    saleBtn.classList.remove("active");
    updateForm("rent");
  });

  saleBtn.addEventListener("click", function () {
    saleBtn.classList.add("active");
    saleBtn.classList.remove("inactive");
    rentBtn.classList.add("inactive");
    rentBtn.classList.remove("active");
    updateForm("sale");
  });

  updateForm("rent");
});

// Featured Properties
const buttons = document.querySelectorAll(".btn button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Find Nest
var findNest = new Swiper("#findNest", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Company
var company = new Swiper("#company", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 6 },
  },
});

// Rate
var rate = new Swiper("#rate", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
}

if (document.body.id === "log-reg") {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });
  
  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
}
