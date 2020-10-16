<div class="c-selection">
  <div class="o-container c-selection__container c-front-page">
    <div class="o-row">

      <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium c-selection__card">
        <h3 class="c-selection__card-title"><?php the_field('itinerary_card_title'); ?></h3>
        <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
          <?php
          $image = get_field('itinerary_card_image');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
        <p class="c-selection__card-text"><?php the_field('itinerary_card_text'); ?></p>
        <div class="c-button__container u-flex u-justify-center">
          <a href="<?php the_field('itinerary_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('itinerary_card_button_text'); ?></a>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium c-selection__card">
        <h3 class="c-selection__card-title"><?php the_field('city_guides_card_title'); ?></h3>
        <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
          <?php
          $image = get_field('city_guides_card_image');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
        <p class="c-selection__card-text"><?php the_field('city_guides_card_text'); ?></p>
        <div class="c-button__container u-flex u-justify-center">
          <a href="<?php the_field('city_guides_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('city_guides_card_button_text'); ?></a>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium c-selection__card">
        <h3 class="c-selection__card-title"><?php the_field('recipe_card_title'); ?></h3>
        <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
          <?php
          $image = get_field('recipes_card_image');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
        <p class="c-selection__card-text"><?php the_field('recipe_card_text'); ?></p>
        <div class="c-button__container u-flex u-justify-center">
          <a href="<?php the_field('recipes_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('recipes_card_button_text'); ?></a>
        </div>
      </div>

    </div>
  </div>
</div>