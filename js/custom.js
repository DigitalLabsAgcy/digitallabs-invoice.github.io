
jQuery(document).ready(function() {

  var contenido = "";
  var diseño = "";
  var pagContenido = "";

  jQuery('.sub-paquete .basic').click(function() {

    contenido = jQuery(this).data('price');

    console.log(contenido);
  
  });

  jQuery('.sub-paquete .basic').click(function() {

    pagContenido = jQuery('.cant-paginas').val();

    console.log(pagContenido);
  
  });

  jQuery('.sub-paquete .complete').click(function() {

    jQuery(this).data('price');
  });

});