<?php get_header(); ?>
<div class="c-itinerary u-margin-bottom-50">
  <div class="o-container-full c-itinerary__breadcrumbs u-margin-left-10">
    <div class="yoast__breadcrumbs">
      <?php
      if (function_exists('yoast_breadcrumb')) {
        yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
      }
      ?>
    </div>
  </div>

  <?php get_template_part('template-parts/travel/travel-hero', '_themename') ?>

  <div class="o-container u-margin-bottom-40 u-margin-top-40">
    <div class="o-row">
      <div class="o-row__column o-row__column--span-12">
        <h1><?php the_field('travel_header_title') ?></h1>
        <h2 class="c-itinerary__heading--2"><?php the_field('travel_header_sub_title') ?></h2>
      </div>
    </div>

    <div class="o-row c-itinerary__info-container">
      <div class="o-row__column o-row__column--span-4 c-itinerary__info">
        <div class="c-itinerary__info-content">
          <div class="c-itinerary__info-image u-flex u-justify-center">
            <?php
            $image = get_field('travel_header_duration_image', 577);
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p><?php the_field('travel_header_duration') ?></p>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-4 c-itinerary__info">
        <div class="c-itinerary__info-content">
          <div class="c-itinerary__info-image u-flex u-justify-center">
            <?php
            $image = get_field('travel_header_cost_image', 577);
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p><?php the_field('travel_header_cost') ?></p>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-4 c-itinerary__info">
        <div class="c-itinerary__info-content">
          <div class="c-itinerary__info-image u-flex u-justify-center">
            <?php
            $image = get_field('travel_header_author_image', 577);
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p><?php the_field('travel_header_author') ?></p>
        </div>
      </div>
    </div>

    <div class="o-row">
      <div class="o-row__column o-row__column--span-12 c-itinerary__intro">
        <?php the_field('travel_header_description') ?>
      </div>
    </div>
  </div>

  <div class="c-itinerary__legs u-margin-bottom-25">
  <?php get_template_part('template-parts/travel/travel-itinerary'); ?>
  </div>
  
  <div class="o-container">
    <?php get_template_part('template-parts/single/travel-pagination'); ?>
  </div>

</div>

<?php get_footer(); ?>