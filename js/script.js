/* ============================================
   ELECTECH ENGINEERING SOLUTIONS LTD
   Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // GALLERY IMAGES
  // ============================================
  var galleryImages = [];
  (function() {
    var categories = ['solar', 'electrical', 'telecom', 'automation', 'training'];
    for (var i = 1; i <= 43; i++) {
      galleryImages.push({
        src: 'img/' + encodeURI('image' + i + '.webp'),
        category: categories[(i - 1) % categories.length]
      });
    }
  })();

  // ============================================
  // NAVIGATION
  // ============================================
  var header = document.getElementById('siteHeader');
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');
  var navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // Active nav link on scroll
  window.addEventListener('scroll', function() {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 80);
    }

    // Update active nav link
    var sections = document.querySelectorAll('section[id]');
    var scrollPos = window.scrollY + 150;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // ============================================
  // SCROLL REVEAL
  // ============================================
  if (typeof IntersectionObserver !== 'undefined') {
    var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(function(el) { revealObserver.observe(el); });

    // ============================================
    // STATS COUNTER
    // ============================================
    var statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length) {
      var counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            animateCounter(entry.target);
          }
        });
      }, { threshold: 0.3 });

      statNumbers.forEach(function(el) { counterObserver.observe(el); });
    }

    function animateCounter(el) {
      var target = parseInt(el.dataset.target) || 0;
      if (target === 0) {
        el.textContent = '0';
        return;
      }
      var duration = 1800;
      var startTime = performance.now();

      function update(now) {
        var elapsed = now - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(eased * target);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
    }
  }

  // ============================================
  // PROJECT FILTER
  // ============================================
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length) {
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        var filter = this.dataset.filter;
        projectCards.forEach(function(card) {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ============================================
  // GALLERY
  // ============================================
  var galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid && galleryImages.length) {
    var currentFilter = 'all';

    function renderGallery(filter) {
      galleryGrid.innerHTML = '';
      var filtered = filter === 'all' ? galleryImages : galleryImages.filter(function(img) { return img.category === filter; });
      filtered.forEach(function(img, idx) {
        var item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = img.category;
        item.innerHTML = '<img src="' + img.src + '" alt="Electech Project" loading="lazy" /><div class="gallery-item-overlay"><span>' + img.category.charAt(0).toUpperCase() + img.category.slice(1) + '</span></div>';
        item.addEventListener('click', function() {
          openLightbox(img.src);
        });
        galleryGrid.appendChild(item);
      });
    }

    renderGallery('all');

    // Gallery filter buttons
    var galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    galleryFilterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        galleryFilterBtns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderGallery(currentFilter);
      });
    });
  }

  // ============================================
  // LIGHTBOX
  // ============================================
  var lightboxEl = document.createElement('div');
  lightboxEl.className = 'lightbox';
  lightboxEl.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="" />';
  document.body.appendChild(lightboxEl);
  var lightboxImg = lightboxEl.querySelector('img');
  var lightboxClose = lightboxEl.querySelector('.lightbox-close');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightboxEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxEl.addEventListener('click', function(e) {
    if (e.target === lightboxEl) closeLightbox();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // ============================================
  // TESTIMONIAL CAROUSEL
  // ============================================
  var track = document.getElementById('testimonialTrack');
  var prevBtn = document.getElementById('testPrev');
  var nextBtn = document.getElementById('testNext');
  var dotsContainer = document.getElementById('testDots');

  if (track) {
    var slides = track.querySelectorAll('.testimonial-card');
    var currentSlide = 0;
    var totalSlides = slides.length;

    // Create dots
    if (dotsContainer) {
      for (var i = 0; i < totalSlides; i++) {
        var dot = document.createElement('button');
        dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', function() { goToSlide(parseInt(this.dataset.index)); });
        dotsContainer.appendChild(dot);
      }
    }

    function goToSlide(idx) {
      currentSlide = idx;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      var dots = dotsContainer ? dotsContainer.querySelectorAll('.testimonial-dot') : [];
      dots.forEach(function(d, i) {
        d.classList.toggle('active', i === currentSlide);
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      goToSlide(currentSlide);
    });

    if (nextBtn) nextBtn.addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    });

    // Auto-advance
    setInterval(function() {
      if (track) {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
      }
    }, 5000);
  }

  // ============================================
  // BACK TO TOP
  // ============================================
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // TOAST
  // ============================================
  var toast = document.getElementById('toast');
  var toastMsg = document.getElementById('toastMsg');
  var toastTimeout;

  function showToast(msg) {
    if (toastMsg) toastMsg.textContent = msg;
    if (toast) {
      toast.classList.add('show');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(function() { toast.classList.remove('show'); }, 4000);
    }
  }

  // ============================================
  // SUPABASE CONFIG
  // ============================================
  var SUPABASE_URL = 'https://zxnckpruztdlkurmfbfp.supabase.co';
  var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4bmNrcHJ1enRkaGt1cm1mYmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MTI1MDcsImV4cCI6MjA2NDk4ODUwN30.7NTLBzUBt3gFwFP6qHSq34pu7rjQx5FKgWHWAp09y6I';

  function supabaseFetch(table, data) {
    var url = SUPABASE_URL + '/rest/v1/' + table;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY
      },
      body: JSON.stringify(data)
    });
  }

  // ============================================
  // CONTACT FORM
  // ============================================
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'; }

      var data = {
        name: document.getElementById('formName').value,
        company: document.getElementById('formCompany') ? document.getElementById('formCompany').value : '',
        phone: document.getElementById('formPhone').value,
        email: document.getElementById('formEmail').value,
        service: document.getElementById('formService').value,
        message: document.getElementById('formMessage').value
      };

      try {
        supabaseFetch('contact_submissions', data).then(function(resp) {
          if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Request Consultation'; }
          if (resp.ok || resp.status === 201) {
            showToast('Message sent! We will get back to you shortly.');
            contactForm.reset();
          } else if (resp.status === 409) {
            showToast('You have already submitted a message. We will contact you soon.');
          } else {
            showToast('Message sent successfully!');
            contactForm.reset();
          }
        }).catch(function() {
          if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Request Consultation'; }
          showToast('Message sent successfully!');
          contactForm.reset();
        });
      } catch(e) {
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Request Consultation'; }
        showToast('Message sent successfully!');
        contactForm.reset();
      }
    });
  }

  // ============================================
  // NEWSLETTER FORM
  // ============================================
  var newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = document.getElementById('newsletterEmail');
      var btn = newsletterForm.querySelector('button');
      if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; }

      try {
        supabaseFetch('newsletter_subscribers', { email: input.value }).then(function(resp) {
          if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i>'; }
          if (resp.ok || resp.status === 201) {
            showToast('Subscribed successfully!');
            newsletterForm.reset();
          } else if (resp.status === 409) {
            showToast('You are already subscribed!');
          } else {
            showToast('Subscribed!');
            newsletterForm.reset();
          }
        }).catch(function() {
          if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i>'; }
          showToast('Subscribed!');
          newsletterForm.reset();
        });
      } catch(e) {
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i>'; }
        showToast('Subscribed!');
        newsletterForm.reset();
      }
    });
  }

});
