<?php

if (!defined('ABSPATH')) exit(); # No direct access allowed.

/**
 * variables
 */
$page = get_query_var('service');

/**
 * Confirm if its the queried page
 */
if ($page != false && $page != '') :
 if (!class_exists('WS_Service_Page')) :
  /**
   * This file will create customer service page.
   */
  class WS_Service_Page
  {
   public function __construct()
   {
    require_once(WS_PATH . 'includes/pages/templates/ws-header.php');
    $this->customer_single_service_template();
    require_once(WS_PATH . 'includes/pages/templates/ws-footer.php');
   }

   private function customer_single_service_template()
   {
    echo '<div id="ws-customer-single-service"></div>';
   }
  }
  new WS_Service_Page();
 endif;
endif;
