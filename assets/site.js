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
  try { document.execCommand('copy'); } finally { document.body.removeChild(textArea); }
  return Promise.resolve();
}

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
      var original = btn.textContent;
      copyToClipboard(content).then(function(){
        btn.textContent = 'Copied!';
        setTimeout(function(){ btn.textContent = original; }, 1500);
      });
    });
  });
}

function ready(fn){
  if (document.readyState !== 'loading') { fn(); }
  else { document.addEventListener('DOMContentLoaded', fn); }
}

ready(function(){
  attachCopyHandlers();
});

// Client-side SVG -> PNG download
function svgTextToPngDataUrl(svgText, scale) {
  return new Promise(function(resolve, reject){
    try {
      var svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      var url = URL.createObjectURL(svgBlob);
      var img = new Image();
      img.onload = function(){
        try {
          var width = img.width * (scale || 2);
          var height = img.height * (scale || 2);
          var canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext('2d');
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
      img.onerror = function(){ URL.revokeObjectURL(url); reject(new Error('Image load failed')); };
      img.src = url;
    } catch (e) { reject(e); }
  });
}

function downloadDataUrl(dataUrl, filename) {
  var a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename || 'download.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function attachSvgPngDownloadHandlers() {
  document.querySelectorAll('[data-svg-png]')?.forEach(function(btn){
    btn.addEventListener('click', function(){
      var svgPath = btn.getAttribute('data-svg-png');
      var outName = btn.getAttribute('data-filename') || 'image.png';
      var scale = Number(btn.getAttribute('data-scale') || '2');
      var original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Preparing…';
      fetch(svgPath)
        .then(function(r){ return r.text(); })
        .then(function(svg){ return svgTextToPngDataUrl(svg, scale); })
        .then(function(pngUrl){ downloadDataUrl(pngUrl, outName); })
        .catch(function(){ alert('PNG generation failed. Please download the SVG instead.'); })
        .finally(function(){ btn.disabled = false; btn.textContent = original; });
    });
  });
}

ready(function(){
  attachSvgPngDownloadHandlers();
});

