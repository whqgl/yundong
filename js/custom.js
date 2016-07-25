$(document).ready(function() {
    
    $('a.thumb').fancybox({
        overlayColor: '#000',
        overlayOpacity: '0.8'
    });
    
    /* aviaSlider */
    $('#slider').aviaSlider({
	   transition: 'fade'
    });  
    
    /* input focus */  
    $('input[type="text"]').focus(function() {  
        if (this.value == this.defaultValue){ this.value = ''; }  
    });
    
});