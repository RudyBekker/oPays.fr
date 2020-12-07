"use strict";

jQuery(document).ready(function () {
    jQuery(".vincent_menu > li").hover(
        function () {
            jQuery(this).addClass('vincent_menu_active');
        }, function () {
            jQuery(this).removeClass('vincent_menu_active');
        }
    );

    jQuery(".widget ul li a").hover(
        function () {
            jQuery(this).parent().addClass('vincent_link_hover');
        }, function () {
            jQuery(this).parent().removeClass('vincent_link_hover');
        }
    );

    jQuery(".widget_search input[type=text]").focus(
        function () {
            if (jQuery(this).attr('data-placeholder') == jQuery(this).val()) {
                jQuery(this).val('');
            }
        }
    );

    jQuery(".widget_search input").blur(
        function () {
            if (jQuery(this).val() == '') {
                jQuery(this).val(jQuery(this).attr('data-placeholder'));
            }
        }
    );

    if (jQuery('.vincent_js_bg_color').size() > 0) {
        jQuery('.vincent_js_bg_color').each(function () {
            jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
        });
    }

    if (jQuery('.vincent_js_bg_image').size() > 0) {
        jQuery('.vincent_js_bg_image').each(function () {
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
        });
    }

    if (jQuery('.vincent_js_color').size() > 0) {
        jQuery('.vincent_js_color').each(function () {
            jQuery(this).css('color', jQuery(this).attr('data-color'));
        });
    }

    if (jQuery('.vincent_js_font_size').size() > 0) {
        jQuery('.vincent_js_font_size').each(function(){
            var font_size = jQuery(this).attr('data-font-size');

            jQuery(this).css({'font-size': font_size, 'line-height': font_size});
        });
    }

    if (jQuery('.vincent_js_height').size() > 0) {
        jQuery('.vincent_js_height').each(function(){
            var block_height = jQuery(this).attr('data-height');

            jQuery(this).height(block_height);
        });
    }

    var header = jQuery('header');

    if (jQuery(header).is('.header_type_1')) {
        jQuery(".vincent_hleft, .vincent_hright").css('height', jQuery("header > div").height() + 'px');
    }

    if (jQuery(header).is('.header_type_2') || jQuery(header).is('.header_type_3')) {
        var menu_cont = jQuery('.vincent_menu_inner'),
            cont_height = jQuery('.vincent_logo_cont').parent().height(),
            white_space = cont_height - menu_cont.height();

        jQuery(menu_cont).css('padding-top', (white_space / 2) + 22);
    }

    if (jQuery('.vincent_testimonials_slider').size() > 0) {
        jQuery(".vincent_testimonials_slider").each(function () {
            var autoplay = jQuery(this).attr('data-autoplay'),
                speed = parseInt(jQuery(this).attr('data-speed'));
            jQuery(this).on("initialized.owl.carousel", function (e) {
                jQuery(this).css("opacity", "1");
            });
            jQuery(this).owlCarousel(
                {
                    items: 1,
                    autoHeight: true,
                    center: true,
                    lazyLoad: true,
                    loop: true,
                    autoplay: autoplay,
                    autoplayTimeout: speed,
                    autoplayHoverPause: true,
                    navigation: false
                }
            );
        });
    }

    // Team Social Buttons
    jQuery('.vincent_team_social_button').each(function(){
        var color = jQuery(this).attr('data-color'),
            hover = jQuery(this).attr('data-hover');

        jQuery(this).css('color', color);

        jQuery(this).on({
            mouseenter: function(){
                jQuery(this).css('color', hover);
            },
            mouseleave: function(){
                jQuery(this).css('color', color);
            }
        });
    });

    // Element Custom Button
    jQuery('.vincent_vc_custom_button.button_type_bordered').each(function(){
        var color = jQuery(this).attr('data-color'),
            hover = jQuery(this).attr('data-hover'),
            border_color = jQuery(this).attr('data-border'),
            border_hover = jQuery(this).attr('data-border-hover');

        jQuery(this).css({'color': color, 'border-color': border_color});

        jQuery(this).on({
            mouseenter: function(){
                jQuery(this).css({'color': hover, 'border-color': border_hover});
            },
            mouseleave: function(){
                jQuery(this).css({'color': color, 'border-color': border_color});
            }
        });
    });

    jQuery('.vincent_vc_custom_button.button_type_colored').each(function(){
        var color = jQuery(this).attr('data-color'),
            hover = jQuery(this).attr('data-hover'),
            bg_color = jQuery(this).attr('data-button-bg-color'),
            bg_hover = jQuery(this).attr('data-hover-bg-color');

        if (bg_color == 'transparent' || bg_color == '') {
            var bg_color_transparent = 'transparent';
            jQuery(this).css({'color': color, 'background': bg_color_transparent, 'border-color': color});
        } else {
            jQuery(this).css({'color': color, 'background': bg_color, 'border-color': bg_color});
        }


        jQuery(this).on({
            mouseenter: function(){
                if (bg_hover == 'transparent' || bg_hover == '') {
                    var bg_hover_transparent = 'transparent';
                    jQuery(this).css({'color': hover, 'background': bg_hover_transparent, 'border-color': bg_color});
                } else {
                    jQuery(this).css({'color': hover, 'background': bg_hover, 'border-color': bg_hover});
                }
            },
            mouseleave: function(){
                if (bg_color == 'transparent' || bg_color == '') {
                    jQuery(this).css({'color': color, 'background': bg_color_transparent, 'border-color': color});
                } else {
                    jQuery(this).css({'color': color, 'background': bg_color, 'border-color': bg_color});
                }
            }
        });
    });

    jQuery('.vincent_simple_post_read_more_button').each(function(){
        var color = jQuery(this).attr('data-color'),
            hover = jQuery(this).attr('data-hover'),
            bg_color = jQuery(this).attr('data-bg-color'),
            bg_hover = jQuery(this).attr('data-bg-hover'),
            border_color = jQuery(this).attr('data-border-color'),
            border_hover = jQuery(this).attr('data-border_hover');

        jQuery(this).css({'color': color, 'background': bg_color, 'border-color': border_color});

        jQuery(this).on({
            mouseenter: function() {
                jQuery(this).css({'color': hover, 'background': bg_hover, 'border-color': border_hover});
            },
            mouseleave: function() {
                jQuery(this).css({'color': color, 'background': bg_color, 'border-color': border_color});
            }
        });
    });

    // Element Info Box
    jQuery('.vincent_vc_infobox').each(function(){
        jQuery(this).height(jQuery(this).attr('data-height'));
    });

    // Error 404 Page
    vincent_404_page_centered();
    
    // Back to Top
    var vincent_scrollTrigger = 600, // px
        vincent_backToTop = function () {
            var vincent_scrollTop = jQuery(window).scrollTop();
            if (vincent_scrollTop > vincent_scrollTrigger) {
                jQuery('.vincent_back_to_top').addClass('show');
            } else {
                jQuery('.vincent_back_to_top').removeClass('show');
            }
        };
    vincent_backToTop();
    jQuery(window).on('scroll', function () {
        vincent_backToTop();
    });
    jQuery('.vincent_back_to_top').on('click', function (e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 200);
    });

    if (jQuery('.vincent_ajax_prod_list').size() > 0) {
        jQuery('.vincent_ajax_prod_list').each(function(){
            vincent_product_listing_ajax_loading(jQuery(this));
        });

        jQuery(document).on('click', '.vincent_ajax_prod_list', function(){
            jQuery(this).parents('.pm_vc_product_listing ').find('.vincent_prod_output_container').html('');
            vincent_product_listing_ajax_loading(jQuery(this));
            jQuery(this).parent().find('.active').removeClass('active');
            jQuery(this).addClass('active');
        });
    } else {
        jQuery('.vincent_prod_cat_item').eq(0).addClass('vincent_ajax_prod_list active');
	
	    jQuery('.vincent_ajax_prod_list').each(function(){
		    vincent_product_listing_ajax_loading(jQuery(this));
	    });
	
	    jQuery(document).on('click', '.vincent_ajax_prod_list', function(){
		    jQuery(this).parents('.pm_vc_product_listing ').find('.vincent_prod_output_container').html('');
		    vincent_product_listing_ajax_loading(jQuery(this));
		    jQuery(this).parent().find('.active').removeClass('active');
		    jQuery(this).addClass('active');
	    });
    }

    if (jQuery('.vincent_ajax_query_posts').size() > 0) {
        jQuery('.vincent_ajax_query_posts').each(function () {
            vincent_ajax_query_posts(jQuery(this), true);
        });

        jQuery(document).on("click", ".vincent_ajax_query_posts", function () {
            vincent_ajax_query_posts(jQuery(this), false);
        });
    }

    // If Shop Links Removed in Customizer
    if (jQuery('body').is('.vincent_shop_links_removed')) {
        jQuery('.woocommerce-loop-product__link').attr('href', 'javascript:void(0)');
    }
});

jQuery(window).load(function(){
    // Iframes in Blog Listings
    var vincent_iframe = jQuery('.vincent_element_blog .grid_post iframe'),
        vincent_iframe_width = jQuery(vincent_iframe).width();

    jQuery(vincent_iframe).height(vincent_iframe_width);

    vincent_image_cover();
    setTimeout(vincent_image_cover, 500);

    vincent_contacts_element();
    vincent_custom_products_element();

    // Element Countdown
    jQuery('.vincent_element_countdown').each(function(){
        var digits_color = jQuery(this).attr('data-dig-color'),
            labels_color = jQuery(this).attr('data-lab-color'),
            bg_color = jQuery(this).attr('data-bg-color');

        jQuery(this).find('.item').css({'color': digits_color, 'background': bg_color});
        jQuery(this).find('.label').css('color', labels_color);

    });
});

jQuery(window).resize(function(){
    var window_width = jQuery(window).width();

    vincent_image_cover();
    setTimeout(vincent_image_cover, 100);
    setTimeout(vincent_image_cover, 200);
    setTimeout(vincent_image_cover, 300);
    setTimeout(vincent_image_cover, 400);
    setTimeout(vincent_image_cover, 500);

    vincent_contacts_element();
    setTimeout(vincent_contacts_element, 100);
    setTimeout(vincent_contacts_element, 200);
    setTimeout(vincent_contacts_element, 300);
    setTimeout(vincent_contacts_element, 400);
    setTimeout(vincent_contacts_element, 500);

    vincent_custom_products_element();
    setTimeout(vincent_custom_products_element, 100);
    setTimeout(vincent_custom_products_element, 200);
    setTimeout(vincent_custom_products_element, 300);
    setTimeout(vincent_custom_products_element, 400);
    setTimeout(vincent_custom_products_element, 500);

    vincent_404_page_centered();

    if (window_width > 737) {
        jQuery('.vincent_menu_mobile').css('display', 'none');
        jQuery('.vincent_menu_mobile_trigger').removeClass('active');
    }
});

jQuery('a[href="#"]').on('click', function(event){
    event.preventDefault();
});

jQuery('.vincent_menu_mobile_trigger').on('click', function(){
    jQuery(this).toggleClass('active');
    jQuery('.vincent_menu_mobile').slideToggle(300);
});

jQuery('.vincent_menu_mobile .menu-item-has-children a').on('click', function(){
    jQuery(this).toggleClass('opened').next().slideToggle(300);
});

function vincent_image_cover(){
    jQuery('.vincent_vc_image_cover').each(function(){
        var element_counter = jQuery(this).parents('.vc_row').find('.vincent_vc_image_cover').length,
            parent_container_height;

        if (element_counter > 1) {
            jQuery(this).parents('.vc_row').find('.vincent_vc_image_cover').height('0');
            parent_container_height = jQuery(this).parents('.vc_row').height();
            jQuery(this).parents('.vc_row').find('.vincent_vc_image_cover').height(parent_container_height);
        } else {
            jQuery(this).height('0');
            parent_container_height = jQuery(this).parents('.vc_row').height();
            jQuery(this).height(parent_container_height);
        }
    });
}

function vincent_contacts_element(){
    jQuery('.vincent_vc_contacts').each(function(){
        var map_width = jQuery(this).find('.vincent_contact_map').width(),
            row_height = jQuery(this).height(),
            map_height = row_height + 40;

        jQuery(this).parents('.vc_row').css('overflow', 'visible');
        jQuery(this).find('.vincent_contact_map .wrapper').width(map_width).height(map_height);
    });
}

function vincent_custom_products_element() {
    jQuery('.vincent_vc_custom_products').each(function(){
        var row_height = jQuery(this).height(),
            image_height = row_height + 40,
            bg_color = jQuery(this).attr('data-bgcolor');

        jQuery(this).parents('.vc_row').css('overflow', 'visible');
        jQuery(this).find('.vincent_custom_prod_image').height(image_height);
    });
}

function vincent_ajax_query_posts(vincent_ajax_query_posts_this, vincent_ajax_query_posts_first_load) {
    var vincent_return_to = vincent_ajax_query_posts_this.attr('data-return-to');
    jQuery('.'+vincent_return_to).addClass('vincent_ajax_query_posts_active_preloader');
    var vincent_ajax_query_posts_data_args = vincent_ajax_query_posts_this.data('args');
    vincent_ajax_query_posts_this.removeClass('vincent_ajax_query_posts').addClass('vincent_ajax_query_posts_disabled');
    if (vincent_ajax_query_posts_first_load == true) {
        var vincent_ajax_query_posts_per_page = parseInt(vincent_ajax_query_posts_data_args['posts_first_load']);
        var vincent_ajax_query_posts_per_page_old = vincent_ajax_query_posts_data_args['posts_per_page'];
        vincent_ajax_query_posts_data_args['posts_per_page'] = vincent_ajax_query_posts_per_page;
    } else {
        var vincent_ajax_query_posts_per_page = parseInt(vincent_ajax_query_posts_data_args['posts_per_page']);
    }

    jQuery.post(vincent_ajaxurl, {
        action: 'vincent_ajax_query_posts',
        vincent_ajax_query_posts: '' + JSON.stringify(vincent_ajax_query_posts_data_args) + ''
    }).done(function (data) {
        jQuery('.' + vincent_return_to).append(data);
        if (vincent_ajax_query_posts_first_load == true) {
            vincent_ajax_query_posts_data_args['posts_per_page'] = vincent_ajax_query_posts_per_page_old;
        }
        vincent_ajax_query_posts_data_args['offset'] = parseInt(vincent_ajax_query_posts_data_args['offset']) + vincent_ajax_query_posts_per_page;
        vincent_ajax_query_posts_this.attr('data-args', JSON.stringify(vincent_ajax_query_posts_data_args));
        vincent_ajax_query_posts_this.addClass('vincent_ajax_query_posts').removeClass('vincent_ajax_query_posts_disabled');
        if (vincent_ajax_query_posts_data_args['ajax_callback_function']) {
            window[vincent_ajax_query_posts_data_args['ajax_callback_function']]();
        }
        if (data.length < 1) {
            vincent_ajax_query_posts_this.fadeOut();
        }
        jQuery('.'+vincent_return_to).removeClass('vincent_ajax_query_posts_active_preloader');
    });
}


function vincent_product_listing_ajax_loading(vincent_ajax_query_posts_this) {
    var vincent_return_to = vincent_ajax_query_posts_this.attr('data-return-to');

    jQuery(vincent_return_to).html('');
    jQuery('.'+vincent_return_to).addClass('vincent_ajax_query_posts_active_preloader');

    var vincent_ajax_query_posts_data_args = vincent_ajax_query_posts_this.data('args');

    jQuery.post(vincent_ajaxurl, {
        action: 'vincent_ajax_product_listing',
        vincent_ajax_query_posts: '' + JSON.stringify(vincent_ajax_query_posts_data_args) + ''
    }).done(function(data){
        jQuery('.' + vincent_return_to).html(data).removeClass('vincent_ajax_query_posts_active_preloader');

        var prod_cat_button = jQuery('.vincent_prod_cat_listing').find('.vincent_prod_cat_item');

        jQuery(prod_cat_button).addClass('vincent_ajax_prod_list');
	
	    // Swipebox Trigger
	    if (jQuery('a.swipebox').length) {
		    jQuery('.swipebox').swipebox({
			    selector: '.swipebox'
		    });
	    }
    });
}

function vincent_404_page_centered(){
    var container_404_height = jQuery(window).height() - jQuery('header').height() - jQuery('#wpadminbar').height(),
        inner_container_404_height = jQuery('.vincent_404_content_inner').height();

    if (inner_container_404_height < container_404_height) {
        var white_space = container_404_height - inner_container_404_height;

        jQuery('.vincent_404_content_wrapper').css({'padding-top': white_space / 2, 'padding-bottom': white_space / 2});
    }
}
