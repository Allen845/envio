//Script del Menu Hamburguesa
function llamar(){
    let botonera=document.getElementById("botonera");
        botonera.classList.toggle("botonera-open");
    let menu=document.getElementById("menu");
        menu.querySelector("#menu .fa-bars").classList.toggle("fa-times");
}
  //Script del Header
  window.addEventListener("scroll",Cambio);
  function Cambio(){
      let header=document.getElementById("header");
          posy=window.pageYOffset;
      if(posy>300){
          header.style.background="deeppink";
          header.style.transition="0.5s";
      }
      else{
          header.style.background="none";
          header.style.transition="0.5s";
      }
  }
  //Script de la Galeria
  let num=1;
  function adelante(){
  num++;
  if(num>7)
  num=1; 
   let img=document.getElementById("img");
      img.src="img/"+"spa0"+num+".jpg";           
}
function atras(){
  num--;
  if(num<1)
  num=7; 
   let img=document.getElementById("img");
      img.src="img/"+"spa0"+num+".jpg";           
}
//Script del Subir
window.addEventListener("scroll", Subir);
    function Subir(){
        let subir=document.getElementById("subir");
            ypos=window.pageYOffset;
        if(ypos>100){
            subir.style.display="block";
        }
        else{
            subir.style.display="none";
        }
    }
//Script del Preloader
let preloader=document.getElementById("preloader");
        setTimeout(() => {
            preloader.style.transition="0.5s";
            preloader.style.visibility="hidden";
        },2000);
//Script del Preloader version clasica
        setTimeout(function() {
            preloader.style.transition="0.5s";
            preloader.style.visibility="hidden";
        },2000);
//Script de Testimonios
window.addEventListener("load",function(){
    let imagenes=[];
        imagenes[0]="img/jennifer.jpg";
        imagenes[1]="img/shakira.jpeg";
        imagenes[2]="img/thalia.jpeg";
    let indiceImagenes=0;
    function cambiarImagenes(){
        document.slider.src=imagenes[indiceImagenes];
        if (indiceImagenes<2){
            indiceImagenes++;
        }
        else{
            indiceImagenes=0;
        }
    }
        setInterval(cambiarImagenes,2000);            
    });