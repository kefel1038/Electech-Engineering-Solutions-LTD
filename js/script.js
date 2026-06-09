/* ============================================
   ELECTECH ENGINEERING SOLUTIONS LTD
   Main JavaScript
   ============================================ */

// Supabase Configuration
const SUPABASE_URL = 'https://zxnckpruztdlkurmfbfp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_MLCl5C6F85scgwNbYZCDdQ_lq9njK-_';

let supabaseClient = null;
if (typeof supabase !== 'undefined') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // HERO CANVAS (Particle / Circuit Effect)
  // ============================================
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0, mouseY = 0;
    let animationId;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = 200 + Math.random() * 40;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.x -= dx * 0.01;
          this.y -= dy * 0.01;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.opacity})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor(canvas.width * canvas.height / 8000), 60);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 153, 255, ${0.05 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animationId = requestAnimationFrame(animate);
    }

    canvas.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', function() {
      mouseX = -999;
      mouseY = -999;
    });

    initParticles();
    animate();

    window.addEventListener('resize', function() {
      resizeCanvas();
      initParticles();
    });
  }

  // ============================================
  // THEME TOGGLE
  // ============================================
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('electech-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

    themeToggle.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('electech-theme', next);
      themeToggle.innerHTML = next === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
  }

  // ============================================
  // MOBILE HAMBURGER MENU
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  const heroStatValues = document.querySelectorAll('.hero-stat-value');
  if (typeof IntersectionObserver !== 'undefined') {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    // ============================================
    // ANIMATED COUNTERS (Stats)
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    const allCounters = [...statNumbers, ...heroStatValues];

    const counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    allCounters.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.target || el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target + suffix;
    }

    requestAnimationFrame(update);
  }

  // Force-trigger hero counters on load
  setTimeout(() => {
    heroStatValues.forEach(el => {
      if (!el.dataset.animated && el.getBoundingClientRect().top < window.innerHeight) {
        el.dataset.animated = 'true';
        animateCounter(el);
      }
    });
  }, 500);

  // ============================================
  // PROJECT FILTER
  // ============================================
  const filterBtns = document.querySelectorAll('.project-filters .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.dataset.filter;
        projectCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  // ============================================
  // BACK TO TOP
  // ============================================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) backToTop.classList.add('visible');
      else backToTop.classList.remove('visible');
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }

  // ============================================
  // ACTIVE NAV LINK
  // ============================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (navLinks.length && sections.length) {
    window.addEventListener('scroll', function() {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) current = section.id;
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
      });
    });
  }

  // ============================================
  // CONTACT FORM
  // ============================================
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        created_at: new Date().toISOString()
      };

      if (supabaseClient) {
        const { error } = await supabaseClient
          .from('contact_submissions')
          .insert([formData]);

        if (error) {
          console.error('Supabase error:', error);
        }
      }

      btn.innerHTML = originalText;
      btn.disabled = false;
      showToast('Thank you! We will get back to you shortly.');
      this.reset();
    });
  }

  function showToast(msg) {
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
    }
  }

  // ============================================
  // NEWSLETTER FORM
  // ============================================
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const input = this.querySelector('.newsletter-input');
      const email = input.value.trim();

      if (supabaseClient) {
        const { error } = await supabaseClient
          .from('newsletter_subscribers')
          .insert([{ email, created_at: new Date().toISOString() }]);

        if (error) {
          if (error.code === '23505') {
            showToast('You are already subscribed!');
            input.value = '';
            return;
          }
          console.error('Supabase error:', error);
        }
      }

      showToast('Subscribed successfully! Thank you.');
      input.value = '';
    });
  }

  // ============================================
  // CHATBOT
  // ============================================
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbotWindow = document.getElementById('chatbotWindow');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotBody = document.getElementById('chatbotBody');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotSend = document.getElementById('chatbotSend');

  if (chatbotToggle && chatbotWindow) {
    chatbotToggle.addEventListener('click', function() {
      chatbotWindow.classList.toggle('open');
    });

    if (chatbotClose) {
      chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.remove('open');
      });
    }

    function addChatbotMessage(text, type) {
      const msg = document.createElement('div');
      msg.className = 'chatbot-msg ' + type;
      msg.textContent = text;
      chatbotBody.appendChild(msg);
      chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    function handleChatbotQuery(query) {
      const q = query.toLowerCase();
      if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
        return 'Hello! Welcome to Electech Engineering Solutions. How can I assist you today?';
      } else if (q.includes('service') || q.includes('offer')) {
        return 'We offer Electrical Engineering, Telecommunications, Renewable Energy, ICT Infrastructure, Industrial Automation, Electronics, R&D, and Technical Consultancy. Which service interests you?';
      } else if (q.includes('contact') || q.includes('location') || q.includes('address')) {
        return 'We are located on Mugema Road, Kampala, Uganda. You can reach us at info@electec.co.ug or call +256 XYZ 000 000.';
      } else if (q.includes('quote') || q.includes('cost') || q.includes('price')) {
        return 'Please fill out the contact form on our website or call us directly for a personalized quotation based on your project needs.';
      } else if (q.includes('solar') || q.includes('energy')) {
        return 'We design and install solar systems including hybrid, off-grid, and energy storage solutions for homes, businesses, and institutions.';
      } else {
        return 'Thank you for your message. Our team will get back to you shortly. For urgent inquiries, please call us directly.';
      }
    }

    if (chatbotSend && chatbotInput) {
      function sendMessage() {
        const text = chatbotInput.value.trim();
        if (!text) return;
        addChatbotMessage(text, 'user');
        chatbotInput.value = '';
        setTimeout(() => {
          const response = handleChatbotQuery(text);
          addChatbotMessage(response, 'bot');
        }, 500);
      }

      chatbotSend.addEventListener('click', sendMessage);
      chatbotInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') sendMessage();
      });
    }
  }

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ============================================
  // GALLERY - populate & lightbox
  // Inline script may have already created items;
  // this code attaches click handlers and sets up
  // the lightbox either way.
  // ============================================
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  let galleryImages = [];
  let currentImageIndex = 0;

  // Use window.galleryImages if inline script already set it
  if (window.galleryImages && window.galleryImages.length) {
    galleryImages = window.galleryImages;
  }

  // If grid is empty, populate it now (inline script may not have run)
  if (galleryGrid && galleryGrid.children.length === 0) {
    try {
      var imageFiles = [
        "116363666_1803845613091293_3190002061562231843_n.jpg","116882352_1805623442913510_7819026327708559621_n.jpg","117973628_1820740681401786_8852297143243833428_n.jpg","118003424_1823860824423105_8818571609410715163_n.jpg","120040565_1852353344907186_6132075019586387228_n.jpg","120042773_1852353538240500_5204626069860258112_n.jpg","122024919_1883233578485829_9062144332802943422_n.jpg","123392517_1893556504120203_3875509733133310775_n.jpg","123452711_1895632490579271_324458252909728803_n.jpg","124171550_1901347826674404_3894256006364433758_n.jpg","124445497_1901348000007720_3185292525878599346_n.jpg","144240205_172238271366093_2816302673846830628_n.jpg","147398970_176437527612834_7077236171885483964_n.jpg","147892102_176437227612864_9014445873704145937_n.jpg","147911712_176437270946193_708857527863100088_n.jpg","179736787_233364278586825_6106631139195701861_n.jpg","203922245_273431844580068_3417934875253393871_n.jpg","34199599_1124350431040818_6872658452032782336_n.jpg","468567464_1078641224059122_8212291243043276245_n.jpg","470164255_1089084786348099_2015868360761215441_n.jpg","472019889_1102026985053879_2744094857665442204_n.jpg","472052157_1102022291721015_1974009967947644256_n.jpg","472209857_1102026955053882_5236468992333811574_n.jpg","472210008_1102021935054384_2035695693369726376_n.jpg","472309512_1102027185053859_7527040684057209300_n.jpg","472309956_1102018888388022_3791014398111395147_n.jpg","472348354_1102606484995929_3597291804769732204_n.jpg","472459722_1102022271721017_125774249356400735_n.jpg","472670911_1102019838387927_7865064423008279263_n.jpg","474065823_1114007450522499_8737604322852876822_n.jpg","475091108_1116762293580348_63728835556522456_n.jpg","504350248_3308968745912298_2353387083406532083_n.jpg","505506738_3316262238516282_4418640922675795366_n.jpg","720126196_1449706320533026_8506114185016250635_n.jpg","77396556_1558649470944243_1494412567605411840_n.jpg","78893698_1563846150424575_6147374866719834112_n.jpg","79010386_1573164142826109_4458986251583750144_n.jpg","79393582_1558478340961356_5869497281601863680_n.jpg","79423417_1571977109611479_6353994241407975424_n.jpg","80233389_1573163932826130_8213752975072428032_n.jpg","80781461_1581464675329389_5711376815059107840_n.jpg","95224395_1710937955715393_8858558012948742144_n.jpg","95601798_1710938159048706_3097740682589110272_n.jpg"
      ];
      galleryImages = imageFiles.map(function(f) { return 'img/' + f; });
      window.galleryImages = galleryImages;
      galleryImages.forEach(function(src, index) {
        var item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-index', index);
        item.innerHTML = '<img src="' + encodeURI(src) + '" alt="Electech Project Photo" loading="lazy" /><div class="gallery-item-overlay"><i class="fas fa-expand"></i></div>';
        galleryGrid.appendChild(item);
      });
    } catch (e) {
      console.error('Gallery init error:', e);
    }
  }

  // Attach click handlers to all gallery items (whether inline or JS-created)
  if (galleryGrid) {
    [].slice.call(galleryGrid.children).forEach(function(item) {
      item.addEventListener('click', function() {
        var idx = parseInt(item.getAttribute('data-index'), 10);
        if (!isNaN(idx)) openLightbox(idx);
      });
    });
  }

  function openLightbox(index) {
    currentImageIndex = index;
    if (lightbox && lightboxImg) {
      lightboxImg.src = encodeURI(galleryImages[index]);
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = encodeURI(galleryImages[currentImageIndex]);
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImg.src = encodeURI(galleryImages[currentImageIndex]);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  document.addEventListener('keydown', function(e) {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // ============================================
  // FALLBACK: reveal all sections after 3s
  // Ensures content is visible even if IntersectionObserver fails
  // ============================================
  setTimeout(function() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function(el) {
      if (!el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    });
  }, 3000);

  // ============================================
  // WAIT / LOADING SIMULATION (remove .is-loading)
  // ============================================
  document.body.classList.remove('is-loading');

  console.log('%c Electech Engineering Solutions Ltd ', 'background:#0099FF;color:#fff;font-size:1.2rem;font-weight:bold;padding:10px 20px;border-radius:4px;');
  console.log('%c Engineering Innovation. Powering Possibilities. ', 'color:#0099FF;font-size:0.9rem;font-style:italic;');
});
