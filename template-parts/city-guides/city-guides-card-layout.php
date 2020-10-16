<div class="o-row c-city-guides">
  <?php
  $args = array(
    // get which post types that are to be used
    'post_type'         => 'City Guides',
    'posts_per_page'    => 3,
    'order'         => 'asc',
    'post_status' => 'publish',
    'paged'         => $paged
  );
  $the_query = new WP_Query($args);

  if ($the_query->have_posts()) {
    while ($the_query->have_posts()) {
      $the_query->the_post(); ?>

      <div class="c-city-guides__card o-row__column o-row__column--span-12 o-row__column--span-6@small">
        <div class="c-city-guides__card-content">
          <?php
          $image = get_field('city_guide_image');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>

          <div class="c-city-guides__card-text">
            <h2 class="c-city-guides__card-title">
              <a href="<?php the_permalink() ?>" title="<?php the_title_attribute() ?>"><?php the_field('city_guide_title'); ?></a>
            </h2>

            <div class="c-city-guides__card-meta">
              <?php _themename_post_meta() ?>
            </div>

            <div class="c-city-guides__card-text-flex-height">
              <?php the_field('city_guide_excerpt'); ?>
            </div>

            <div class="c-city-guides__card-readmore">
              <?php _themename_readmore_link() ?>
            </div>
          </div>
        </div>
      </div>
  <?php
    }
  } else {
    get_template_part('template-parts/post/content', 'none');
  }

  wp_reset_postdata(); ?>
</div>