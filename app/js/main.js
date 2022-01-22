$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu').toggleClass('menu--active')
  });

    $('.product-info__input').styler();

    $('.product-slider__thumb').slick({
        asNavFor: '.product-slider__big',
        slidesToShow: 3, 
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        draggable: false,
    });
    $('.product-slider__big').slick({
        asNavFor: '.product-slider__thumb',
        slidesToShow: 1,
        arrows: false,
        fade: true,
        slidesToScroll: 1,
        draggable: false,
    });

  $('.contacts__btn').on('click', function(){
    $('.contacts__btn').removeClass('contacts__btn--active');
    $(this).addClass('contacts__btn--active');
  });
  

    $(".rating-star").rateYo({
        starWidth: "11px",
        readOnly: true,
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="11px" viewBox="0 0 11 11" version="1.1"><g><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 4.953125 0.382812 L 3.703125 3.226562 L 0.914062 3.683594 C 0.414062 3.765625 0.214844 4.460938 0.578125 4.859375 L 2.59375 7.070312 L 2.117188 10.195312 C 2.03125 10.761719 2.5625 11.183594 3.003906 10.921875 L 5.5 9.445312 L 7.996094 10.921875 C 8.4375 11.183594 8.96875 10.761719 8.882812 10.195312 L 8.40625 7.070312 L 10.421875 4.859375 C 10.785156 4.460938 10.585938 3.765625 10.085938 3.683594 L 7.296875 3.226562 L 6.046875 0.382812 C 5.824219 -0.125 5.175781 -0.132812 4.953125 0.382812 Z M 4.953125 0.382812 " /></g></svg>'
    });

    $(".shop__list-rating").rateYo({
        starWidth: "18px",
        readOnly: true,
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="11px" viewBox="0 0 11 11" version="1.1"><g><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 4.953125 0.382812 L 3.703125 3.226562 L 0.914062 3.683594 C 0.414062 3.765625 0.214844 4.460938 0.578125 4.859375 L 2.59375 7.070312 L 2.117188 10.195312 C 2.03125 10.761719 2.5625 11.183594 3.003906 10.921875 L 5.5 9.445312 L 7.996094 10.921875 C 8.4375 11.183594 8.96875 10.761719 8.882812 10.195312 L 8.40625 7.070312 L 10.421875 4.859375 C 10.785156 4.460938 10.585938 3.765625 10.085938 3.683594 L 7.296875 3.226562 L 6.046875 0.382812 C 5.824219 -0.125 5.175781 -0.132812 4.953125 0.382812 Z M 4.953125 0.382812 " /></g></svg>'

    });

    $(".filter-price__slider").ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data){
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.filter-category__label').on('click', function(){
        $('.filter-category__label').removeClass('filter-category__label--active');
        $(this).addClass('filter-category__label--active');
    });
    
    

    var mixer = mixitup('.product__items');
    var mixer = mixitup('.design__galery-items');

    $('.slider-top__inner').slick({
        dots: true,
        arrows: false,
        autoplay: 2000
    });

});