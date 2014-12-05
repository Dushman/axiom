$(pageInit);

function pageInit(){

	$('.top-logo').click(function(){window.location.reload()});

    var $page = $('html,body'),
        $body = $('body');

    $body.bsScrollSpy;

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

    $('#wrapper .section').scrollSpy();

	$('#wrapper .section').on('scrollSpy:enter', function(){
		$(this).addClass('current');
	});

	$('#wrapper .section').on('scrollSpy:exit', function(){
		$(this).removeClass('current');
	});

    //Form---------------------------------------------------

    $('#name').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#type').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#phone').on('input', function() {
        var input = $(this);
        var re = /^[0-9\-\+]{8,15}$/;
        var is_phone = re.test(input.val());
        if (is_phone) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });

    $('#email').on('input', function() {
        var input = $(this);
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var is_email = re.test(input.val());
        if (is_email) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}
    });
            
    $('#message').keyup(function(event) {
        var input = $(this);
        var message = $(this).val();
        if (message) {input.removeClass('error').addClass('valid');}
        else {input.removeClass('valid').addClass('error');}   
    });
        
    $('.send-order-btn').click(function(e){
        var form_data = $('.order-form').serializeArray();
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
            $('.order-block').hide();
            $('.success-block').fadeIn('slow');
        }
    });



    

		
}