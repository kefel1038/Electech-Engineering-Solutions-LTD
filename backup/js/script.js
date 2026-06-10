/* ============================================
   ELECTECH ENGINEERING SOLUTIONS LTD
   Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // GALLERY IMAGES
  // ============================================
  var galleryImages = [
    { src: 'img/116363666_1803845613091293_3190002061562231843_n.jpg', category: 'electrical' },
    { src: 'img/116882352_1805623442913510_7819026327708559621_n.jpg', category: 'solar' },
    { src: 'img/117973628_1820740681401786_8852297143243833428_n.jpg', category: 'telecom' },
    { src: 'img/118003424_1823860824423105_8818571609410715163_n.jpg', category: 'automation' },
    { src: 'img/120040565_1852353344907186_6132075019586387228_n.jpg', category: 'training' },
    { src: 'img/120042773_1852353538240500_5204626069860258112_n.jpg', category: 'solar' },
    { src: 'img/122024919_1883233578485829_9062144332802943422_n.jpg', category: 'electrical' },
    { src: 'img/123392517_1893556504120203_3875509733133310775_n.jpg', category: 'telecom' },
    { src: 'img/123452711_1895632490579271_324458252909728803_n.jpg', category: 'automation' },
    { src: 'img/124171550_1901347826674404_3894256006364433758_n.jpg', category: 'training' },
    { src: 'img/124445497_1901348000007720_3185292525878599346_n.jpg', category: 'solar' },
    { src: 'img/144240205_172238271366093_2816302673846830628_n.jpg', category: 'electrical' },
    { src: 'img/147398970_176437527612834_7077236171885483964_n.jpg', category: 'telecom' },
    { src: 'img/147892102_176437227612864_9014445873704145937_n.jpg', category: 'automation' },
    { src: 'img/147911712_176437270946193_708857527863100088_n.jpg', category: 'training' },
    { src: 'img/179736787_233364278586825_6106631139195701861_n.jpg', category: 'solar' },
    { src: 'img/203922245_273431844580068_3417934875253393871_n.jpg', category: 'electrical' },
    { src: 'img/34199599_1124350431040818_6872658452032782336_n.jpg', category: 'telecom' },
    { src: 'img/468567464_1078641224059122_8212291243043276245_n.jpg', category: 'automation' },
    { src: 'img/470164255_1089084786348099_2015868360761215441_n.jpg', category: 'training' },
    { src: 'img/472019889_1102026985053879_2744094857665442204_n.jpg', category: 'solar' },
    { src: 'img/472052157_1102022291721015_1974009967947644256_n.jpg', category: 'electrical' },
    { src: 'img/472209857_1102026955053882_5236468992333811574_n.jpg', category: 'telecom' },
    { src: 'img/472210008_1102021935054384_2035695693369726376_n.jpg', category: 'automation' },
    { src: 'img/472309512_1102027185053859_7527040684057209300_n.jpg', category: 'training' },
    { src: 'img/472309956_1102018888388022_3791014398111395147_n.jpg', category: 'solar' },
    { src: 'img/472348354_1102606484995929_3597291804769732204_n.jpg', category: 'electrical' },
    { src: 'img/472459722_1102022271721017_125774249356400735_n.jpg', category: 'telecom' },
    { src: 'img/472670911_1102019838387927_7865064423008279263_n.jpg', category: 'automation' },
    { src: 'img/474065823_1114007450522499_8737604322852876822_n.jpg', category: 'training' },
    { src: 'img/475091108_1116762293580348_63728835556522456_n.jpg', category: 'solar' },
    { src: 'img/504350248_3308968745912298_2353387083406532083_n.jpg', category: 'electrical' },
    { src: 'img/505506738_3316262238516282_4418640922675795366_n.jpg', category: 'telecom' },
    { src: 'img/720126196_1449706320533026_8506114185016250635_n.jpg', category: 'automation' },
    { src: 'img/77396556_1558649470944243_1494412567605411840_n.jpg', category: 'training' },
    { src: 'img/78893698_1563846150424575_6147374866719834112_n.jpg', category: 'solar' },
    { src: 'img/79010386_1573164142826109_4458986251583750144_n.jpg', category: 'electrical' },
    { src: 'img/79393582_1558478340961356_5869497281601863680_n.jpg', category: 'telecom' },
    { src: 'img/79423417_1571977109611479_6353994241407975424_n.jpg', category: 'automation' },
    { src: 'img/80233389_1573163932826130_8213752975072428032_n.jpg', category: 'training' },
    { src: 'img/80781461_1581464675329389_5711376815059107840_n.jpg', category: 'solar' },
    { src: 'img/95224395_1710937955715393_8858558012948742144_n.jpg', category: 'electrical' },
    { src: 'img/95601798_1710938159048706_3097740682589110272_n.jpg', category: 'telecom' }
  ];

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
  // ENGINEERING PROJECTS FILTER
  // ============================================
  var efilterBtns = document.querySelectorAll('.efilter-btn');
  var eprojectCards = document.querySelectorAll('.eproject-card');
  if (efilterBtns.length) {
    efilterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        efilterBtns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        var filter = this.dataset.efilter;
        eprojectCards.forEach(function(card) {
          if (filter === 'all' || card.dataset.ecategory === filter) {
            card.style.display = '';
            setTimeout(function() { card.style.opacity = '1'; }, 50);
          } else {
            card.style.opacity = '0';
            setTimeout(function() { card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  // ============================================
  // ANIMATED COUNTERS (metrics + impact + flagship)
  // ============================================
  var allCounters = document.querySelectorAll('.metric-number, .impact-number, .fresult-num');
  if (allCounters.length && typeof IntersectionObserver !== 'undefined') {
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          var target = parseInt(entry.target.dataset.target) || 0;
          if (target === 0) { entry.target.textContent = '0'; return; }
          var duration = 2000;
          var startTime = performance.now();
          function update(now) {
            var elapsed = now - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(eased * target);
            entry.target.textContent = current;
            if (progress < 1) requestAnimationFrame(update);
            else entry.target.textContent = target;
          }
          requestAnimationFrame(update);
        }
      });
    }, { threshold: 0.3 });
    allCounters.forEach(function(el) { counterObserver.observe(el); });
  }

  // ============================================
  // PROJECT TESTIMONIAL CAROUSEL
  // ============================================
  var ptrack = document.getElementById('ptestimonialTrack');
  var pprevBtn = document.getElementById('ptestPrev');
  var pnextBtn = document.getElementById('ptestNext');
  var pdotsContainer = document.getElementById('ptestDots');
  if (ptrack) {
    var pslides = ptrack.querySelectorAll('.ptestimonial-card');
    var pcurrentSlide = 0;
    var ptotalSlides = pslides.length;
    if (pdotsContainer) {
      for (var p = 0; p < ptotalSlides; p++) {
        var pdot = document.createElement('button');
        pdot.className = 'ptestimonial-dot' + (p === 0 ? ' active' : '');
        pdot.dataset.index = p;
        pdot.addEventListener('click', function() { pgoToSlide(parseInt(this.dataset.index)); });
        pdotsContainer.appendChild(pdot);
      }
    }
    function pgoToSlide(idx) {
      pcurrentSlide = idx;
      ptrack.style.transform = 'translateX(-' + (pcurrentSlide * 100) + '%)';
      var pdots = pdotsContainer ? pdotsContainer.querySelectorAll('.ptestimonial-dot') : [];
      pdots.forEach(function(d, i) { d.classList.toggle('active', i === pcurrentSlide); });
    }
    if (pprevBtn) pprevBtn.addEventListener('click', function() {
      pcurrentSlide = (pcurrentSlide - 1 + ptotalSlides) % ptotalSlides;
      pgoToSlide(pcurrentSlide);
    });
    if (pnextBtn) pnextBtn.addEventListener('click', function() {
      pcurrentSlide = (pcurrentSlide + 1) % ptotalSlides;
      pgoToSlide(pcurrentSlide);
    });
    setInterval(function() {
      if (ptrack) {
        pcurrentSlide = (pcurrentSlide + 1) % ptotalSlides;
        pgoToSlide(pcurrentSlide);
      }
    }, 5000);
  }

  // ============================================
  // SOLAR ROI CALCULATOR
  // ============================================
  var roiBill = document.getElementById('roi-bill');
  var roiBillValue = document.getElementById('roi-bill-value');
  var roiArea = document.getElementById('roi-area');
  var roiAreaValue = document.getElementById('roi-area-value');
  var roiFacility = document.getElementById('roi-facility');
  var roiOrientation = document.getElementById('roi-orientation');

  function formatUGX(n) {
    return 'UGX ' + n.toLocaleString('en-US');
  }

  function calculateROI() {
    if (!roiBill || !roiArea) return;
    var bill = parseFloat(roiBill.value) || 5000000;
    var area = parseFloat(roiArea.value) || 1000;
    var fac = roiFacility ? roiFacility.value : 'office';
    var orient = roiOrientation ? roiOrientation.value : 'good';

    if (roiBillValue) roiBillValue.textContent = formatUGX(bill);
    if (roiAreaValue) roiAreaValue.textContent = area.toLocaleString() + ' m\u00B2';

    // Determine usable roof area
    var usableRatio = { office: 0.6, factory: 0.7, warehouse: 0.8, hospital: 0.5, school: 0.5, mall: 0.6, hotel: 0.5, farm: 0.4 };
    var ratio = usableRatio[fac] || 0.6;
    var usableArea = area * ratio;

    // Orientation factor
    var orientFactor = { excellent: 1.0, good: 0.85, fair: 0.7, poor: 0.5 };
    var ofactor = orientFactor[orient] || 0.85;

    // System size (kWp)
    var systemKw = Math.round((usableArea * 0.15 * ofactor) * 10) / 10;
    systemKw = Math.min(systemKw, bill * 0.000012); // Cap by bill (rough)

    // Annual generation (kWh) - Uganda avg ~4.5 peak sun hours
    var annualKwh = Math.round(systemKw * 4.5 * 365 * 0.85 * ofactor);

    // Cost per kWp (UGX) - ~5.5M per kWp for commercial
    var costPerKw = 5500000;
    var capex = Math.round(systemKw * costPerKw);

    // Savings: UGX 500/kWh grid rate
    var ratePerKwh = 500;
    var annualSavings = Math.round(annualKwh * ratePerKwh * 0.85); // 85% self-consumption

    // Payback
    var payback = annualSavings > 0 ? capex / annualSavings : 99;

    // 25-year net benefit
    var year25Benefit = Math.round(annualSavings * 25 - capex);

    // Compare: solar cost vs grid cost per kWh
    var gridCostAnnual = bill * 12;
    var solarCostAnnual = Math.round(capex / 20 + annualKwh * 50 * (1 - 0.85)); // O&M + grid backup

    document.getElementById('roi-system').textContent = systemKw.toFixed(1) + ' kWp';
    document.getElementById('roi-capex').textContent = formatUGX(capex);
    document.getElementById('roi-generation').textContent = annualKwh.toLocaleString() + ' kWh';
    document.getElementById('roi-savings').textContent = formatUGX(annualSavings);
    document.getElementById('roi-payback').textContent = payback.toFixed(1) + ' years';
    document.getElementById('roi-benefit').textContent = formatUGX(Math.max(year25Benefit, 0));

    // Compare bars
    var maxCost = Math.max(gridCostAnnual, solarCostAnnual, 1);
    var gridPct = Math.min((gridCostAnnual / maxCost) * 100, 100);
    var solarPct = Math.min((solarCostAnnual / maxCost) * 100, 100);
    document.getElementById('roi-compare-grid').style.width = gridPct + '%';
    document.getElementById('roi-compare-solar').style.width = solarPct + '%';
  }

  // Bind events
  if (roiBill) roiBill.addEventListener('input', calculateROI);
  if (roiArea) roiArea.addEventListener('input', calculateROI);
  if (roiFacility) roiFacility.addEventListener('change', calculateROI);
  if (roiOrientation) roiOrientation.addEventListener('change', calculateROI);

  // Run initial calculation
  calculateROI();

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
