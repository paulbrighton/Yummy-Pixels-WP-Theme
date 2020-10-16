<div class="o-row c-recipes">
  <?php
  $args = array(
    // get which post types that are to be used
    'post_type'         => 'recipes',
    'posts_per_page'    => 9,
    'order'         => 'asc',
    'post_status' => 'publish',
    'paged'         => $paged
  );
  $the_query = new WP_Query($args);

  if ($the_query->have_posts()) {
    while ($the_query->have_posts()) {
      $the_query->the_post(); ?>

      <div class="c-recipes__card o-row__column o-row__column--span-12 o-row__column--span-6@small o-row__column--span-4@medium">
        <div class="c-recipes__card-content">
          <?php
          $image = get_field('recipe_card_image');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>

          <div class="c-recipes__card-text">
            <h2 class="c-recipes__card-title">
              <a href="<?php the_permalink() ?>" title="<?php the_title_attribute() ?>"><?php the_field('recipe_card_title'); ?></a>
            </h2>

            <h3 class="c-recipes__card-subtitle">
              <?php the_field('recipe_card_subtitle'); ?>
            </h3>

            <div class="c-recipes__card-meta">
              <?php _themename_post_meta() ?>
            </div>

            <div class="c-recipes__card-text-flex-height">
              <?php the_field('recipe_header_description'); ?>
            </div>

            <div class="c-recipes__card-readmore">
              <?php _themename_read_recipe_link() ?>
            </div>

            <?php if (has_category()) {
              echo '<div class="c-post__cats c-recipes__card-meta">';
              /* translators: , is used between categories */
              $cats_list = get_the_category_list(esc_html__(', ', '_themename'));
              /* translators: , %s is the categories list */
              printf(esc_html__('Posted in %s', '_themename'), $cats_list);
              echo '</div>';
            }
            ?>
          </div>
        </div>
      </div>
  <?php
    }
  } else {
    get_template_part('template-parts/post/content', 'none');
  }

  wp_reset_postdata(); ?>
  <div class="c-recipes__card o-row__column o-row__column--span-12">
    <div class="c-blog__pagination">
      <p class="c-blog__pagination--previous button"><?php previous_posts_link(__('Previous Recipes', '_themename'), $the_query->max_num_pages); ?></p>
      <p class="c-blog__pagination--next button"><?php next_posts_link(__('More Recipes', '_themename'), $the_query->max_num_pages); ?></p>
    </div>
  </div>
</div>