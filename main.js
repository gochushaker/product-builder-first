// main.js

class MainNavigation extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const nav = document.createElement('nav');
    nav.innerHTML = `
      <ul>
        <li><a href="#house">새로운 보금자리</a></li>
        <li><a href="#cats">특별한 손님</a></li>
        <li><a href="#breathing">마음의 평화</a></li>
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
});
