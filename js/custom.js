
jQuery(document).ready(function() {

  console.log("testing js file");

  jQuery('.sub-paquete .basic').click(function() {

    jQuery(this).data('price');
    jQuery(this).addClass('sumable');
  });

});