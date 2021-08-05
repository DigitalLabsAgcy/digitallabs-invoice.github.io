
jQuery(document).ready(function() {

  var contenido = "";
  var diseño = "";
  var pagContenido = "";
  var total = 0;

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


  if( $('.micheckbox').is(':checked') ) {
    
  }

  jQuery('.membresias-section .cotizar').click(function() {
    total = (parseInt(contenido) + parseInt(diseño));

    console.log("Total:" + total);
  });

});