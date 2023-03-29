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
  
  
<h3 align="center" color="#ff863b">HTML</h2>
  
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

































