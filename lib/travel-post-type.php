<?php

function custom_travel_post_type() {
 
 // Set UI labels for Custom Post Type
     $labels = array(
         'name'                => _x( 'Travel', 'Post Type General Name', '_themename' ),
         'singular_name'       => _x( 'Travel', 'Post Type Singular Name', '_themename' ),
         'menu_name'           => __( 'Travel', '_themename' ),
         'parent_item_colon'   => __( 'Parent Travel', '_themename' ),
         'all_items'           => __( 'All Travel', '_themename' ),
         'view_item'           => __( 'View Travel', '_themename' ),
         'add_new_item'        => __( 'Add New Travel', '_themename' ),
         'add_new'             => __( 'Add New', '_themename' ),
         'edit_item'           => __( 'Edit Travel', '_themename' ),
         'update_item'         => __( 'Update Travel', '_themename' ),
         'search_items'        => __( 'Search Travel', '_themename' ),
         'not_found'           => __( 'Not Found', '_themename' ),
         'not_found_in_trash'  => __( 'Not found in Trash', '_themename' ),
     );
      
 // Set other options for Custom Post Type
      
     $args = array(
         'label'               => __( 'Travel', '_themename' ),
         'description'         => __( 'Yummy Pixels Travel Articles', '_themename' ),
         'labels'              => $labels,
         // Features this CPT supports in Post Editor
         'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'categories' ),
         // You can associate this CPT with a taxonomy or custom taxonomy. 
         'taxonomies'          => array( 'category', 'post_tag' ),
         /* A hierarchical CPT is like Pages and can have
         * Parent and child items. A non-hierarchical CPT
         * is like Posts.
         */ 
         'hierarchical'        => false,
         'public'              => true,
         'show_ui'             => true,
         'show_in_menu'        => true,
         'show_in_nav_menus'   => true,
         'show_in_admin_bar'   => true,
         'menu_position'       => 5,
         'can_export'          => true,
         'has_archive'         => true,
         'exclude_from_search' => false,
         'publicly_queryable'  => true,
         'capability_type'     => 'post',
         'show_in_rest' => true,
  
     );
      
     // Registering your Custom Post Type
     register_post_type( 'Travel', $args );
  
 }
  
 /* Hook into the 'init' action so that the function
 * Containing our post type registration is not 
 * unnecessarily executed. 
 */
  
 add_action( 'init', 'custom_travel_post_type', 0 );