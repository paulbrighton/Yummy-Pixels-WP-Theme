<?php get_header(); ?>
<div class="c-city-guides">
  <div class="u-margin-bottom-5 c-breadcrumbs">
    <div class="yoast__breadcrumbs">
      <?php
      if (function_exists('yoast_breadcrumb')) {
        yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
      }
      ?>
    </div>
  </div>
  <div class="c-city-guides__header">
    <div class="c-city-guides__header--top">
      <?php get_template_part('template-parts/hero/hero-city-guides', '_themename') ?>
    </div>

    <div class="o-container c-city-guides__header--bottom">
      <div class="o-row">
        <div class="o-row__column o-row__column--span-12 o-row__column--span-6@small c-city-guides__header-text">
          <h1><?php the_field('city_guide_title', 521) ?></h1>
          <h2><?php the_field('city_guide_subtitle', 521) ?></h2>
          <p><?php the_field('city_guide_description', 521) ?></p>
        </div>
        <div class="o-row__column o-row__column--span-12 o-row__column--span-6@small c-city-guides__booking-form">
          <?php if (is_active_sidebar('booking-sidebar')) { ?>
            <?php dynamic_sidebar('booking-sidebar') ?>
          <?php } ?>
        </div>
      </div>
    </div>
  </div>

  <div class="o-container c-city-guides__articles">
    <div class="o-row">
      <div class="o-row__column o-row__column--span-12">
        <?php if (!is_single()) { ?>
          <?php get_template_part('template-parts/city-guides/city-guides-card-layout', '_themename') ?>
        <?php } ?>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>