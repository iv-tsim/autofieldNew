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

    const slideDown = elem => elem.style.height = `${elem.scrollHeight}px`;
    const slideUp = elem => elem.style.height = 0;

    const removeActiveInCurrent = item => {

        item.querySelectorAll('.choose-item').forEach(item => {

            item.classList.remove('active');

        });

    }

    const choose = document.querySelectorAll('.choose');

    const closeAllChooseItems = () => {

        choose.forEach(item => {

            item.classList.remove('active');

            slideUp(item.querySelector('.choose-body'));

        });

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
        },
        breakpoints: {

            900: {

                slidesPerView: 3

            },
            650: {

                slidesPerView: 2

            },
            0: {

                slidesPerView: 1

            },

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
        },
        breakpoints: {

            900: {

                slidesPerView: 3

            },
            650: {

                slidesPerView: 2

            },
            0: {

                slidesPerView: 1

            },

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
        touchEventsTarget: 'wrapper',
        breakpoints: {

            1100: {

                spaceBetween: 20

            },
            900: {

                spaceBetween: 12

            },
            700: {

                direction: 'horizontal',
                spaceBetween: 20,
                slidesPerView: 4

            },
            600: {

                direction: 'horizontal',
                slidesPerView: 3

            },
            370: {

                direction: 'horizontal',
                slidesPerView: 2

            },
            0: {

                direction: 'horizontal',
                slidesPerView: 1

            },

        }

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
        touchEventsTarget: 'wrapper',
        breakpoints: {

            1000: {

                spaceBetween: 30,
                slidesPerView: 6,

            },
            800: {

                spaceBetween: 20,
                slidesPerView: 5,

            },
            600: {

                spaceBetween: 20,
                slidesPerView: 4,

            },
            500: {

                spaceBetween: 20,
                slidesPerView: 3,

            },
            0: {

                spaceBetween: 20,
                slidesPerView: 2,

            }

        }

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
        touchEventsTarget: 'wrapper',
        breakpoints: {

            1000: {

                spaceBetween: 30,
                slidesPerView: 6,

            },
            800: {

                spaceBetween: 20,
                slidesPerView: 5,

            },
            600: {

                spaceBetween: 20,
                slidesPerView: 4,

            },
            500: {

                spaceBetween: 20,
                slidesPerView: 3,

            },
            0: {

                spaceBetween: 20,
                slidesPerView: 2,

            }

        }

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

    const menu = document.querySelector('.menu');

    document.addEventListener('click', event => {

        const { target } = event;

        if (target.closest('.choose-top') && !target.closest('.choose').classList.contains('inactive')) {

            let item = target.closest('.choose'),
                itemBody = item.querySelector('.choose-body');

            if (item.classList.contains('active')) {
                
                item.classList.remove('active');
                slideUp(itemBody);
                

            } else {

                closeAllChooseItems();

                item.classList.add('active');
                slideDown(itemBody);
                
            }

        }

        if (choose && !target.closest('.choose')) {

            closeAllChooseItems();

        }

        if (target.matches('.choose-item')) {

            let wrapper = target.closest('.choose');

            removeActiveInCurrent(wrapper);

            wrapper.classList.toggle('active');

            target.classList.add('active');

            wrapper.querySelector('.choose-top__text').textContent = target.textContent;

            slideUp(wrapper.querySelector('.choose-body'));

        }

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

        if (!target.closest('.menu.active') || target.matches('.menu-close')) {

            event.preventDefault();
            menu.classList.remove('active');

        }

        if (target.closest('.header-burger')) {

            menu.classList.add('active');

        }

    });

    document.addEventListener('input', event => {

        const { target } = event;

        if (target.matches('.calc-item__range')) {

            document.querySelector('.calc-item__range-value input').value = target.value;

        }

        if (target.matches('.calc-item__range-value input')) {

            if (target.value < 0) {

                target.value = 0;

            }

            document.querySelector('.calc-item__range').value = target.value;

        }

    });

});