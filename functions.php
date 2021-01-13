<?php

// Import php files from lib folder
require_once('lib/customize.php');
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');
require_once('lib/sidebars.php');
require_once('lib/theme-support.php');
require_once('lib/navigation.php');
require_once('lib/comment-callback.php');
require_once('lib/images.php');
require_once('lib/translations.php');
require_once('lib/metaboxes.php');
require_once('lib/recipe-post-type.php');
require_once('lib/travel-post-type.php');
require_once('lib/city-guides-post-type.php');

// Allow SVG
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

  global $wp_version;
  if ( $wp_version !== '4.7.1' ) {
     return $data;
  }

  $filetype = wp_check_filetype( $filename, $mimes );

  return [
      'ext'             => $filetype['ext'],
      'type'            => $filetype['type'],
      'proper_filename' => $data['proper_filename']
  ];

}, 10, 4 );

function cc_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function fix_svg() {
  echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action( 'admin_head', 'fix_svg' );

remove_filter('the_content', 'wpautop');

function exclude_category_widget($args){
  $args["exclude"] = "4"; 
  return $args;
}
add_filter("widget_categories_args","exclude_category_widget");

// Used for pagination for recipes cpt, was getting 404 on second page
// Will need this for travel and city-guides
add_action( 'parse_query','changept' );
function changept() {
    if( is_category() && !is_admin() )
        set_query_var( 'post_type', array( 'post', 'recipes' ) );
    return;
}

/**
 * Display CPT on Recent Post widget
 *
 * @version WP 4.6.1
 */
add_filter( 'widget_posts_args', 'wpse241060_widget_recent_post_4_cpt' );
function wpse241060_widget_recent_post_4_cpt( $params )
{
    $params['post_type'] = array( 'post', 'recipes');
    return $params;
}

function my_exclude_ipad_and_tablets( $is_mobile ) {
    if( 
		false !== strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ),'ipad' )
		|| false !== strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ),'tablet' )
		|| false !== strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ),'playbook' )
		|| false !== strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ),'mobi|opera mini' )
	){
        return false;
    }
    return $is_mobile;
}
add_filter( 'wp_is_mobile','my_exclude_ipad_and_tablets' );