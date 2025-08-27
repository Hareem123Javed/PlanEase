    // ===== Mobile menu functionality =====
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      
      // Prevent body scrolling when menu is open
      if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
    
    // Close menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('active') && 
          !hamburger.contains(e.target) && 
          !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // ===== Sticky header shadow (subtle) =====
    const header = document.querySelector('header');
    const onScroll = () => {
      const shadow = window.scrollY > 6 ? '0 6px 18px rgba(0,0,0,.12)' : 'none';
      header.style.boxShadow = shadow;
    };
    onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

    // ===== Smooth scroll also closes menu on small screens =====
    document.querySelectorAll('nav a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 980) {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    });

    // ===== Dark / Light mode =====
    const modeToggle = document.getElementById('modeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    function applyTheme(t) {
      document.body.classList.toggle('dark', t === 'dark');
      if (t === 'dark') {
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
      } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
      }
      localStorage.setItem('theme', t);
    }

    const saved = localStorage.getItem('theme') || 'dark';
    applyTheme(saved);

    modeToggle.addEventListener('click', () => {
      const next = document.body.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(next);
    });

    // ===== On-scroll reveal animations =====
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){ 
          e.target.classList.add('in-view'); 
          io.unobserve(e.target); 
        }
      });
    }, {threshold:.12, rootMargin:'-40px 0px -20px 0px'});
    document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

    // ===== Pricing Toggle (Monthly/Yearly) =====
    const priceToggle = document.getElementById('priceToggle');
    const priceEls = document.querySelectorAll('[data-price]');
    const periodEls = document.querySelectorAll('[data-period]');
    function updatePrices(){
      const yearly = priceToggle.checked;
      priceEls.forEach(el => {
        const val = yearly ? el.dataset.year : el.dataset.month;
        el.textContent = ' $' + val + ' ';
      });
      periodEls.forEach(p => p.textContent = yearly ? '/yr' : '/mo');
    }
    updatePrices();
    priceToggle.addEventListener('change', updatePrices);

    // ===== Testimonial Slider =====
    const slides = document.getElementById('slides');
    const dotsWrap = document.getElementById('dots');
    const reviews = slides.children;
    const total = reviews.length;
    let index = 0, timer;

    // dots
    for(let i = 0; i < total; i++){
      const d = document.createElement('div');
      d.className = 'dot-ind' + (i === 0 ? ' active' : '');
      d.setAttribute('role','button'); 
      d.setAttribute('aria-label','Go to slide ' + (i+1));
      d.addEventListener('click', () => go(i, true));
      dotsWrap.appendChild(d);
    }
    const dots = dotsWrap.children;

    function go(i, user = false){
      index = (i + total) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
      [...dots].forEach((d, j) => d.classList.toggle('active', j === index));
      if(user){ restartAuto(); }
    }
    
    function next(){ go(index + 1); }
    function prev(){ go(index - 1); }
    
    document.getElementById('next').addEventListener('click', () => go(index + 1, true));
    document.getElementById('prev').addEventListener('click', () => go(index - 1, true));
    
    function restartAuto(){
      clearInterval(timer);
      timer = setInterval(next, 5000);
    }
    restartAuto();

    // ===== Accessibility: keyboard arrows for slider =====
    document.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowRight') go(index + 1, true);
      if(e.key === 'ArrowLeft') go(index - 1, true);
    });

    // ===== Fancy ripple on main CTAs =====
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function(e){
        const r = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        r.style.position = 'absolute'; 
        r.style.borderRadius = '50%'; 
        r.style.pointerEvents = 'none';
        r.style.width = r.style.height = size + 'px';
        r.style.left = (e.clientX - rect.left - size/2) + 'px';
        r.style.top = (e.clientY - rect.top - size/2) + 'px';
        r.style.background = 'rgba(255,255,255,.25)';
        r.style.transform = 'scale(0)'; 
        r.style.transition = 'transform .4s ease, opacity .8s ease';
        this.appendChild(r);
        requestAnimationFrame(() => r.style.transform = 'scale(1)');
        setTimeout(() => { 
          r.style.opacity = '0'; 
          setTimeout(() => r.remove(), 600); 
        }, 200);
      });
    });
