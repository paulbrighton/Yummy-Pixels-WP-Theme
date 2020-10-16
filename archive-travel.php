<?php get_header(); ?>
<div class="c-travel-archive">
  <div class="u-margin-bottom-5 c-breadcrumbs">
    <div class="yoast__breadcrumbs">
      <?php
      if (function_exists('yoast_breadcrumb')) {
        yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
      }
      ?>
    </div>
  </div>
  <div class="c-travel-archive__header">
  <div class="c-travel-archive__header--top">
    <?php get_template_part('template-parts/hero/hero-travel', '_themename') ?>
  </div>

  <div class="o-container c-travel-archive__header--bottom">
    <div class="o-row">
      <div class="o-row__column o-row__column--span-12 o-row__column--span-6@small c-travel-archive__header--bottom-text">
        <h1><?php the_field('travel_header_title', 577) ?></h1>
        <p><?php the_field('travel_header_description', 577) ?></p>
      </div>
      <div class="o-row__column o-row__column--span-12 o-row__column--span-6@small c-travel-archive__booking-form">
        <?php if (is_active_sidebar('booking-sidebar')) { ?>
            <?php dynamic_sidebar('booking-sidebar') ?>
        <?php } ?>
      </div>
    </div>
  </div>
  </div>

  <div class="o-container u-margin-top-35 u-margin-bottom-50">
    <div class="o-row">
      <div class="o-row__column o-row__column--span-12">
        <?php get_template_part('template-parts/travel/travel-card-layout', '_themename') ?>
      </div>
    </div>
  </div>
</div>


<?php get_footer(); ?>