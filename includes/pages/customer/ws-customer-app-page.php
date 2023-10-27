<?php

if (!defined('ABSPATH')) exit(); # No direct access allowed.

/**
 * variables
 */
$page = get_query_var('customer_page');
// $page = get_query_var('service');

/**
 * Confirm if its the queried page
 */
if ($page != false && $page != '') :
  /**
   * This file will create customers app.
   */
  if (!class_exists('WS_Customers_App')) :
    class WS_Customers_App
    {
      public function __construct()
      {
        require_once(WS_PATH . 'includes/pages/templates/ws-header.php');
        switch (strtolower(get_query_var('customer_page'))) {
          case 'dashboard':
            $this->dashboard();
            break;
          case 'services':
            $this->services();
            break;
          case 'bookings':
            $this->bookings();
            break;
          case 'chat':
            $this->chat();
            break;
          case 'settings':
            $this->settings();
            break;
          case 'profile-settings':
            $this->profile_settings();
            break;
          case 'logout':
            $this->logout();
            break;
          default:
            break;
        }
        require_once(WS_PATH . 'includes/pages/templates/ws-footer.php');
      }

      private function dashboard()
      {
        echo '<div id="ws-customer-dashboard"></div>';
      }

      private function services()
      {
        echo '<div id="ws-customer-services"></div>';
      }

      private function bookings()
      {
        echo '<div id="ws-customer-bookings"></div>';
      }

      private function chat()
      {
        echo '<div id="ws-customer-chat"></div>';
      }

      private function settings()
      {
        echo '<div id="ws-customer-settings"></div>';
      }

      private function profile_settings()
      {
        echo '<div id="ws-customer-profile-settings"></div>';
      }

      private function logout()
      {
        echo '<div id="ws-customer-logout"></div>';
      }
    }
    new WS_Customers_App();
  endif;
endif;
