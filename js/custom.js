
jQuery(document).ready(function() {

  var contenido = "";
  var diseño = "";

  jQuery('.sub-paquete .basic').click(function() {

    contenido = jQuery('.sub-paquete .basic').data('price');

    console.log(contenido);
  
  });

  jQuery('.sub-paquete .complete').click(function() {

    jQuery(this).data('price');
  });

});