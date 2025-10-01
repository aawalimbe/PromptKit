// Enhanced PromptKit JavaScript with modern features

// Utility Functions
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try { 
    document.execCommand('copy'); 
  } finally { 
    document.body.removeChild(textArea); 
  }
  return Promise.resolve();
}

// Enhanced copy handlers with better UX
function attachCopyHandlers() {
  document.querySelectorAll('[data-copy]')?.forEach(function(btn){
    btn.addEventListener('click', function(){
      var targetId = btn.getAttribute('data-copy');
      var el = document.getElementById(targetId);
      var content = '';
      
      if (!el) return;
      
      if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
        content = el.value;
      } else {
        content = el.innerText || el.textContent || '';
      }
      
      var original = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-circle me-1"></i>Copied!';
      btn.classList.add('btn-success');
      btn.classList.remove('btn-outline-primary');
      
      copyToClipboard(content).then(function(){
        setTimeout(function(){ 
          btn.innerHTML = original;
          btn.classList.remove('btn-success');
          btn.classList.add('btn-outline-primary');
        }, 2000);
      }).catch(function(){
        btn.innerHTML = '<i class="bi bi-x-circle me-1"></i>Failed';
        setTimeout(function(){ 
          btn.innerHTML = original;
        }, 2000);
      });
    });
  });
}

// Smooth scrolling utility
function smoothScrollTo(target, offset = 0) {
  const element = document.querySelector(target);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.dictionary-card, .feature-card, .profile-card').forEach(el => {
    observer.observe(el);
  });
}

// Enhanced SVG to PNG conversion
function svgTextToPngDataUrl(svgText, scale = 2) {
  return new Promise(function(resolve, reject){
    try {
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();
      
      img.onload = function(){
        try {
          const width = img.width * scale;
          const height = img.height * scale;
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          
          // White background for better printing
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          
          URL.revokeObjectURL(url);
          resolve(canvas.toDataURL('image/png'));
        } catch (e) {
          URL.revokeObjectURL(url);
          reject(e);
        }
      };
      
      img.onerror = function(){ 
        URL.revokeObjectURL(url); 
        reject(new Error('Image load failed')); 
      };
      
      img.src = url;
    } catch (e) { 
      reject(e); 
    }
  });
}

// Enhanced download function
function downloadDataUrl(dataUrl, filename) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename || 'download.png';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Enhanced SVG to PNG download handlers
function attachSvgPngDownloadHandlers() {
  document.querySelectorAll('[data-svg-png]')?.forEach(function(btn){
    btn.addEventListener('click', function(){
      const svgPath = btn.getAttribute('data-svg-png');
      const outName = btn.getAttribute('data-filename') || 'image.png';
      const scale = Number(btn.getAttribute('data-scale') || '2');
      const original = btn.innerHTML;
      
      btn.disabled = true;
      btn.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Preparing…';
      btn.classList.add('loading');
      
      fetch(svgPath)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.text();
        })
        .then(svg => svgTextToPngDataUrl(svg, scale))
        .then(pngUrl => {
          downloadDataUrl(pngUrl, outName);
          btn.innerHTML = '<i class="bi bi-check-circle me-1"></i>Downloaded!';
          btn.classList.add('btn-success');
          setTimeout(() => {
            btn.innerHTML = original;
            btn.classList.remove('btn-success', 'loading');
            btn.disabled = false;
          }, 2000);
        })
        .catch(error => {
          console.error('PNG generation failed:', error);
          btn.innerHTML = '<i class="bi bi-x-circle me-1"></i>Failed';
          btn.classList.add('btn-danger');
          setTimeout(() => {
            btn.innerHTML = original;
            btn.classList.remove('btn-danger', 'loading');
            btn.disabled = false;
          }, 2000);
        });
    });
  });
}

// Loading state management
function showLoading(element) {
  element.classList.add('loading');
  element.style.pointerEvents = 'none';
}

function hideLoading(element) {
  element.classList.remove('loading');
  element.style.pointerEvents = 'auto';
}

// Enhanced navigation handling
function initNavigation() {
  // Handle anchor links with smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      smoothScrollTo(target, navbarHeight + 20);
    });
  });

  // Active navigation highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize everything when DOM is ready
function ready(fn) {
  if (document.readyState !== 'loading') { 
    fn(); 
  } else { 
    document.addEventListener('DOMContentLoaded', fn); 
  }
}

// Main initialization
ready(function() {
  // Initialize all features
  attachCopyHandlers();
  attachSvgPngDownloadHandlers();
  initScrollAnimations();
  initNavigation();
  
  // Add loading states to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.type === 'submit' || this.classList.contains('btn-primary')) {
        showLoading(this);
        setTimeout(() => hideLoading(this), 1000);
      }
    });
  });
  
  // Add hover effects to cards
  document.querySelectorAll('.dictionary-card, .feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  console.log('PromptKit enhanced interface loaded successfully!');
});

