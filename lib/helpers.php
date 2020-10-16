<?php

// if statement allows the funtion to be overwritten in the child theme
if(!function_exists('_themename_post_meta')) {
  function _themename_post_meta() {
    /* translators: %s: Post Date */
    printf(
      esc_html__('Posted on %s', '_themename'),
      '<span>' . '<time datetime="' . esc_attr(get_the_date("c")) . '">' .  esc_html(get_the_date()) . '</time>' . '</span>'
    );
    
   /* translators: %s: Post Author */
    printf(
      esc_html__(' By %s', '_themename'),
      '<span class="c-recipes__card-posted-by">' . esc_html(get_the_author()) . '</span>'
    );
  }
}

function _themename_readmore_link() {
  echo '<a class="c-post__readmore" href="' . esc_url(get_permalink()) . '" title="' . the_title_attribute(['echo' => false]) . '">';
  printf(
    wp_kses(
       /* translators: %s: Post Title */
    __('Read More <span class="u-screen-reader-text">About %s</span>', '_themename'),
      [
        'span' => [
          'class' => []
        ]
      ]
    ),
    get_the_title()
  );
  echo '</a>';
}

function _themename_read_recipe_link() {
  echo '<a class="c-post__readmore" href="' . esc_url(get_permalink()) . '" title="' . the_title_attribute(['echo' => false]) . '">';
  printf(
    wp_kses(
       /* translators: %s: Post Title */
    __('Get the Recipe... <span class="u-screen-reader-text">About %s</span>', '_themename'),
      [
        'span' => [
          'class' => []
        ]
      ]
    ),
    get_the_title()
  );
  echo '</a>';
}

function _themename_meta($id, $key, $default) {
  $value = get_post_meta( $id, $key, true);
  if(!$value && $default) {
    return $default;
  }
  return $value;
 }