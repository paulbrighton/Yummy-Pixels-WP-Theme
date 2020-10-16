<?php

function custom_post_type() {
 
 // Set UI labels for Custom Post Type
     $labels = array(
         'name'                => _x( 'Recipes', 'Post Type General Name', '_themename' ),
         'singular_name'       => _x( 'Recipe', 'Post Type Singular Name', '_themename' ),
         'menu_name'           => __( 'Recipes', '_themename' ),
         'parent_item_colon'   => __( 'Parent Recipe', '_themename' ),
         'all_items'           => __( 'All Recipes', '_themename' ),
         'view_item'           => __( 'View Recipe', '_themename' ),
         'add_new_item'        => __( 'Add New Recipe', '_themename' ),
         'add_new'             => __( 'Add New', '_themename' ),
         'edit_item'           => __( 'Edit Recipe', '_themename' ),
         'update_item'         => __( 'Update Recipe', '_themename' ),
         'search_items'        => __( 'Search Recipe', '_themename' ),
         'not_found'           => __( 'Not Found', '_themename' ),
         'not_found_in_trash'  => __( 'Not found in Trash', '_themename' ),
     );
      
 // Set other options for Custom Post Type
      
     $args = array(
         'label'               => __( 'Our Latest Recipes', '_themename' ),
         'description'         => __( 'Yummy Pixels recipes', '_themename' ),
         'labels'              => $labels,
         // Features this CPT supports in Post Editor
         'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'categories' ),
         // You can associate this CPT with a taxonomy or custom taxonomy. 
         'taxonomies'          => array( 'category' ),
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
         'has_archive'         => 'recipes',
         'exclude_from_search' => false,
         'publicly_queryable'  => true,
         'capability_type'     => 'post',
         'show_in_rest' => true,
     );
      
     // Registering your Custom Post Type
     register_post_type( 'recipes', $args );
  
 }
  
 /* Hook into the 'init' action so that the function
 * Containing our post type registration is not 
 * unnecessarily executed. 
 */
  
 add_action( 'init', 'custom_post_type', 0 );
