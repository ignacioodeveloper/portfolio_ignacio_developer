// script titulo typing efect
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Luis Ignacio.", "Creator.", "Web Developer.", "Full Stack."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("p").innerHTML = text.substring(0, i+1) +'<spon aria-hidden="true"></spon>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

const copyEmailBtn = document.querySelector('#copy-email');

copyEmailBtn.addEventListener('click', () => {
  const email = 'luisignaciocontacto@gmail.com';
  
  // Copiar el email al portapapeles
  navigator.clipboard.writeText(email)
    .then(() => {
      // Cambiar el texto del botón
      copyEmailBtn.innerText = 'Email copied!';
    })
    .catch(err => {
      console.error('No se pudo copiar el email: ', err);
    });
});

const downloadFileBtn = document.querySelector('#download-file');

downloadFileBtn.addEventListener('click', () => {
  const fileUrl = 'img/world_icon.png';
  
  // Crear un enlace temporal para descargar el archivo
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'world_icon.png';

  // texto
  
  // Añadir el enlace al DOM y hacer clic en él
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Cambiar el texto del botón
  downloadFileBtn.innerText = 'Descarga completa!';
});


