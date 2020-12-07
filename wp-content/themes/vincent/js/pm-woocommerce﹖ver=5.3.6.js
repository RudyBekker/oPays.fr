"use strict";

jQuery(document).ready(function(){
    /* WooCommerce Products Listing Page */
    var page_title = jQuery('.woocommerce-page h1.page-title').detach();

    jQuery('.vincent_shop_title_block').find('h1').html(page_title);
    jQuery('.woocommerce ul.products li.product').wrapInner('<div class="vincent_product_wrapper"></div>');

    /* Single Product Page */
    jQuery('.woocommerce #reviews #comments ol.commentlist li .comment-text').each(function(){
        var rating_block = jQuery(this).find('.star-rating').detach(),
            meta_block = jQuery(this).find('.meta').detach();

        jQuery(this).append(meta_block);
        jQuery(this).parent().append(rating_block);
    });
    
    jQuery('.single-product .woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image:gt(0)').addClass('vincent_product_thumb');
    
    jQuery('.vincent_product_thumb').each(function () {
	    var thumb_image_url = jQuery(this).attr('data-thumb'),
	        large_image_url = jQuery(this).find('img').attr('data-large_image'),
	        large_image_width = jQuery(this).find('img').attr('data-large_image_width'),
	        large_image_height = jQuery(this).find('img').attr('data-large_image_height');
	    
	    jQuery(this).find('a').html('<img src="' + thumb_image_url + '" alt="" data-large_image="' + large_image_url + '" data-large_image_width="' + large_image_width + '" data-large_image_height="' + large_image_height + '" />');
    });
    

    /* Sidebar Widgets */
    /* Search widget */
    jQuery('.vincent_sidebar .widget.widget_product_search input[type="submit"]').attr('value', "");

    /* Price Filter Widget */
    setInterval(function () {
        var price_filter_container = jQuery('.widget_price_filter .price_slider_wrapper'),
            limit_price_container = jQuery(price_filter_container).find('.price_label'),
            min_price = jQuery(limit_price_container).find('span.from').html(),
            max_price = jQuery(limit_price_container).find('span.to').html();
        
        if (/&nbsp;/.test(min_price) === true) {
        	min_price = min_price.replace(/&nbsp;/, ' ');
        }
        
        if (/&nbsp;/.test(max_price) === true) {
        	max_price = max_price.replace(/&nbsp;/, ' ');
        }
        
        jQuery(price_filter_container).find('.ui-slider-handle').first().attr('data-min', min_price);
        jQuery(price_filter_container).find('.ui-slider-handle').last().attr('data-max', max_price);
    }, 200);
    
    /* Search Widget */
    jQuery('.vincent_sidebar .widget.widget_product_search button').attr('value', '').html('');
});

jQuery(window).load(function () {
	// Custom Product Widget
	jQuery('.vc_column-inner .vincent_vc_custom_products .woocommerce ul.products li.product').each(function () {
		var product_item_width = jQuery(this).width(),
			product_title_width = jQuery(this).find('.woocommerce-loop-product__title').width(),
			product_price_width = jQuery(this).find('.price').width();
		
		jQuery(this).find('.woocommerce-LoopProduct-link').prepend('<div class="vincent_menu_dots"></div>');
		jQuery(this).find('.vincent_menu_dots').width(product_item_width - product_title_width - product_price_width + 3).css('left', product_title_width - 3);
	});
});

jQuery(window).resize(function () {
	// Custom Product Widget
	jQuery('.vc_column-inner .vincent_vc_custom_products .woocommerce ul.products li.product').each(function () {
		var product_item_width = jQuery(this).width(),
			product_title_width = jQuery(this).find('.woocommerce-loop-product__title').width(),
			product_price_width = jQuery(this).find('.price').width();
		
		jQuery(this).find('.woocommerce-LoopProduct-link').prepend('<div class="vincent_menu_dots"></div>');
		jQuery(this).find('.vincent_menu_dots').width(product_item_width - product_title_width - product_price_width + 3).css('left', product_title_width - 3);
	});
});

