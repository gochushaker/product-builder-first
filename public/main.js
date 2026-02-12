class MainNavigation extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const nav = document.createElement('nav');
    nav.innerHTML = `
      <div class="inner">
        <a class="brand" href="#home">엄마의 귀촌 생활</a>
        <ul>
          <li><a href="#story">소개</a></li>
          <li><a href="#house">보금자리</a></li>
          <li><a href="#gallery">갤러리</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">문의</a></li>
        </ul>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      :host {
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      nav {
        background: rgba(15, 28, 21, 0.82);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      }

      .inner {
        width: min(1100px, calc(100% - 2.4rem));
        margin: 0 auto;
        min-height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      .brand {
        color: #f2eee5;
        text-decoration: none;
        font-weight: 700;
        font-size: 0.95rem;
        letter-spacing: 0.06em;
      }

      ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 2px;
      }

      li a {
        text-decoration: none;
        color: #f2eee5;
        font-size: 0.92rem;
        padding: 8px 12px;
        border-radius: 999px;
      }

      li a:hover {
        background: rgba(255, 255, 255, 0.16);
      }

      @media (max-width: 820px) {
        .inner {
          width: calc(100% - 1.2rem);
          min-height: 56px;
        }

        .brand {
          font-size: 0.88rem;
          white-space: nowrap;
        }

        ul {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          max-width: 66%;
        }

        ul::-webkit-scrollbar {
          display: none;
        }

        li a {
          white-space: nowrap;
          font-size: 0.84rem;
          padding: 7px 10px;
        }
      }
    `;

    shadow.append(style, nav);
  }
}

class CustomFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const year = new Date().getFullYear();

    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="inner">
        <p>© ${year} 엄마의 귀촌 생활</p>
        <p>강원도 둔내 전원 일상 아카이브</p>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      footer {
        background: #173528;
        color: #f1ede4;
        margin-top: 20px;
      }

      .inner {
        width: min(1100px, calc(100% - 2.4rem));
        margin: 0 auto;
        min-height: 88px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 0.9rem;
      }

      p {
        margin: 0;
      }

      @media (max-width: 820px) {
        .inner {
          width: calc(100% - 1.2rem);
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 14px 0;
        }
      }
    `;

    shadow.append(style, footer);
  }
}

customElements.define('main-navigation', MainNavigation);
customElements.define('custom-footer', CustomFooter);

document.addEventListener('DOMContentLoaded', () => {
  const tasks = [
    '나뭇가지 분류하고 건조 상태 점검하기',
    '텃밭 고랑 정리하고 물 주기',
    '길고양이 급식소 청소하기',
    '창고 환기하고 도구 점검하기',
    '아침 단전호흡 30분 + 산책 20분',
    '마당 낙엽 모아 퇴비통 정리하기',
    '이웃 어르신께 수확 채소 나누기',
    '장작 더미 방수포 상태 확인하기'
  ];

  const taskButton = document.getElementById('task-button');
  const taskDisplay = document.getElementById('task-display');

  if (taskButton && taskDisplay) {
    taskButton.addEventListener('click', () => {
      taskDisplay.style.opacity = '0.35';
      const pick = tasks[Math.floor(Math.random() * tasks.length)];

      setTimeout(() => {
        taskDisplay.textContent = `오늘의 할일: ${pick}`;
        taskDisplay.style.opacity = '1';
      }, 140);
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
});
