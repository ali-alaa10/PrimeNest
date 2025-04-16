// menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navBar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("d-none");
    navMenu.classList.toggle("d-flex");
    navBar.classList.toggle("navbar-brr");
    menuToggle.classList.toggle("rotate");
  });
});

if (document.body.id === "home") {
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

// API

const API_BASE_URL = "https://primenest.azurewebsites.net/api";

// Register & Login
if (document.body.id === "log-reg") {
  // Toggle
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  const forgotPasswordLink = document.getElementById("forgot-password-link");
  const forgotPasswordLinkSignup = document.getElementById(
    "forgot-password-link-signup"
  );
  const backToLogin = document.getElementById("back-to-login");
  const loginForm = document.querySelector(".sign-in");
  const forgotPasswordForm = document.getElementById("forgot-password-form");

  // Toggle between login and register forms
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  // Show forgot password form
  forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "block";
  });

  if (forgotPasswordLinkSignup) {
    forgotPasswordLinkSignup.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.remove("active");
      loginForm.style.display = "none";
      forgotPasswordForm.style.display = "block";
    });
  }

  // Back to login
  backToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPasswordForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // Handle login form submission
  document
    .getElementById("login-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      try {
        const response = await fetch(`${API_BASE_URL}/Authenticate/Login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.token);
          Swal.fire({
            text: "تم تسجيل الدخول بنجاح",
            icon: "success",
          });
          window.location.href = "index.html";
        } else {
          let errorMessage =
            data.message || "خطأ في تسجيل الدخول، تحقق من البيانات";
          if (data.errors) {
            errorMessage +=
              "\nتفاصيل الأخطاء:\n" + Object.values(data.errors).join("\n");
          }
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: errorMessage,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "حدث خطأ، حاول مرة أخرى",
        });
        console.error("Error:", error);
      }
    });

  // Handle register form submission
  document
    .getElementById("register-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("register-name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;

      try {
        const response = await fetch(`${API_BASE_URL}/Authenticate/Register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          Swal.fire({
            text: "تم إنشاء الحساب بنجاح! سجل الدخول الآن",
            icon: "success",
          });
          container.classList.remove("active");
        } else {
          let errorMessage =
            data.message || "خطأ في إنشاء الحساب، تحقق من البيانات";
          if (data.errors) {
            errorMessage +=
              "\nتفاصيل الأخطاء:\n" + Object.values(data.errors).join("\n");
          }
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: errorMessage,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "حدث خطأ، حاول مرة أخرى",
        });
        console.error("Error:", error);
      }
    });

  // Handle forgot password form submission
  document
    .getElementById("reset-password-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("reset-email").value;

      try {
        const response = await fetch(
          `${API_BASE_URL}/Authenticate/ForgetPassword`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          }
        );

        // Read the response body as text once
        const bodyText = await response.text();

        // Try to parse the body as JSON
        let data;
        try {
          data = JSON.parse(bodyText);
        } catch (jsonError) {
          // If JSON parsing fails, use the raw text
          if (response.ok) {
            Swal.fire({
              text: "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني",
              icon: "success",
            });
            forgotPasswordForm.style.display = "none";
            loginForm.style.display = "block";
          } else {
            // If status is not OK, treat the text as an error message
            Swal.fire({
              icon: "error",
              title: "خطأ",
              text: bodyText || "خطأ في إرسال الطلب، تحقق من البريد الإلكتروني",
            });
          }
          return; 
        }

        // If JSON parsing succeeded, handle the response as before
        if (response.ok) {
          Swal.fire({
            text:
              data.message ||
              "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني",
            icon: "success",
          });
          forgotPasswordForm.style.display = "none";
          loginForm.style.display = "block";
        } else {
          let errorMessage =
            data.message || "خطأ في إرسال الطلب، تحقق من البريد الإلكتروني";
          if (data.errors) {
            errorMessage +=
              "\nتفاصيل الأخطاء:\n" + Object.values(data.errors).join("\n");
          }
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: errorMessage,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "حدث خطأ، حاول مرة أخرى",
        });
        console.error("Error:", error);
      }
    });
}
