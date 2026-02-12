// main.js

class MainNavigation extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const nav = document.createElement('nav');
    nav.innerHTML = `
      <ul>
        <li><a href="#house">새로운 보금자리</a></li>
        <li><a href="#gallery">갤러리</a></li>
        <li><a href="#cats">특별한 손님</a></li>
        <li><a href="#breathing">마음의 평화</a></li>
        <li><a href="#faq">자주 묻는 질문</a></li>
        <li><a href="#contact">나뭇가지 문의</a></li>
      </ul>
    `;

    const style = document.createElement('style');
    style.textContent = `
      :host {
          position: sticky;
          top: 0;
          z-index: 1000;
      }
      nav {
        background-color: var(--accent-color, #556B2F);
        padding: 0.5rem 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background-color 0.3s;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
      }
      li a {
        color: var(--secondary-color, #F5DEB3);
        text-decoration: none;
        padding: 0.8rem 1.5rem;
        font-family: var(--font-headers, 'Garamond', serif);
        font-size: 1.2em;
        transition: background-color 0.3s, color 0.3s;
      }
      li a:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(nav);
  }
}

class CustomFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const footer = document.createElement('footer');
        footer.innerHTML = `<p>&copy; 2024 엄마의 귀촌 생활. All rights reserved.</p>`;

        const style = document.createElement('style');
        style.textContent = `
            footer {
                text-align: center;
                padding: 1.5rem;
                background-color: var(--primary-color, #8B4513);
                color: var(--secondary-color, #F5DEB3);
                margin-top: 2rem;
                transition: background-color 0.3s, color 0.3s;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(footer);
    }
}

customElements.define('main-navigation', MainNavigation);
customElements.define('custom-footer', CustomFooter);

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
    let theme = 'light';
    if (document.documentElement.getAttribute('data-theme') !== 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      theme = 'dark';
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  });

  // Random Task Logic
  const tasks = [
    "나뭇가지 자르기",
    "텃밭 잡초 뽑기",
    "길고양이 사료 챙겨주기",
    "마당 낙엽 쓸기",
    "시원한 공기 마시며 단전호흡 30분",
    "마당에 물 주기",
    "햇볕에 고추 말리기",
    "이웃과 시원한 차 한 잔 하기",
    "텃밭에서 상추 따기",
    "새소리 들으며 명상하기",
    "창문 닦으며 바깥 풍경 구경하기",
    "장작 정리하기"
  ];

  const taskButton = document.getElementById('task-button');
  const taskDisplay = document.getElementById('task-display');

  if (taskButton && taskDisplay) {
    taskButton.addEventListener('click', () => {
      // Add a small animation effect
      taskDisplay.style.opacity = 0;
      taskButton.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        taskDisplay.textContent = `오늘의 할일: ${tasks[randomIndex]} 🌿`;
        taskDisplay.style.opacity = 1;
        taskDisplay.style.transition = 'opacity 0.3s ease';
        taskButton.style.transform = 'scale(1)';
      }, 150);
    });

    // Button hover effects
    taskButton.addEventListener('mouseover', () => {
      taskButton.style.backgroundColor = 'var(--primary-color)';
    });
    taskButton.addEventListener('mouseout', () => {
      taskButton.style.backgroundColor = 'var(--accent-color)';
    });
  }
});
