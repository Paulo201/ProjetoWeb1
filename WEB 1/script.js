var indice_slide_auto = 0;
trocarSlides();

function trocarSlides() {
    var i_auto;
    var slides_auto = document.getElementsByClassName("meus-slides-auto");
    var ponto_indicador_auto = document.getElementsByClassName("ponto-indicador-slide");
    for (i_auto = 0; i_auto < slides_auto.length; i_auto++) {
       slides_auto[i_auto].style.display = "none";  
    }
    indice_slide_auto++;
    if (indice_slide_auto > slides_auto.length) {indice_slide_auto = 1}    
    for (i_auto = 0; i_auto < ponto_indicador_auto.length; i_auto++) {
        ponto_indicador_auto[i_auto].className = ponto_indicador_auto[i_auto].className.replace(" ativo", "");
    }
    slides_auto[indice_slide_auto-1].style.display = "block";  
    setTimeout(trocarSlides, 2000);
}

var indice_slide = [1,1];
var classe_slides = ["meus-slides","meus-slides-2"];
mostrar_slides(1, 0);
mostrar_slides(1, 1);

function controlador_slides(n, no) {
  mostrar_slides(indice_slide[no] += n, no);
}

function mostrar_slides(n, no) {
  var i;
  var x = document.getElementsByClassName(classe_slides[no]);
  if (n > x.length) {indice_slide[no] = 1}    
  if (n < 1) {indice_slide[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[indice_slide[no]-1].style.display = "block";  
}
function exibirCreditos() {
    alert(
      "Membros:\nPaulo Sérgio\nPedro Lima"
    );
}