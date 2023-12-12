<?php

if (!defined('ABSPATH')) exit(); # No direct access allowed.

if (!class_exists('WS_Create_Rewrite_Rules')) {
  /**
   * this class create query templates page.
   */
  class WS_Create_Rewrite_Rules
  {

    public function __construct()
    {
    }

    public function rewrite_rules()
    {
      add_rewrite_rule(
        'ws-login/([a-zA-Z0-9-]+)[/]?$',
        'index.php?auth_page=$matches[1]',
        'top'
      );

      add_rewrite_rule(
        'ws-customer/([a-zA-Z0-9-]+)[/]?$',
        'index.php?customer_page=$matches[1]',
        'top'
      );

      add_rewrite_rule(
        'ws-customer/services/([a-zA-Z0-9-]+)[/]?$',
        'index.php?service=$matches[1]',
        'top'
      );

      add_rewrite_rule(
        'ws-customer/category/([a-zA-Z0-9-]+)[/]?$',
        'index.php?category=$matches[1]',
        'top'
      );
    }

    public function query_vars($query_vars)
    {
      $query_vars[] = 'auth_page';
      $query_vars[] = 'customer_page';
      $query_vars[] = 'service';
      $query_vars[] = 'category';
      return $query_vars;
    }

    public function template_include($template)
    {
      if (get_query_var('auth_page') != false && get_query_var('auth_page') != '') {
        if (is_user_logged_in()) {
          wp_redirect(site_url('/ws-customer/dashboard/'));
        } else {
          return WS_PATH . 'includes/pages/ws-auth-page.php';
        }
      }

      if (get_query_var('customer_page') != false && get_query_var('customer_page') != '') {
        if (!is_user_logged_in()) {
          wp_redirect(site_url('/ws-login/sign-in/'));
        } else {
          return WS_PATH . 'includes/pages/customer/ws-customer-app-page.php';
        }
      }

      if (get_query_var('service') != false && get_query_var('service') != '') {
        if (!is_user_logged_in()) {
          wp_redirect(site_url('/ws-login/sign-in/'));
        } else {
          return WS_PATH . 'includes/pages/customer/ws-service-page.php';
        }
      }

      if (get_query_var('category') != false && get_query_var('category') != '') {
        if (!is_user_logged_in()) {
          wp_redirect(site_url('/ws-login/sign-in/'));
        } else {
          return WS_PATH . 'includes/pages/customer/ws-category-page.php';
        }
      }

      return $template;
    }
  }
}
