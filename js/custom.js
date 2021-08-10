
jQuery(document).ready(function() {

  var contenido = "";
  var pagContenido = "";

  var diseño = "";

  var productos = "";
  var cantProd = "";
  var state = "";
  var cantProp = "";
  var lms = "";
  var cantCursos = "";
  var eventos = "";
  var cantEvent = "";
  var tickets = "";
  var multilingue = "";
  var reservas = "";
  var login = "";
  var paypal = "";

  var eCommerce = "";
  var importInfo = "";
  var distribuidor = "";
  var dynamicPrice = "";
  var memberSystem = "";
  var marketplace = "";
  var afiliado = "";
  var shutterstuck = "";
  var comparisson = "";
  var monedas = "";
  var selling = "";
  var pointSystem = "";
  var suscription = "";
  var brands = "";
  var wishlist = "";
  var zappier = "";
  var forced = "";
  
  var dev = "";
  
  var member = "";
  var total = 0;

  jQuery('.membresias-section .cotizar').click(function() {

    pagContenido = jQuery('.content-support .cant-paginas').val();
    cantProd = jQuery('.cant-productos').val();
    cantProp = jQuery('.cant-propiedades').val();
    cantCursos = jQuery('.cant-cursos').val();
    cantEvent = jQuery('.cant-eventos').val();

    total = (parseInt(contenido) + (parseInt(pagContenido) * 100) + parseInt(diseño) + (parseInt(productos) * parseInt(cantProd)) + (parseInt(state) * parseInt(cantProp)) + (parseInt(lms) * parseInt(cantCursos)) + (parseInt(eventos) * parseInt(cantEvent)) + parseInt(tickets) + parseInt(dev) + parseInt(member));

    console.log("Total:" + total);
  });

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


  jQuery('.eCommerce').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      eCommerce = jQuery(this).val();

      console.log('Checked: ' + eCommerce);
    }

  });
  jQuery('.importInfo').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      importInfo = jQuery(this).val();

      console.log('Checked: ' + importInfo);
    }

  });
  jQuery('.distribuidor').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      distribuidor = jQuery(this).val();

      console.log('Checked: ' + distribuidor);
    }

  });
  jQuery('.dynamic-price').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      dynamicPrice = jQuery(this).val();

      console.log('Checked: ' + dynamicPrice);
    }

  });
  jQuery('.member-system').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      memberSystem = jQuery(this).val();

      console.log('Checked: ' + memberSystem);
    }

  });
  jQuery('.marketplace').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      marketplace = jQuery(this).val();

      console.log('Checked: ' + marketplace);
    }

  });
  jQuery('.afiliado').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      afiliado = jQuery(this).val();

      console.log('Checked: ' + afiliado);
    }

  });
  jQuery('.shutterstuck').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      shutterstuck = jQuery(this).val();

      console.log('Checked: ' + shutterstuck);
    }

  });
  jQuery('.comparisson').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      comparisson = jQuery(this).val();

      console.log('Checked: ' + comparisson);
    }

  });
  jQuery('.monedas').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      monedas = jQuery(this).val();

      console.log('Checked: ' + monedas);
    }

  });
  jQuery('.selling').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      selling = jQuery(this).val();

      console.log('Checked: ' + selling);
    }

  });
  jQuery('.points-system').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      pointSystem = jQuery(this).val();

      console.log('Checked: ' + pointSystem);
    }

  });
  jQuery('.suscription').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      suscription = jQuery(this).val();

      console.log('Checked: ' + suscription);
    }

  });
  jQuery('.brands').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      brands = jQuery(this).val();

      console.log('Checked: ' + brands);
    }

  });
  jQuery('.wishlist').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      wishlist = jQuery(this).val();

      console.log('Checked: ' + wishlist);
    }

  });
  jQuery('.zappier').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      zappier = jQuery(this).val();

      console.log('Checked: ' + zappier);
    }

  });
  jQuery('.forced').on('change',function() {
    
    if(this.checked) { 
      jQuery('.check-option').addClass('active');

      forced = jQuery(this).val();

      console.log('Checked: ' + forced);
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

  

});