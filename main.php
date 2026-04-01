<?php
/**
 * Plugin Name: Shoppable Image
 * Description: กล่อง Shoppable Image, Interactive แสดงสินค้า
 * Version: 1.0
 * Author: Jirakit Pawnsakunrungrot
 * Author URI: https://www.linkedin.com/in/sunny-jirakit
 * Plugin URI: https://github.com/sunny420x/wordpress-shoppable-image
 */

//Deny access from URL.
if ( ! defined( 'ABSPATH' ) ) exit;

function enqueue_assets() {
    if (is_home() || is_front_page()) {

        //Load CSS
        wp_enqueue_style(
            'style', 
            plugins_url( '/css/style.css', __FILE__ ), 
            array(), 
            time()
        );
        
        //Load JS
        wp_enqueue_script(
            'sds',
            plugins_url( '/js/main.js', __FILE__ ),
            array(),
            time(),
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'enqueue_assets' );