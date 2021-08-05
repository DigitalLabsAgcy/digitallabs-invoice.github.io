
jQuery(document).ready(function() {

  var contenido = "";
  var diseño = "";
  var pagContenido = "";
  var total = "";

  jQuery('.content-support .widget').click(function() {
    jQuery('.widget').removeClass('active');
    jQuery(this).addClass('active');
    contenido = jQuery(this).data('price');

    console.log( "precio: " + contenido);
  });

  jQuery('.design-support .widget').click(function() {
    jQuery('.widget').removeClass('active');
    jQuery(this).addClass('active');
    diseño = jQuery(this).data('price');

    console.log( "precio: " + diseño);
  });

  total = (parseInt(contenido) + parseInt(diseño));

  console.log(parseInt(contenido) + parseInt(diseño));

  if( $('.micheckbox').is(':checked') ) {
    


  }

});