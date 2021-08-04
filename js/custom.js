
jQuery(document).ready(function() {

  var contenido = "";
  var diseño = "";
  var pagContenido = "";

  jQuery('.sup-paquete .basic').click(function() {

    contenido = jQuery(this).data('price');

    console.log(contenido);
  
  });

  jQuery('.sup-paquete .basic').click(function() {

    pagContenido = jQuery('.cant-paginas').val();

    console.log(pagContenido);
  
  });

  jQuery('.sup-paquete .complete').click(function() {

    jQuery(this).data('price');
  });

});