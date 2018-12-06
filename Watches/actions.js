$(document).ready(function(){
    $('#phonepover').popover({
        html : true,
        trigger: "click",
        placement: "bottom",
        content: function() {
        var content = $(this).attr("data-popover-content");
        return $(content).children(".popover-body").html();
        }
    });
    $('#filter-mob-popover').popover({
        html : true,
        trigger: "click",
        placement: "bottom",
        content: function() {
        var content = $(this).attr("data-popover-content");
        return $(content).children(".filter-body").html();
        }
    });
    // Чтобы не исчезало выпадающее меню по клику
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() >= (200)) {
            $('.navbar').addClass('fix');
            $('#nav-row').addClass('after-scroll-pos');
        }
        else {
            $(".navbar").removeClass("fix");
            $('#nav-row').removeClass('after-scroll-pos');
        }
    });
    $('.menu-adaptive').click(function(){
        if($('.menu').hasClass('hidden')){
            $('.menu').removeClass('hidden');
            $('.menu').addClass('shown');
            $('.menu-adaptive').addClass('opened');
            $('.menu').addClass('animate');
        }
        else{
            $('.menu').removeClass('shown');
            $('.menu').addClass('hidden');
            $('.menu-adaptive').removeClass('opened');
        }
    })
});

$('#jap-watch-table td').hover(
    function(){ $('.fast-view', this).css('display', 'inline');
                $('.watch-cell', this).css('height', '350px');
                $('.watch-cell', this).css('z-index', '99');
                $('.del-item-block ', this).css('display', 'inline');
                $('.in-cart-btn-admin a', this).css('animation-name', 'showEditAdminButton');
                $('.in-cart-btn a', this).css('animation-name', 'showEditAdminButton'); },
    function(){ $('.fast-view', this).css('display', 'none');
                $('.watch-cell', this).css('height', '300px');
                $('.watch-cell', this).css('z-index', '1');
                $('.del-item-block ', this).css('display', 'none');
                $('.in-cart-btn-admin a', this).css('animation-name', 'none');
                $('.in-cart-btn a', this).css('animation-name', 'none');
});
$('#jap-watch-table-mob td').hover(
    function(){ $('.fast-view', this).css('display', 'inline');
                $('.watch-cell', this).css('height', '360px');
                $('.watch-cell', this).css('z-index', '99'); },
    function(){ $('.fast-view', this).css('display', 'none');
                $('.watch-cell', this).css('height', '300px');
                $('.watch-cell', this).css('z-index', '1');
});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true
    });
});

$('#plus_cart_counter').click(function(){
    var counter = $('#cart_counter').val();
    counter++;
    $('#cart_counter').val(counter);
    var priceEls = document.getElementById('cart-watch-price-1');
    var price = priceEls.innerText;
    price = price.substring(0, price.indexOf('р'));
    var priceTotal = document.getElementById('cart-watch-total-sum-1');
    priceTotal.innerText = counter*price +" руб.";
    var total_sum = document.getElementById('total-sum');
    total_sum.innerText = "Итого: "+ (counter*price+2100) +" руб.";
})

$('#minus_cart_counter').click(function(){
    var counter = $('#cart_counter').val();
    if(counter > 1)
        counter--;
    $('#cart_counter').val(counter);
    var priceEls = document.getElementById('cart-watch-price-1');
    var price = priceEls.innerText;
    price = price.substring(0, price.indexOf('р'));
    var priceTotal = document.getElementById('cart-watch-total-sum-1');
    priceTotal.innerText = counter*price +" руб.";
    var total_sum = document.getElementById('total-sum');
    total_sum.innerText = "Итого: "+ (counter*price+2100) +" руб.";
})

$('#login-button').click(function(){
    var login = $('#reg-login-input').val();
    var password = $('#reg-pass-input').val();

    if(login == "admin" && password == 'admin'){
        window.open("./Admin/index_admin.html");
    }
})