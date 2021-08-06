
jQuery(document).ready(function() {

  var contenido = "";
  var pagContenido = "";
  var diseño = "";
  var productos = "";
  var dev = "";
  var member = "";
  var total = 0;

  jQuery('.content-support .widget').click(function() {
    jQuery('.content-support .widget').removeClass('active');
    jQuery(this).addClass('active');
    contenido = jQuery(this).data('price');

    console.log( "precio: " + contenido);
  });

  jQuery('.design-support .widget').click(function() {
    jQuery('.design-suppor .widget').removeClass('active');
    jQuery(this).addClass('active');
    diseño = jQuery(this).data('price');

    console.log( "precio: " + diseño);
  });


  jQuery('.productos').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      productos = jQuery(this).val();

      console.log('Checked: ' + productos)
    }

  });

  jQuery('.so-dev .widget').click(function() {
    jQuery('.so-dev .widget').removeClass('active');
    jQuery(this).addClass('active');
    dev = jQuery(this).data('price');

    console.log( "precio: " + dev);
  });

  jQuery('.membresias-section .price-widget').click(function() {
    jQuery('.membresias-section .price-widget').removeClass('active');
    jQuery(this).addClass('active');
    member = jQuery(this).data('price');

    console.log( "precio: " + member);
  });

  jQuery('.membresias-section .cotizar').click(function() {
    total = (parseInt(contenido) + parseInt(diseño) + parseInt(dev) + parseInt(member));

    console.log("Total:" + total);
  });

});