<?php

if (!defined('ABSPATH')) exit(); # No direct access allowed.

/**
 * Query page variable
 */
$page = get_query_var('auth_page');

/**
 * Confirm if its the queried page
 */
if ($page != false && $page != '') :

  /**
   * This file will create customers app.
   */
  if (!class_exists('WS_Auth_App')) :
    class WS_Auth_App
    {
      public function __construct()
      {
        require_once(WS_PATH . 'includes/pages/templates/ws-header.php');
        switch (strtolower(get_query_var('auth_page'))) {
          case 'sign-in':
            $this->sign_in();
            break;
          case 'sign-up':
            $this->sign_up();
            break;
          case 'forgot-password':
            $this->forgot_password();
            break;
          default:
            break;
        }
        require_once(WS_PATH . 'includes/pages/templates/ws-footer.php');
      }

      private function sign_in()
      {
        echo '<div id="ws-auth-sign-in"></div>';
      }

      private function sign_up()
      {
        echo '<div id="ws-auth-sign-up"></div>';
      }

      private function forgot_password()
      {
        echo '<div id="ws-auth-forgot-password"></div>';
      }
    }
    new WS_Auth_App();
  endif;
endif;
