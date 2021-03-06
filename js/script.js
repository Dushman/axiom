$(pageInit);

function pageInit(){

	$('.top-logo').click(function(){window.location.reload()});

    var $page = $('html,body'),
        $body = $('body');

    $body.scrollspy();

    function scrollToPage(target) {
        var y = 0;
        if (target && $(target).length) {
            y = $(target).offset().top - 100;
        }
        $page.animate({scrollTop: y}, 'slow', 'swing');
    }

    $body.on('click', '.top-menu a', function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
     
    $body.on('click', '.top-menu a', function(e){
        e.preventDefault();
        scrollToPage($(this).attr('href'));
    });

    $(window).scroll(function () { 
        if ($(this).scrollTop() > 350) {$('.top-menu').addClass('fixed');}
        else {$('.top-menu').removeClass('fixed');}   
    });

    var $top = $(document).scrollTop();

    if ($top > 350) {$('.top-menu').addClass('fixed');}
    else {$('.top-menu').removeClass('fixed');} 

    $('#wrapper .section').scrollSpy();

	$('#wrapper .section').on('scrollSpy:enter', function(){
		$(this).addClass('current');
	});

	$('#wrapper .section').on('scrollSpy:exit', function(){
		$(this).removeClass('current');
	});

    $body.on('click', '.popup-btn', function(e){
        e.preventDefault();
        $('#popup-form').removeClass().addClass('visible');
    });

    $body.on('click', '.close-popup-btn', function(e){
        e.preventDefault();
        $(this).parents('#popup-form').addClass('not-visible');
    });

    $body.on('click', '.products-row-block .list-of-products-wrap .item', function(){
        var $index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        var $topBlock = $(this).parents('.products-row-block').find('.products-description-wrap').offset();
        $(this).parents('.products-row-block').find('.products-description-wrap .item').eq($index).fadeIn('slow').siblings().hide();
        $page.animate({scrollTop: $topBlock.top - 340}, 'slow', 'swing');
    });

    $body.on('click', '.products-description-wrap .item .close', function(e){
        e.preventDefault();
        $(this).parent('.item').fadeOut('slow');
        $('.list-of-products-wrap .item').removeClass('selected');
    });

    //Form---------------------------------------------------

    $('#order-name').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#order-phone').on('input', function() {
        var input = $(this);
        var re = /^[0-9\-\+]{8,15}$/;
        var is_phone = re.test(input.val());
        if (is_phone) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#order-email').on('input', function() {
        var input = $(this);
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var is_email = re.test(input.val());
        if (is_email) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });
            
    $('#order-message').keyup(function(event) {
        var input = $(this);
        var message = $(this).val();
        if (message) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}   
    });
        
    $('.send-mf-btn').click(function(e){
        var form_data = $('.main-form').serializeArray();
        var error_free = true;
        for (var input in form_data){
            var element = $('#order-' + form_data[input]['name']);
            var valid = element.hasClass('valid');
            if (!valid){element.addClass('error'); error_free = false;}
            else {element.removeClass('error');}
        }
        if (!error_free){
            e.preventDefault(); 
        } else{
            e.preventDefault(); 
            //$('.order-block').hide();
            //$('.success-block').fadeIn('slow');
        }
    });
    
    $('#popup-name').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#popup-type').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#popup-phone').on('input', function() {
        var input = $(this);
        var re = /^[0-9\-\+]{8,15}$/;
        var is_phone = re.test(input.val());
        if (is_phone) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#popup-email').on('input', function() {
        var input = $(this);
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var is_email = re.test(input.val());
        if (is_email) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });
            
    $('#popup-message').keyup(function(event) {
        var input = $(this);
        var message = $(this).val();
        if (message) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}   
    });
        
    $('.send-pf-btn').click(function(e){
        var form_data = $('.popup-form').serializeArray();
        var error_free = true;
        for (var input in form_data){
            var element = $('#popup-' + form_data[input]['name']);
            var valid = element.hasClass('valid');
            if (!valid){element.addClass('error'); error_free = false;}
            else {element.removeClass('error');}
        }
        if (!error_free){
            e.preventDefault(); 
            $('.error-block').fadeIn('slow');
        } else{
            e.preventDefault(); 
            $('.success-block').fadeIn('slow');
        }
    });

    $('.form-item select').on('change', function(){
        var text = $(this).find('option:selected').text();
        $(this).parent().find('.fake-select span').text(text).addClass('black');
        $(this).parent().find('.fake-select').addClass('valid');
    });	

    $('#pdf-name').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#pdf-email').on('input', function() {
        var input = $(this);
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var is_email = re.test(input.val());
        if (is_email) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });
        
    $('.pdf-link').click(function(e){
        var form_data = $('.form-pdf-wrap form').serializeArray();
        var error_free = true;
        for (var input in form_data){
            var element = $('#pdf-' + form_data[input]['name']);
            var valid = element.hasClass('valid');
            if (!valid){element.addClass('error'); error_free = false;}
            else {element.removeClass('error');}
        }
        if (!error_free){
            e.preventDefault(); 
        } else{
            e.preventDefault(); 
        }
    });	
}