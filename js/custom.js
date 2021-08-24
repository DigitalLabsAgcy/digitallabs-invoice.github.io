
jQuery(document).ready(function() {

  var contenido = 0;
  var pagContenido = 0;

  var diseño = 0;

  var productos = 0;
  var cantProd = 0;
  var state = 0;
  var cantProp = 0;
  var lms = 0;
  var cantCursos = 0;
  var eventos = 0;
  var cantEvent = 0;
  var tickets = 0;
  var multilingue = 0;
  var reservas = 0;
  var login = 0;
  var paypal = 0;

  var eCommerce = 0;
  var importInfo = 0;
  var distribuidor = 0;
  var dynamicPrice = 0;
  var memberSystem = 0;
  var marketplace = 0;
  var afiliado = 0;
  var shutterstuck = 0;
  var comparisson = 0;
  var monedas = 0;
  var selling = 0;
  var pointSystem = 0;
  var suscription = 0;
  var brands = 0;
  var wishlist = 0;
  var zappier = 0;
  var forced = 0;
  
  var dev = 0;
  
  var member = 0;

  var inputPag = 0;
  var inputProd = 0;
  var inputProp = 0;
  var inputCursos = 0;
  var inputEvent = 0;

  var total = 0;

  jQuery('.membresias-section .cotizar').click(function() {

    pagContenido = jQuery('.content-support .cant-paginas').val();
    cantProd = jQuery('.cant-productos').val();
    cantProp = jQuery('.cant-propiedades').val();
    cantCursos = jQuery('.cant-cursos').val();
    cantEvent = jQuery('.cant-eventos').val();

    inputPag = parseInt(pagContenido) * 100;
    if('.productos'.checked) {
      inputProd = parseInt(productos) * parseFloat(cantProd);
    }
    if('.real-estate'.checked) {
      inputProp = parseInt(state) * parseFloat(cantProp);
    }
    if('.lms'.checked) {
      inputCursos = parseInt(lms) * parseFloat(cantCursos);
    }
    if('.eventos'.checked) {
      inputEvent = parseInt(eventos) * parseFloat(cantEvent);
    }

    total = (parseInt(contenido) + parseInt(inputPag) + parseInt(diseño) + parseInt(inputProd) + parseInt(inputProp) + parseInt(inputCursos) + parseInt(inputEvent) + parseInt(tickets) + parseInt(multilingue) + parseInt(dev) + parseInt(member));

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