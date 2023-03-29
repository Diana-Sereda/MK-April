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
<!-- Реализация конец -->
</details>

<!-- Nav ends-->
