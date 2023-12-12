<?php

if (!defined('ABSPATH')) exit(); # No direct access allowed.

/**
 * This file will create admin menu page.
 */
if (!class_exists('WS_Admin_Pages')) {
  class WS_Admin_Pages
  {
    public function __construct()
    {
      add_action('admin_menu', [$this, 'create_menus']);
    }

    public function create_menus()
    {
      $capability = 'manage_options';
      $test_domain = 'work-service';
      $slug = 'ws-settings';

      add_menu_page(
        __('Work Service', $test_domain),
        __('Work Service', $test_domain),
        $capability,
        $slug,
        [$this, 'overview'],
        'dashicons-buddicons-replies'
      );

      add_submenu_page(
        $slug, //parent page slug
        __('Services', $test_domain), //page title
        __('Services', $test_domain), //menu title
        $capability, //manage optios
        'ws-services', //slug
        [$this, 'services'] //function
      );

      add_submenu_page(
        $slug, //parent page slug
        __('Bookings', $test_domain), //page title
        __('Bookings', $test_domain), //menu title
        $capability, //manage optios
        'ws-bookings', //slug
        [$this, 'bookings'] //function
      );

      add_submenu_page(
        $slug, //parent page slug
        __('Contact', $test_domain), //page title
        __('Contact', $test_domain), //menu title
        $capability, //manage optios
        'ws-contact', //slug
        [$this, 'contact'] //function
      );

      add_submenu_page(
        $slug, //parent page slug
        __('FAQs', $test_domain), //page title
        __('FAQs', $test_domain), //menu title
        $capability, //manage optios
        'ws-faqs', //slug
        [$this, 'faqs'] //function
      );

      add_submenu_page(
        $slug, //parent page slug
        __('Chats', $test_domain), //page title
        __('Chats', $test_domain), //menu title
        $capability, //manage optios
        'ws-chats', //slug
        [$this, 'chats'] //function
      );
    }

    public function overview()
    {
      echo '<div class="wrap"><div id="ws-admin-general-app"></div></div>';
    }

    public function services()
    {
      echo '<div class="wrap"><div id="ws-admin-services-app"></div></div>';
    }

    public function bookings()
    {
      echo '<div class="wrap"><div id="ws-admin-orders-app"></div></div>';
    }

    public function faqs()
    {
      echo '<div class="wrap"><div id="ws-admin-faqs-app"></div></div>';
    }

    public function contact()
    {
      echo '<div class="wrap"><div id="ws-admin-contact-app"></div></div>';
    }

    public function chats()
    {
      echo '<div class="wrap"><div id="ws-admin-chats-app"></div></div>';
    }
  }
  new WS_Admin_Pages();
}
