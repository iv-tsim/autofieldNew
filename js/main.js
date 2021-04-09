$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

    $(document).on('click', '.model-specs__item-top', function(){

        let siblings_this = $(this).siblings('.model-specs__item-body'); 
        let this_custom   = $(this); 

        if (this_custom.hasClass('active')) {

          siblings_this.stop().slideUp();
          this_custom.removeClass('active');

        } else {

          siblings_this.stop().slideDown();
          this_custom.addClass('active');

        }
    });

});

document.addEventListener('DOMContentLoaded', () => {

    const addZero = number => {

        if (number < 10) {

            return '0' + number;

        } else {

            return number;

        }

    }

    const hide = array => {

        array.forEach(item => {

            item.forEach(item => {

                item.classList.remove('active');

            })

        });
        
    }

    const show = (index, array) => {

        if (!array[0][index].classList.contains('active')) {

            hide(array);

            array.forEach(item => {

                item[index].classList.add('active');

            });

        }

    }

    let heroSlider = new Swiper('.hero', {

        speed: 600,
        spaceBetween: '-41%',
        slidesPerView: 1,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        loop: true

    });

    let promotionSlider = new Swiper('.promotion-slider', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            prevEl: '.slider-arrow.slider-arrow_prev.promotion-arrow',
            nextEl: '.slider-arrow.slider-arrow_next.promotion-arrow'
        },
        pagination: {
            el: '.promotion-count',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                        '<div class="slider-count__dec">/</div>' +
                        '<div class="slider-count__total">' + addZero(total) + '</div>';
            }
        }

    });

    let newsSlider = new Swiper('.newsSlider-slider', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            prevEl: '.slider-arrow.slider-arrow_prev.newsSlider-arrow',
            nextEl: '.slider-arrow.slider-arrow_next.newsSlider-arrow'
        },
        pagination: {
            el: '.newsSlider-count',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                        '<div class="slider-count__dec">/</div>' +
                        '<div class="slider-count__total">' + addZero(total) + '</div>';
            }
        }

    });

    let modelColorThumbs = new Swiper('.model-color__thumbs', {

        speed: 600,
        direction: 'vertical',
        spaceBetween: 20,
        slidesPerView: 9,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper'

    });

    let modelColorSlider = new Swiper('.model-color__slider', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            prevEl: '.slider-arrow.slider-arrow_prev.model-color__arrow',
            nextEl: '.slider-arrow.slider-arrow_next.model-color__arrow'
        },
        thumbs: {

          swiper: modelColorThumbs

        }

    });

    let modelFeaturesImg = new Swiper('.model-features__img', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        on: {
            slideChange() {

                let index = this.realIndex

                if (!sliderFlag) {

                    setTimeout(function() {modelFeaturesText.slideTo(index)}, 200);
                    
                    sliderFlag = 1;

                }


            },
            slideChangeTransitionEnd() {

                sliderFlag = 0;

            }
        }

    });

    let sliderFlag = 0;

    let modelFeaturesText = new Swiper('.model-features__text', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            prevEl: '.slider-arrow.slider-arrow_prev.model-features__arrow',
            nextEl: '.slider-arrow.slider-arrow_next.model-features__arrow'
        },
        pagination: {
            el: '.model-features__text-count',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                        '<div class="slider-count__dec">/</div>' +
                        '<div class="slider-count__total">' + addZero(total) + '</div>';
            }
        },
        on: {
            slideChange() {

                let index = this.realIndex

                if (!sliderFlag) {

                    setTimeout(function() {modelFeaturesImg.slideTo(index)}, 200);
                    
                    sliderFlag = 1;

                }


            },
            slideChangeTransitionEnd() {

                sliderFlag = 0;

            }
        }

    });

    let modelGalleryThumbs0 = new Swiper('.model-gallery__thumbs0', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 6,
        slidesPerGroup: 2,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper'

    });

    let modelGallery0 = new Swiper('.model-gallery0', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            prevEl: '.slider-arrow.slider-arrow_prev.model-gallery__arrow0',
            nextEl: '.slider-arrow.slider-arrow_next.model-gallery__arrow0'
        },
        thumbs: {

          swiper: modelGalleryThumbs0

        }

    });

    let modelGalleryThumbs1 = new Swiper('.model-gallery__thumbs1', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 6,
        slidesPerGroup: 2,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper'

    });

    let modelGallery1 = new Swiper('.model-gallery1', {

        speed: 600,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            prevEl: '.slider-arrow.slider-arrow_prev.model-gallery__arrow1',
            nextEl: '.slider-arrow.slider-arrow_next.model-gallery__arrow1'
        },
        thumbs: {

          swiper: modelGalleryThumbs1

        }

    });

    const tabsOffer = document.querySelectorAll('.offer-tabs__item');
    const tabsBodiesOffer = document.querySelectorAll('.offer-body');

    const tabsParts = document.querySelectorAll('.model-parts__tabs-item');
    const tabsBodiesParts = document.querySelectorAll('.model-parts__body');

    const tabsParts0 = document.querySelectorAll('.model-parts__circle0');
    const tabsBodiesParts0 = document.querySelectorAll('.model-parts__info0');
    
    const tabsParts1 = document.querySelectorAll('.model-parts__circle1');
    const tabsBodiesParts1 = document.querySelectorAll('.model-parts__info1');

    const modelTabs = document.querySelectorAll('.model-tabs__item');
    const modelTabsBodies = document.querySelectorAll('.model-tabs__body');

    document.addEventListener('click', function(event) {

        const { target } = event;

        if (target.closest('.offer-tabs__item')) {

            tabsOffer.forEach(function(item, index) {

                if (target.closest('.offer-tabs__item') === tabsOffer[index]) {

                    show(index, [tabsOffer, tabsBodiesOffer]);
                    return;

                }

            });

        }

        if (target.closest('.model-parts__circle0')) {

            tabsParts0.forEach(function(item, index) {

                if (target.closest('.model-parts__circle0') === tabsParts0[index]) {

                    show(index, [tabsParts0, tabsBodiesParts0]);
                    return;

                }

            });

        }

        if (target.closest('.model-parts__circle1')) {

            tabsParts1.forEach(function(item, index) {

                if (target.closest('.model-parts__circle1') === tabsParts1[index]) {

                    show(index, [tabsParts1, tabsBodiesParts1]);
                    return;

                }

            });

        }

        if (target.closest('.model-parts__tabs-item')) {

            tabsParts.forEach(function(item, index) {

                if (target.closest('.model-parts__tabs-item') === tabsParts[index]) {

                    show(index, [tabsParts, tabsBodiesParts]);
                    return;

                }

            });

        }

        if (target.closest('.model-tabs__item')) {

            modelTabs.forEach(function(item, index) {

                if (target.closest('.model-tabs__item') === modelTabs[index]) {

                    show(index, [modelTabs, modelTabsBodies]);
                    return;

                }

            });

        }

    });

});