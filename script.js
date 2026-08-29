const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const portfolioTabs = [...document.querySelectorAll('[data-portfolio-tab]')];
const portfolioPanels = [...document.querySelectorAll('[data-portfolio-panel]')];

function activatePortfolioCategory(category, moveFocus = false) {
  portfolioTabs.forEach((tab) => {
    const active = tab.dataset.portfolioTab === category;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && moveFocus) tab.focus();
  });

  portfolioPanels.forEach((panel) => {
    const active = panel.dataset.portfolioPanel === category;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });
}

portfolioTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activatePortfolioCategory(tab.dataset.portfolioTab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % portfolioTabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + portfolioTabs.length) % portfolioTabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = portfolioTabs.length - 1;
    activatePortfolioCategory(portfolioTabs[nextIndex].dataset.portfolioTab, true);
  });
});
