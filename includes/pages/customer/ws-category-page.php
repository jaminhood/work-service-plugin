<?php

if (!defined('ABSPATH')) exit(); # No direct access allowed.

/**
 * variables
 */
$page = get_query_var('category');

/**
 * Confirm if its the queried page
 */
if ($page != false && $page != '') :
 /**
  * This file will create customers app.
  */
 if (!class_exists('WS_Category_Page')) :
  class WS_Category_Page
  {
   public function __construct()
   {
    require_once(WS_PATH . 'includes/pages/templates/ws-header.php');
    $this->customer_category_template();
    require_once(WS_PATH . 'includes/pages/templates/ws-footer.php');
   }

   private function customer_category_template()
   {
    echo '<div id="ws-customer-services"></div>';
   }
  }
  new WS_Category_Page();
 endif;
endif;
