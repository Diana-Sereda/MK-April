<h1 align="center">Компоненты сайта</h1>



<!-- Nav-->
<h2 align="center">Шапка сайта</h2>

<picture>
<img width="1439" alt="nav" src="https://user-images.githubusercontent.com/69309199/228479057-17669790-972b-4eb2-ab2f-52a3d44ccd25.png">
</picture>

<!-- Реализация-->
<details>
  
<summary>
Как сделать
</summary>
  
  
<h3 align="center">HTML</h2>
  
```
<!--Шапка сайта-->
<nav class="nav">
    <span class="nav-logo">Web Dev</span>
    <ul class="nav-links">
      <li>
        <a href="#basics">Основы</a>
      </li>
      <li>
        <a href="#news">Статьи</a>
      </li>
      <li>
        <a href="#skills">Навыки</a>
      </li>
      <li>
        <a href="#sites"> Примеры</a>
      </li>
    </ul>
  </nav>
  
```
<h3 align="center">CSS</h2>

Название файла: 
  
```
nav.css
```
  
Стили:
  
```
.nav {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
}

.nav-logo {
  font-family: var(--ff-secondary);
  font-size: 35px;
  font-weight: bold;
}

.nav-links {
  display: flex;
}

.nav-links a {
  color: inherit;
  font-size: 20px;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  padding: 0.5rem 1rem;
  transition: var(--transition);
  display: block;
}

.nav-links a:hover {
  transform: scale(1.2);
}
  
```
Подключение файла: 
  
```
@import "css-modules/nav.css";
```
<!-- конец -->
</details>

<!-- Nav ends-->

<hr>

<!-- Вертикальная навигация-->
<h2 align="center">Вертикальная навигация</h2>

<picture>
<img width="1437" alt="sidebar" src="https://user-images.githubusercontent.com/69309199/228486536-9aa5ab24-bd46-4abf-8a24-ce63a4074f37.png">
</picture>

<!-- Реализация-->

<details>
  
<summary>
Как сделать
</summary>
  
  
<h3 align="center">HTML</h2>
  
```
<!-- Вертикальная навигация -->
   <div id="sidebar">
    <button class="sidebar-toggle">
      <i class="fas fa-bars"></i>
    </button>
    <aside class="sidebar">
      <div class="sidebar-header">
        <span class="sidebar-logo">Web Dev</span>
        <button class="close-btn"><i class="fas fa-times"></i></button>
      </div>
      <ul class="sidebar-links">
        <li>
          <a href="#basics">Основы</a>
        </li>
        <li>
          <a href="#news">Статьи</a>
        </li>
        <li>
          <a href="#skills">Навыки</a>
        </li>
        <li>
          <a href="#sites"> Примеры</a>
        </li>
      </ul>
    </aside>
  </div>
```
<h3 align="center">CSS</h2>

Название файла: 
  
```
sidebar.css  
```
  
Стили:
  
```
.sidebar-toggle {
  position: fixed;
  top: 50px;
  right: 50px;
  font-size: 30px;
  background: transparent;
  border-color: transparent;
  color: var(--heading-clr);
  transition: var(--transition);
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
  z-index: 10;
}


@keyframes bounce {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  /* background: var(--sidebck-clr); */
  background: var(--heading-clr);
  color: var(--bck-clr);
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  transition: var(--transition);
  transform: translate(-100%);
  z-index: 10;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
}

.sidebar-logo {
  font-size: 35px;
  font-family: var(--ff-secondary);
}

.close-btn {
  font-size: 30px;
  background: transparent;
  border-color: transparent;
  color: var(--bck-clr);
  transition: var(--transition);
  cursor: pointer;
}

.close-btn:hover {
  transform: rotate(180deg);
}

.sidebar-links a {
  display: block;
  font-size: 1.5rem;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  color: inherit;
  transition: var(--transition);
}

.sidebar-links a:hover {
  padding-left: 2rem;
}


.show-sidebar {
  transform: translate(0);
}
  
```
Подключение файла: 
  
```
@import "css-modules/sidebar.css";
```

<h3 align="center">JavaScript</h2>

Название файла: 
  
```
sidebar.js
```
  
Код:
  
```
const sidebarJs = () => {
  const toggleBtn = document.querySelector(".sidebar-toggle");
  const closeBtn = document.querySelector(".close-btn");
  const sidebar = document.querySelector(".sidebar");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
};
export default sidebarJs;
  
```
Подключение файла: 
  
```
import sidebarJs from "./js-modules/sidebar.js";
sidebarJs();
```
<!-- конец -->
</details>

<hr>

<!-- Галерея гармошка -->
<h2 align="center">Галерея гармошка</h2>

![ezgif com-optimize](https://user-images.githubusercontent.com/69309199/228493979-962ff5dc-6bf3-4d1c-aad2-7038aede98cb.gif)

<picture>
<img width="1438" alt="gallery" src="https://user-images.githubusercontent.com/69309199/228491380-d5d4a13b-75d6-4e32-9399-a27b9627e663.png">
</picture>

<!-- Реализация-->

<details>
  
<summary>
Как сделать
</summary>
  
  
<h3 align="center">HTML</h2>
  
```
<!-- Галерея гармошка -->
  <section id="sites" class="gallery-1">
    <div class="title">
      <h3 class="section-title">Примеры современных сайтов</h3>
    </div>
    <div class="gallery-container">
      <div class="gallery-1__slide">
        <a href="https://zero.tech" target="_blank" rel="noopener noreferrer">zero.tech</a>
      </div>
      <div class="gallery-1__slide">
        <a href="https://town.kaonavi.jp" target="_blank" rel="noopener noreferrer">town.kaonavi.jp</a>
      </div>
      <div class="gallery-1__slide">
        <a href="https://www.annapurna.com" target="_blank" rel="noopener noreferrer">annapurna.com</a>
      </div>
      <div class="gallery-1__slide active">
        <a href="https://delivered.glovoapp.com" target="_blank" rel="noopener noreferrer">glovoapp.com</a>
      </div>
      <div class="gallery-1__slide">
        <a href="https://theyearofgreta.com" target="_blank" rel="noopener noreferrer">theyearofgreta.com</a>
      </div>
      <div class="gallery-1__slide">
        <a href="https://artsexperiments.withgoogle.com/ocean-of-books?latitude=-43.2000&longitude=-2.5000&zoom=4.40"
          target="_blank" rel="noopener noreferrer">ocean-of-books</a>
      </div>
    </div>
  </section>
  
```
<h3 align="center">CSS</h2>

Название файла: 
  
```
gallery-1.css
```
  
Стили:
  
```
.gallery-1 {
  overflow: hidden;
  margin: 0;
  height: 100vh;
}

.gallery-container {
  width: 100%;
  display: flex;
  padding: 0 20px;
}

.gallery-1__slide {
  height: 80vh;
  border-radius: 20px;
  margin: 10px;
  cursor: pointer;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: all 500ms ease-in-out;
}

.gallery-1__slide:nth-child(1) {
  background: url("../../img/site-1.png") center/cover no-repeat;
}

.gallery-1__slide:nth-child(2) {
  background: url("../../img/site-2.png") center/cover no-repeat;
}

.gallery-1__slide:nth-child(3) {
  background: url("../../img/site-3.png") center/cover no-repeat;
}

.gallery-1__slide:nth-child(4) {
  background: url("../../img/site-4.png") center/cover no-repeat;
}

.gallery-1__slide:nth-child(5) {
  background: url("../../img/site-5.png") center/cover no-repeat;
}

.gallery-1__slide:nth-child(6) {
  background: url("../../img/site-6.png") center/cover no-repeat;
}


.gallery-1__slide a {
  position: absolute;
  font-size: 30px;
  bottom: 40px;
  right: 20px;
  margin: 0;
  opacity: 0;
  color: #fff;
}

.gallery-1__slide.active {
  flex: 10;
}

.gallery-1__slide.active a {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
  
```
Подключение файла: 
  
```
@import "css-modules/gallery-1.css";
```
  
<h3 align="center">JavaScript</h2>

Название файла: 
  
```
gallery-1.js
```
  
Код:
  
```
const gallery1 = () => {
  const slides = document.querySelectorAll(".gallery-1__slide");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
};
export default gallery1;
  
```
Подключение файла: 
  
```
import gallery1 from "./js-modules/gallery-1.js";  
gallery1();
```
<!-- конец -->
</details>

<!-- ends-->
 <hr>


































