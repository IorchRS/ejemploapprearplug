$(function() {
    $('.animated').appear();
    $(document.body).on('appear', '.magic1', function() {
        jQuery(this).each(function() {
            jQuery(this).addClass("fadeInUp");
        });
    });
  $(document.body).on('appear', '.magic2', function() {
        jQuery(this).each(function() {
            jQuery(this).addClass("rollIn");
        });
    });
  $(document.body).on('appear', '.magic3', function() {
        jQuery(this).each(function() {
            jQuery(this).addClass("fadeInLeft");
        });
    });
  $(document.body).on('appear', '.magic4', function() {
        jQuery(this).each(function() {
            jQuery(this).addClass("fadeInRight");
        });
    });
});