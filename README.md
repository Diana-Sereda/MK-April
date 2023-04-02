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


<picture>
<img width="1438" alt="gallery" src="https://user-images.githubusercontent.com/69309199/228491380-d5d4a13b-75d6-4e32-9399-a27b9627e663.png">
</picture>

<!-- Реализация-->

<details>
  
<summary>
Как сделать
</summary>
  
 

  <picture>
<img width="1438" alt="gallery" src="https://user-images.githubusercontent.com/69309199/229352996-e2082227-093c-49dd-bd90-ff50b7fb92d8.gif">
</picture>

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
 
 <!-- Вкладки -->
<h2 align="center">Вкладки</h2>

<picture>
<img width="1375" alt="tabs" src="https://user-images.githubusercontent.com/69309199/228495427-b62cd4a1-5cd1-4e08-8a14-9d1e3bbf35c5.png">
</picture>

<!-- Реализация-->

<details>
  
<summary>
Как сделать
</summary>
  
  
<h3 align="center">HTML</h2>
  
```
<!-- Вкладки -->
   <section id="basics" class="section">
    <div class="title">
      <h2 class="section-title">Основы</h2>
      <p>То, что скрыто от нас под капотом браузера </p>
    </div>
    <article class="about">
      <div class="btn-container">
        <button class="tab-btn active" data-id="html">HTML</button>
        <button class="tab-btn" data-id="css">CSS</button>
        <button class="tab-btn" data-id="js">JavaScript</button>
      </div>
      <div class="about-content">
        <div class="content active" id="html">
          <h4>HTML</h4>
          <p>HTML (от английского HyperText Markup Language) — это язык гипертекстовой разметки текста. Он нужен,
            чтобы размещать на веб-странице элементы: текст, картинки, таблицы и видео.

            Когда вы заходите на сайт, браузер подгружает HTML-файл с информацией о структуре и контенте веб-страницы.
          </p>
          <p>HTML состоит из тегов — команд, которые указывают браузеру, как отображать помещённый в них текст. Это и
            есть элементы веб-страницы. У каждого тега есть имя, которое заключается в угловые скобки < и>.
          </p>
          <p>Язык гипертекстовой разметки HTML был разработан британским учёным Тимом Бернерсом-Ли приблизительно в
            1986—1991 годах в
            стенах ЦЕРНа в Женеве в Швейцарии. HTML создавался как язык для обмена научной и технической
            документацией, пригодный
            для использования людьми, не являющимися специалистами в области вёрстки.</p>
        </div>
        <div class="content" id="css">
          <h4>CSS</h4>
          <p>
            CSS (от английского Cascading Style Sheets) — это каскадные таблицы стилей. CSS - это язык, который
            отвечает за описание внешнего вида HTML-документа.</p>
          <p>Первое упоминание CSS появилось в 1994 году, когда Хокон Виум Ли предложил использовать язык CSS для
            стилистического оформления web-страниц.</p>
        </div>
        <div class="content" id="js">
          <h4>JavaScript</h4>
          <p>JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт (например:
            игры, отклик при
            нажатии кнопок или при вводе данных в формы, динамические стили, анимация).</p>
          <p>С развитием интернета и созданием первых браузеров перед разработчиками встала задача сделать сайты более
            интерактивными, следовательно нужно было придумать язык который помог бы это реализовать.
            Когда в 1995-м году Netscape Navigator, который в то время это был лидирующим браузером нанял разработчика
            Брэндана Эйха
            для создания первой версии JavaScript. Эта версия была разработана всего за 10 дней. Да ещё не совсем
            JavaScript, но на тот момент он уже имел функции имеет джаваскрипт сейчас.
          </p>
        </div>
      </div>
    </article>
  </section>
```
<h3 align="center">CSS</h2>

Название файла: 
  
```
tabs.css
```
  
Стили:
  
```
.about {
  width: 60%;
  margin: auto;
  position: relative;
  border: 2px solid var(--heading-clr);
  padding: 40px 50px 40px 150px;

}

.btn-container {
  position: absolute;
  left: 0;
  top: 40px;
  transform: translateX(-50%);
}

.tab-btn {
  width: 150px;
  color: var(--bck-clr);
  padding: 10px;
  border: none;
  text-transform: capitalize;
  font-size: inherit;
  display: block;
  background: var(--heading-clr);
  cursor: pointer;
  transition: var(--transition);
  letter-spacing: var(--spacing);
  border-radius: 50px;
  margin-bottom: 20px;
}

.content {
  display: none;
}

.content h4 {
  font-size: 30px;
  margin-bottom: 20px;
}

.content p {
  margin-bottom: 15px;
}

.tab-btn.active {
  transform: translateX(-30px);
}

.content.active {
  display: block;
}
  
```
Подключение файла: 
  
```
@import "css-modules/tabs.css";
```

<h3 align="center">JavaScript</h2>

Название файла: 
  
```
tabs.js
```
  
Код:
  
```
const tabs = () => {
  const about = document.querySelector(".about");
  const btns = document.querySelectorAll(".tab-btn");
  const articles = document.querySelectorAll(".content");
  about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
};
export default tabs;
  
```
Подключение файла: 
  
```
import tabs from "./js-modules/tabs.js";
tabs();
```
<!-- конец -->
</details>

<!-- ends-->
 <hr>
 
 <!--Аккордеон -->
<h2 align="center">Аккордеон</h2>

<picture>
<img width="1138" alt="accordion" src="https://user-images.githubusercontent.com/69309199/228497191-aa3a343a-d3b9-4335-8650-bf8d5ec9e1cf.png">

</picture>

<!-- Реализация-->

<details>
  
<summary>
Как сделать
</summary>
  
  
<h3 align="center">HTML</h2>
  
```
<!-- Аккордеон-->
<section class="accordion">
    <div class="title">
      <h2 class="section-title">Знали ли вы?</h2>
    </div>
    <article class="question">
      <div class="question-title">
        <p>Возраст профессии веб-разработчик?</p>
        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="fa-solid fa-circle-plus"></i>
          </span>
          <span class="minus-icon">
            <i class="fa-solid fa-circle-minus"></i>
          </span>
        </button>
      </div>

      <div class="question-text">
        <p>
          Приблизительно 30 лет назад не существовало ни профессии фронтенд-разработчика, ни самого веба.
        </p>
      </div>
    </article>
    <article class="question">

      <div class="question-title">
        <p>Когда появился самый первый сайт?</p>
        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="fa-solid fa-circle-plus"></i>
          </span>
          <span class="minus-icon">
            <i class="fa-solid fa-circle-minus"></i>
          </span>
        </button>
      </div>

      <div class="question-text">
        <p>
          Первый в мире сайт <a href="http://info.cern.ch" target="_blank" rel="noopener noreferrer">info.cern.ch</a>
          появился 6 августа 1991 года.
        </p>
      </div>
    </article>
    <article class="question">

      <div class="question-title">
        <p>Сколько сайтов существует в 2023 году?</p>
        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="fa-solid fa-circle-plus"></i>
          </span>
          <span class="minus-icon">
            <i class="fa-solid fa-circle-minus"></i>
          </span>
        </button>
      </div>
      <div class="question-text">
        <p>
          Сегодня в мире насчитывается 5,16 миллиарда пользователей интернета. Это значит, что 64,4% мирового
          населения имеют
          доступ в интернет. В 2018 году их количество превышало 1,3 миллиарда.
        </p>
      </div>
    </article>
    <article class="question">
      <div class="question-title">
        <p>Сколько времени мы проводим в интернете?</p>

        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="fa-solid fa-circle-plus"></i>
          </span>
          <span class="minus-icon">
            <i class="fa-solid fa-circle-minus"></i>
          </span>
        </button>
      </div>
      <div class="question-text">
        <p>Средний глобальный пользователь Интернета проводит семь часов в сети каждый день. Ежегодно число
          пользователей Интернета в мире увеличивается на 4% или +192 млн.</p>
      </div>
    </article>
  </section>  
```
<h3 align="center">CSS</h2>

Название файла: 
  
```
accordion.css
```
  
Стили:
  
```

.question {
  max-width: 800px;
  margin: auto;
  /* background: var(--clr-white); */
  border: 3px solid var(--heading-clr);
  border-radius: 50px;
  padding: 20px;
  padding-left: 50px;
  margin-bottom: 25px;
}

.question-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-bottom: 1rem; */
}

.question-title p {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 0;
  letter-spacing: var(--spacing);
}

.question-btn {
  font-size: 1.5rem;
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  color: var(--heading-clr);
  transition: var(--transition);
}

.question-btn:hover {
  transform: rotate(90deg);
}

.question-text {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid var(--heading-clr);
}

.question-text p {
  margin-bottom: 0;
}

.accordion .fa-solid {
  font-size: 30px;
  transition: var(--transition);
}

.accordion .fa-solid:hover {
  transform: scale(1.3);
}

/* hide text */
.question-text {
  display: none;
}

.show-text .question-text {
  display: block;
}

.minus-icon {
  display: none;
}

.show-text .minus-icon {
  display: inline;
}

.show-text .plus-icon {
  display: none;
}
  
```
Подключение файла: 
  
```
@import "css-modules/accordion.css";
```

<h3 align="center">JavaScript</h2>

Название файла: 
  
```
accordion.js
```
  
Код:
  
```
const accordion = () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });

      question.classList.toggle("show-text");
    });
  });
};

export default accordion;
  
```
Подключение файла: 
  
```
import accordion from "./js-modules/accordion.js";
accordion();
```
<!-- конец -->
</details>

<!-- ends-->
 <hr>

<!--Карусель -->
<h2 align="center">Карусель </h2>

<picture>
<img width="1414" alt="slider" src="https://user-images.githubusercontent.com/69309199/228497551-ed5c942f-0be8-436c-b555-57cb78e2bdaa.png">
</picture>

<!-- Реализация-->

<details>
  
<summary>
Как сделать
</summary>
  
  
<h3 align="center">HTML</h2>
  
```
<!--Карусель -->
 <section id="skills" class="skills">
    <div class="title">
      <h3>9 важных Soft Skills для разработчика</h3>
    </div>

    <div class="carousel">
      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Teamplayer</div>
          <p class="descr">Teamplayer — это про то, что на тебя могут рассчитывать коллеги, а ты тоже можешь
            рассчитывать
            на них.</p>
          <div class="num">01</div>
          <img src="img/q-1.jpeg" />
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Коммуникация</div>
          <p class="descr">Умение «экологично» взаимодействовать в команде — это очень важный показатель.
            Сюда же входит умение решать конфликты, а не создавать их, ведение переговоров и деловая переписка.
          </p>
          <div class="num">02</div>
          <img src="img/q-2.jpeg" />
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Self-менеджмент</div>
          <p class="descr">Работодателям нужны самостоятельные разработчики, которые могут справиться с поставленной
            задачей — распланировать сроки
            и последовательность задачи, разбить большую задачу на более мелкие.</p>
          <div class="num">03</div>
          <img src="img/q-3.jpeg" />
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Обучение и развитие</div>
          <p class="descr">Быстро обучаться и постоянно учиться. В современной веб-разработке не получиться выучить
            технологию один раз и больше не
            учиться.</p>
          <div class="num">04</div>
          <img src="img/q-4.jpeg" />
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Ответственность</div>
          <p class="descr">Ответственность за качество своего кода. Не менее важна и ответственность за сроки, которые
            вы обозначили для выполнения задачи.</p>
          <div class="num">05</div>
          <img src="img/q-5.jpeg" />
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Продуктовое мышление</div>
          <p class="descr">Продуктовое мышление — это когда у вас есть навык думать про бизнес, про продукт, про
            клиентов, а не про то какой
            новомодный фреймворк использовать.</p>
          <div class="num">06</div>
          <img src="img/q-6.jpeg" />
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Проактивность</div>
          <p class="descr">Проактивность это не только готовность браться за работу или брать на себя новую
            ответственность, но и активная позиция
            в решении ваших текущих задач.</p>
          <div class="num">07</div>
          <img src="img/q-7.jpeg" />
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Внимание к деталям</div>
          <p class="descr">В работе веб-разработчика очень важно внимание к деталям, потому что этих деталей очень
            много.</p>
          <div class="num">08</div>
          <img src="img/q-9.jpeg" />
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Тайм-менеджмент</div>
          <p class="descr">Если вы хотите успевать учиться, развиваться, эффективно работать, отдыхать, заниматься
            хобби, встречаться с друзьями,
            то без тайм-менеджмента вам не обойтись.</p>
          <div class="num">09</div>
          <img src="img/q-8.jpeg" />
        </div>
      </div>
    </div>
  </section>
```
<h3 align="center">CSS</h2>

Название файла: 
  
```
carousel.css
```
  
Стили:
  
```
.skills-title {
  text-align: center;
  margin-bottom: 100px;
}

.carousel {
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
}

.carousel-item {
  --items: 10;
  --width: clamp(150px, 30vw, 400px);
  --height: clamp(200px, 40vw, 500px);
  --x: calc(var(--active) * 800%);
  --y: calc(var(--active) * 200%);
  --rot: calc(var(--active) * 120deg);
  --opacity: calc(var(--zIndex) / var(--items) * 3.4 - 2);
  overflow: hidden;
  position: absolute;
  z-index: var(--zIndex);
  width: var(--width);
  height: var(--height);
  margin: calc(var(--height) * -0.5) 0 0 calc(var(--width) * -0.5);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  cursor: pointer;
  user-select: none;
  transform-origin: 0% 100%;
  pointer-events: all;
  transform: translate(var(--x), var(--y)) rotate(var(--rot));
  transition: transform .8s cubic-bezier(0, 0.02, 0, 1);
}

.carousel-box {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: var(--ff-primary);
}

.carousel-box:before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8646052170868348) 85%);
}

.carousel-item .title {
  position: absolute;
  z-index: 1;
  color: #fff;
  top: 63%;
  left: 20px;
  font-size: 24px;
}

.carousel-item .descr {
  position: absolute;
  z-index: 1;
  color: #fff;
  top: 75%;
  left: 20px;
  font-size: 16px;
  line-height: 1.3;
}

.carousel-item .num {
  font-family: var(--ff-secondary);
  position: absolute;
  z-index: 1;
  /* color: #fff; */
  color: var(--heading-clr);
  top: 10px;
  left: 20px;
  transition: opacity .8s cubic-bezier(0, 0.02, 0, 1);
  font-size: 80px;

}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}  
```
Подключение файла: 
  
```
@import "css-modules/carousel.css";
```

<h3 align="center">JavaScript</h2>

Название файла: 
  
```
carousel.js
```
  
Код:
  
```
const carousel = () => {
  /*--------------------
Vars
--------------------*/
  let progress = 50;
  let startX = 0;
  let active = 0;
  let isDown = false;

  /*--------------------
Contants
--------------------*/
  const speedWheel = 0.02;
  const speedDrag = -0.1;

  /*--------------------
Get Z
--------------------*/
  const getZindex = (array, index) =>
    array.map((_, i) =>
      index === i ? array.length : array.length - Math.abs(index - i)
    );

  /*--------------------
Items
--------------------*/
  const $items = document.querySelectorAll(".carousel-item");
  // const $cursors = document.querySelectorAll(".cursor");

  const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index];
    item.style.setProperty("--zIndex", zIndex);
    item.style.setProperty("--active", (index - active) / $items.length);
  };

  /*--------------------
Animate
--------------------*/
  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor((progress / 100) * ($items.length - 1));

    $items.forEach((item, index) => displayItems(item, index, active));
  };
  animate();

  /*--------------------
Click on Items
--------------------*/
  $items.forEach((item, i) => {
    item.addEventListener("click", () => {
      progress = (i / $items.length) * 100 + 10;
      animate();
    });
  });

  /*--------------------
Handlers
--------------------*/
  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    progress = progress + wheelProgress;
    animate();
  };

  const handleMouseMove = (e) => {
    // if (e.type === "mousemove") {
    //   $cursors.forEach(($cursor) => {
    //     $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    //   });
    // }
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    progress = progress + mouseProgress;
    startX = x;
    animate();
  };

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  /*--------------------
Listeners
--------------------*/
  document.addEventListener("mousewheel", handleWheel);
  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
  document.addEventListener("touchstart", handleMouseDown);
  document.addEventListener("touchmove", handleMouseMove);
  document.addEventListener("touchend", handleMouseUp);
};
export default carousel;

```
Подключение файла: 
  
```
import carousel from "./js-modules/carousel.js";
  carousel();
```
<!-- конец -->
</details>

<!-- ends-->
 <hr>

<!--Grid сетка -->
<h2 align="center">Grid сетка</h2>

<picture>
<img width="1383" alt="news" src="https://user-images.githubusercontent.com/69309199/228499175-7c923236-491a-46c7-abf9-6f2721e82293.png">
</picture>

<!-- Реализация-->

<details>
  
<summary>
Как сделать
</summary>
  
  
<h3 align="center">HTML</h2>
  
```
<!-- Grid сетка -->
<section id="news" class="news">
    <div class="title">
      <h3>Интересные статьи по веб-разарботке</h3>
    </div>
    <div class="news-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class=" flip-card-front ">
            <h4>Как освоить фронтенд-разработку в 2022 году: дорожная карта</h4>
          </div>
          <div class="flip-card-back">
            <p>Хотите узнать, как стать фронтенд-разработчиком в 2022 году? Составили для вас схему развития и приложили
              материалы для
              изучения.</p>
            <a href="https://tproger.ru/articles/frontend-roadmap-2021/" target="_blank">Читать</a>
          </div>
        </div>

      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class=" flip-card-front ">
            <h4>10 шпаргалок по HTML и CSS</h4>
          </div>
          <div class="flip-card-back">
            <a href="https://tproger.ru/articles/10-shpargalok-po-html-i-css/" target="_blank">Читать</a>
          </div>
        </div>

      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class=" flip-card-front ">
            <h4>15 расширений для VSCode, которые упростят разработку</h4>
          </div>
          <div class="flip-card-back">
            <p>Чтобы облегчить разработку можно использовать специальные плагины. В статье собрали 15 расширений для
              VSCode,
              чтобы было
              удобнее писать код.</p>
            <a href="https://tproger.ru/articles/15-raswirenij-dlya-vscode-kotorye-uprostyat-razrabotku/"
              target="_blank">Читать</a>
          </div>
        </div>

      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class=" flip-card-front ">
            <h4>Эволюция интерфейсов: как изменилась веб-разработка за 20 лет</h4>
          </div>
          <div class="flip-card-back">
            <p>Ретроградствуем и вспоминаем, как менялись инструменты веб-разработчиков и какими были интерфейсы сайтов
              за
              последние 20
              лет.</p>
            <a href="https://tproger.ru/articles/jevoljucija-interfejsov-kak-izmenilas-veb-razrabotka-za-20-let/"
              target="_blank">Читать</a>
          </div>
        </div>

      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class=" flip-card-front ">
            <h4>Если вы умеете «покрасить кнопочку», но хотите узнать больше о вёрстке веб-приложений</h4>
            </h4>
          </div>
          <div class="flip-card-back">
            <p>Рассказываем о свойстве float, разнице между флексами и гридами, об адаптивной и респонсивной вёрстке и
              методологиях
              вёрстки.</p>
            <a href="https://tproger.ru/articles/esli-vy-umeete-pokrasit-knopochku-no-hotite-uznat-bolshe-o-vjorstke-veb-prilozhenij/"
              target="_blank">Читать</a>
          </div>
        </div>

      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class=" flip-card-front ">
            <h4>Полезные уроки по программированию на HTML и CSS для детей</h4>
          </div>
          <div class="flip-card-back">
            <a href="https://tproger.ru/articles/poleznye-uroki-po-programmirovaniju-na-html-i-css-dlja-detej/"
              target="_blank">Читать</a>
          </div>
        </div>

      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class=" flip-card-front ">
            <h4>Основы фронтенд-разработки: фреймворки, DOM-дерево, взаимодействие с бэкендом</h4>
          </div>
          <div class="flip-card-back">
            <p>Современная сфера веб-разработки пестрит всевозможными технологиями и инструментами, среди которых
              новичок
              может легко
              растеряться.</p>
            <a href="https://habr.com/ru/company/ruvds/blog/722464/" target="_blank">Читать</a>
          </div>
        </div>

      </div>
    </div>
  </section>
  
```
<h3 align="center">CSS</h2>

Название файла: 
  
```
news.css
```
  
Стили:
  
```
.news-container {
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
}

.flip-card {
  position: relative;
  transition: transform 0.5s linear;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  background-color: var(--heading-clr);
  cursor: pointer;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  padding: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  -webkit-backface-visibility: hidden;
  /* Safari */
  backface-visibility: hidden;
}

.flip-card-back {
  transform: translate(-50%, -50%) rotateY(180deg);
}

.flip-card:nth-child(1) {
  grid-row-start: 1;
  grid-row-end: 3;
}

.flip-card:nth-child(3) {
  grid-column-start: 3;
  grid-column-end: 5;
}

.flip-card:nth-child(4) {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 4;
}

.flip-card:nth-child(5) {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
}

.flip-card:nth-child(7) {
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 4;
}

.flip-card-inner h4 {
  font-size: 28px;
  line-height: 1.2;
  color: var(--bck-clr);
}

.flip-card-inner p {
  font-size: 16px;
  color: var(--bck-clr);
  margin-bottom: 30px;
}

.flip-card-inner a {
  background: var(--bck-clr);
  color: inherit;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 18px;
}
  
```
Подключение файла: 
  
```
@import "css-modules/news.css";
```
<!-- конец -->
</details>

<!-- ends-->
 <hr>

<!--Светлая/темная тема  -->
<h2 align="center"> Светлая/темная тема </h2>

<picture align="center">
<img width="68" alt="theme-dark" src="https://user-images.githubusercontent.com/69309199/228500557-03e25111-9655-418e-a6ab-e758618218e9.png">
</picture>
<picture align="center">
<img width="69" alt="theme-light" src="https://user-images.githubusercontent.com/69309199/228500593-d92f5c1f-fa7b-4951-8878-1955164f936b.png">
</picture>

<!-- Реализация-->

<details>
  
<summary>
Как сделать
</summary>
  
  
<h3 align="center">HTML</h2>
  
```
<!--Светлая/темная тема  -->
 <button class="theme-btn">
    <i class="fa-solid fa-moon fa-flip-horizontal moon "></i>
    <i class="fa-solid fa-sun sun d-none"></i>
  </button>
```
<h3 align="center">CSS</h2>

Название файла: 
  
```
theme-btn.css
```
  
Стили:
  
```
.theme-btn {
  position: relative;
  bottom: 25px;
  right: 25px;
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  border: none;
  cursor: pointer;
  background-color: var(--heading-clr);
  color: var(--bck-clr);
  z-index: 10;
  transition: var(--transition);
}

.theme-btn i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: var(--transition);
}

.d-none {
  opacity: 0;
}
  
```
Подключение файла: 
  
```
@import "css-modules/theme-btn.css";
```

<h3 align="center">JavaScript</h2>

Название файла: 
  
```
theme-btn.js
```
  
Код:
  
```
const theme = () => {
  const toggleBtn = document.querySelector(".theme-btn");
  const moon = document.querySelector(".moon");
  const sun = document.querySelector(".sun");
  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
    moon.classList.toggle("d-none");
    sun.classList.toggle("d-none");
  });
};
export default theme;

```
Подключение файла: 
  
```
import theme from "./js-modules/theme-btn.js";
theme();
```
<!-- конец -->
</details>

<!-- ends-->
 <hr>
