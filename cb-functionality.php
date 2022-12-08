<?php
/**
 * Curiosity Box Functionality Plugin
 *
 * @copyright Copyright (C) 2022, AttractMore Ltd.
 *
 * @wordpress-plugin
 * Plugin Name: Curiosity Box Functions
 * Version:     1.3
 * Plugin URI:  https://attractmore.uk
 * Description: The collection of custom functions for the Curiosity Box website
 * Author:      AttractMore (Roger Knight)
 * Author URI:  https://attractmore.uk
 * Text Domain: cb-functionality
 * Domain Path: /languages/
 * Requires at least: 5.9
 * Requires PHP: 5.6.20
 *
 * WC requires at least: 3.0
 * WC tested up to: 6.1
 *
 */

 /**
 * @snippet Translate string Shopping Cart to Basket on Cart and Checkout
 * @source https://www.businessbloomer.com/translate-single-string-woocommerce-wordpress/
 * @source https://twenty-eighty.co.uk/resources/how-do-i-change-cart-to-basket-in-woocommerce/
 */

add_filter( 'gettext', 'am_translate_cart_to_basket', 999, 3);

function am_translate_cart_to_basket($translated, $untranslated, $domain) {
 if ( ! is_admin() && 'flatsome' === $domain && ( is_cart() || is_checkout() ) ) {
   $translated = str_ireplace( 'Shopping Cart', 'Basket', $translated );
 }
 return $translated;
}

/**
 * @snippet Untick Deliver to different Address
*/
add_filter( 'woocommerce_ship_to_different_address_checked', '__return_false' );

/**
 * @snippet       Rename "Returning Customer?" @ Checkout Page - WooCommerce
 * @source        https://businessbloomer.com/?p=21719
 * @author        Rodolfo Melogli
 */

add_filter( 'woocommerce_checkout_login_message', 'am_return_customer_message' );

function am_return_customer_message() {
  return "If you're a new customer, please proceed to the Billing section below.<br>If you've shopped with us before, please ";
}

/**
 * @snippet REMOVE ORDER NOTES
*/
add_filter( 'woocommerce_checkout_fields' , 'am_remove_order_notes' );
function am_remove_order_notes( $fields ) {
  unset($fields['order']['order_comments']);
  return $fields;
}

/**
 *   REMOVE OPTIONAL TEXT NEXT TO FIELDS IN CHECKOUT
*/
add_filter( 'woocommerce_form_field' , 'am_remove_checkout_optional_text', 10, 4 );
function am_remove_checkout_optional_text( $field, $key, $args, $value ) {
  if( is_checkout() && ! is_wc_endpoint_url() ) {
    $optional = '<span class="optional">(' . esc_html__( 'optional', 'woocommerce' ) . ')</span>';
    $field = str_replace( $optional, '', $field );
  }
  return $field;
}
 /**
 * @source https://shanerutter.co.uk/fix-for-woocommerce-schema-data-missing-brand-and-mpn/
 * @source https://wp-tutorials.tech/refine-wordpress/add-brand-to-woocommerce-product-schema/
 * @snippet Add missing Rich Snippet  data not handled by WooCommerce yet
 */
add_filter( 'woocommerce_structured_data_product', 'custom_woocommerce_structured_data_product' );

function custom_woocommerce_structured_data_product ($data) {
	//global $product;
  $data['brand'] = array('@type' => 'Brand', 'name' => 'Curiosity Box');
//	$data['sku'] = $product->get_sku();

	return $data;
}

/**
 * @snippet       Edit "Have a Coupon" message @ WooCommerce Checkout
 * @author        Rodolfo Melogli
 * @compatible    WooCommerce 5
 */
 
add_filter( 'woocommerce_checkout_coupon_message', 'am_have_coupon_message');
 
function am_have_coupon_message() {
   return '<strong>Have a coupon that\'s not been applied automatically? <a href="#" class="showcoupon">Enter your code</a></strong>';
}

/**
 * @snippet REPLACE LOGIN HEADER
*/
add_filter( 'login_headertitle', 'am_change_login_page_title' );

function my_custom_login_logo() {
  echo '<style type="text/css"> #login h1 a { background-image:url(/wp-content/uploads/2021/08/cb-logo-300.png) !important; width:auto; background-size:85%; height:120px; margin-bottom:18px;} </style>';
}
add_action('login_head', 'my_custom_login_logo');

function am_change_login_page_url($login_header_url) {
  return get_bloginfo( 'url' );
}
add_filter( 'login_headerurl', 'am_change_login_page_url' );

function am_change_login_page_title($login_header_title) {
   return get_bloginfo('title');
}
