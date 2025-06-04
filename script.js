// 導覽列高亮當前頁面
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const current = location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // 頁面淡入動畫
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 0.6s";
    document.body.style.opacity = 1;
  }, 50);
});

// script.js
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('backToTop');
  if (btn) {
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.display = 'none';
    btn.style.padding = '10px 15px';
    btn.style.fontSize = '20px';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.backgroundColor = '#4a90e2';
    btn.style.color = '#fff';
    btn.style.cursor = 'pointer';
    btn.style.zIndex = '1000';

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});