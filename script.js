
// PARALAX SCROLL HERO
window.addEventListener("scroll", function () {
  const heroSection = document.querySelector(".hero-wraper");
  const swiperSection = document.querySelector(".swiper");

  let scrollY = window.scrollY;
  let heroTop = heroSection.offsetTop;
  let heroHeight = heroSection.offsetHeight;

  // seberapa jauh kita scroll di hero
  let offset = scrollY - heroTop;

  if (scrollY >= heroTop && scrollY <= heroTop + heroHeight) {
    // selama di hero → swiper ikut "ditarik naik"
    swiperSection.style.transform = `translateY(${offset * -0.3}px)`;
  } else if (scrollY > heroTop + heroHeight) {
    // sudah melewati hero → kunci di posisi akhir, jangan balik ke 0
    swiperSection.style.transform = `translateY(${heroHeight * -0.3}px)`;
  } else {
    // sebelum masuk hero → normal
    swiperSection.style.transform = "translateY(0)";
  }
});

// TRANSISI PINDAH HALAMAN
document.addEventListener("DOMContentLoaded", () => {
  // Tambahkan efek fade-in ketika halaman dimuat
  document.body.classList.add("fade-in");

  // Tangani tombol Explore
  const exploreBtn = document.getElementById("explore-btn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      const href = exploreBtn.querySelector("a").getAttribute("href");

      setTimeout(() => {
        window.location.href = href;
      }, 100); // sesuai durasi CSS transition
    });
  }
});


// ANIMATION SCROLL WHY SECTION
 import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm"

    document.querySelectorAll(".card > div").forEach((item) => {
        scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
            target: item,
            offset: ["start end", "end end", "start start", "end start"],
        })
    })

   

    document.querySelectorAll(".about-us  .the-card").forEach((card) => {
        scroll(animate(card, { opacity: [0, 1, 1, 0] }), {
            target: card,
            offset: ["start end", "end end", "start start", "end start"],
        })
    })




// NAVBAR BERUBAH WARNA
const track = document.querySelector('.swiper-track');
const slides = document.querySelectorAll('.swiper-slide');
const prevBtn = document.querySelector('.swiper-button.prev');
const nextBtn = document.querySelector('.swiper-button.next');

let currentIndex = Math.floor(slides.length / 2); // mulai dari tengah


function updateSlidePosition() {
  const slideWidth = slides[0].offsetWidth;
  const offset = -(currentIndex - 1) * slideWidth;
  track.style.transform = `translateX(${offset}px)`;

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });
}

if (track && slides.length > 0 && prevBtn && nextBtn) {
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});


// inisialisasi awal
updateSlidePosition();

}


function updateNavbar() {
  const nav = document.querySelector('nav');
  const logo = document.querySelector('.logo');

  const viewportCenter = window.innerHeight / 2;

  const sections = document.querySelectorAll('section, footer');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {

      if (section.classList.contains('dark-section')){
        nav.querySelectorAll('a').forEach(a => a.style.color = '#FFFFFF');
        logo.src = './asset/Screenshot_2025-09-24_165539-removebg-preview.png';
        logo.style.height = "70px";
       

      } else {
         nav.querySelectorAll('a').forEach(a => a.style.color = '#5C442B');
        logo.src = './asset/Screenshot_2025-08-06_130323-removebg-preview.png';
         logo.style.height = "47px";
      
      }
    }
  });
}

window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', updateNavbar);


// ANIMASI TEKS HERO SECTION
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  const observasi = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        box.classList.add("show");
        box.classList.remove("reverse-left", "reverse-right1");
      } else {
        box.classList.remove("show");
        if (box.classList.contains("left1")) {
          box.classList.add("reverse-left1");
        } else {
          box.classList.add("reverse-right1");
        }
      }
    });
  }, { threshold: 0.5 });
  observasi.observe(box);
});


// window.addEventListener("scroll", function () {
//   const heroSection = document.querySelector(".hero-wraper");
//   const swiperSection = document.querySelector(".swiper");

//   let scrollY = window.scrollY;
//   let heroTop = heroSection.offsetTop;
//   let heroHeight = heroSection.offsetHeight;

//   // seberapa jauh kita scroll di hero
//   let offset = scrollY - heroTop;

//   if (scrollY >= heroTop && scrollY <= heroTop + heroHeight) {
//     // selama di hero → swiper ikut "ditarik naik"
//     swiperSection.style.transform = `translateY(${offset * -0.3}px)`;
//   } else if (scrollY > heroTop + heroHeight) {
//     // sudah melewati hero → kunci di posisi akhir, jangan balik ke 0
//     swiperSection.style.transform = `translateY(${heroHeight * -0.3}px)`;
//   } else {
//     // sebelum masuk hero → normal
//     swiperSection.style.transform = "translateY(0)";
//   }
// });
