
jQuery(document).ready(function() {

  var contenido = "";
  var pagContenido = "";

  var diseño = "";

  var productos = "";
  var state = "";
  var lms = "";
  var eventos = "";
  var tickets = "";
  var multilingue = "";
  var reservas = "";
  var login = "";
  var paypal = "";
  
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

      console.log('Checked: ' + productos);
    }

  });
  jQuery('.real-estate').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      state = jQuery(this).val();

      console.log('Checked: ' + state);
    }

  });
  jQuery('.lms').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      lms = jQuery(this).val();

      console.log('Checked: ' + lms);
    }

  });
  jQuery('.eventos').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      eventos = jQuery(this).val();

      console.log('Checked: ' + eventos);
    }

  });
  jQuery('.tickets').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      tickets = jQuery(this).val();

      console.log('Checked: ' + tickets);
    }

  });
  jQuery('.multilingue').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      multilingue = jQuery(this).val();

      console.log('Checked: ' + multilingue);
    }

  });
  jQuery('.reservas').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      reservas = jQuery(this).val();

      console.log('Checked: ' + reservas);
    }

  });
  jQuery('.login').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      login = jQuery(this).val();

      console.log('Checked: ' + login);
    }

  });
  jQuery('.paypal').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      paypal = jQuery(this).val();

      console.log('Checked: ' + paypal);
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