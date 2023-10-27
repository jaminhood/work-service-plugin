<?php

/**
 * Plugin Name: Work Service
 * Author: JaminHood
 * Author URI: https://github.com/robicse11127
 * Version: 1.0.0
 * Description: Work Service
 * Text-Domain: work-service
 */

if (!defined('ABSPATH')) exit(); # No direct access allowed.

/**
 * Define Plugins Contants
 */
define('WS_PATH', trailingslashit(plugin_dir_path(__FILE__)));
define('WS_URL', trailingslashit(plugins_url('/', __FILE__)));

if (!class_exists('WS')) {
	/**
	 * Work Service main class
	 */
	class WS
	{
		public function __construct()
		{
			require_once WS_PATH . 'includes/pages/admin/ws-admin-pages.php';
			require_once WS_PATH . 'includes/classes/class-ws-create-settings-routes.php';
			require_once WS_PATH . 'includes/ws-create-rewrite-rules.php';

			$this->init();
		}

		/**
		 * Initialize Plugin
		 */
		public function init(): void
		{
			$rewrite_rules = new WS_Create_Rewrite_Rules();

			# Registering Plugin
			register_activation_hook(__FILE__, [$this, 'activate']);
			register_deactivation_hook(__FILE__, [$this, 'deactivate']);

			# Rewrite rules
			add_action('init', [$rewrite_rules, 'rewrite_rules']);
			add_filter('query_vars', [$rewrite_rules, 'query_vars']);
			add_action('template_include', [$rewrite_rules, 'template_include']);

			# Enqueing Media
			add_action('admin_enqueue_scripts', array($this, 'media_uploader'));

			# Registering Styles
			wp_register_style('work-service-style',  WS_URL . 'dist/style.css', array(), time());
			wp_enqueue_style('work-service-style');

			# Enqueing Scripts
			add_action('admin_enqueue_scripts', [$this, 'load_scripts']);
			add_action('wp_enqueue_scripts', [$this, 'load_scripts']);
		}

		/**
		 * Activation Script
		 */
		public function activate(): void
		{
		}

		/**
		 * Deactivation Script
		 */
		public function deactivate(): void
		{
			flush_rewrite_rules(true);
		}

		/**
		 * Loading Necessary Scripts
		 */
		public function load_scripts(): void
		{
			wp_enqueue_script('work-service', WS_URL . 'dist/bundle.js', ['jquery', 'wp-element'], wp_rand(), true);
			wp_localize_script('work-service', 'appLocalizer', [
				'apiUrl' => home_url('/wp-json'),
				'nonce' => wp_create_nonce('wp_rest'),
			]);
		}

		/**
		 * Loading Necessary Scripts
		 */
		public function media_uploader(): void
		{
			wp_enqueue_media();
		}
	}

	new WS;
}
