<?php
/**
 * Curiosity Box Functionality Plugin
 *
 * @copyright Copyright (C) 2022, AttractMore Ltd.
 *
 * @wordpress-plugin
 * Plugin Name: Curiosity Box Functions
 * Version:     1.0
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