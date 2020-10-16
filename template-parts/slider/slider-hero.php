<div class="c-front-page__header slider">
  <div class="c-front-page__slider-item">
    <?php if (wp_is_mobile()) : ?>
      <?php
      $image = get_field('fp_hero_image_travel_mobile');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    <?php else : ?>
      <?php
      $image = get_field('fp_hero_image_travel');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    <?php endif; ?>
    <div class="c-front-page__slider c-front-page__slider-overlay c-front-page__slider-overlay--darker">
      <div class="o-container">
        <div class="c-front-page__slider-text">
          <div class="c-front-page__slider-content">
            <h2><?php the_field('travel_hero_text') ?></h2>
            <div class="hero-btn">
              <a href="<?php the_field('travel_hero_link'); ?>" class="c-slider-button"><?php the_field('travel_hero_link_text'); ?></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="c-front-page__slider-item">
    <?php if (wp_is_mobile()) : ?>
      <?php
      $image = get_field('fp_hero_image_city_breaks_mobile');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    <?php else : ?>
      <?php
      $image = get_field('fp_hero_image_city_breaks');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    <?php endif; ?>
    <div class="c-front-page__slider c-front-page__slider-overlay c-front-page__slider-overlay--darker">
      <div class="o-container">
        <div class="c-front-page__slider-text">
          <div class="c-front-page__slider-content">
            <h2><?php the_field('city_breaks_hero_text') ?></h2>
            <div class="hero-btn">
              <a href="<?php the_field('city_breaks_hero_link'); ?>" class="c-slider-button"><?php the_field('city_breaks_hero_link_text'); ?></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="c-front-page__slider-item">
    <?php if (wp_is_mobile()) : ?>
      <?php
      $image = get_field('fp_hero_image_recipes_mobile');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    <?php else : ?>
      <?php
      $image = get_field('fp_hero_image_recipes');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    <?php endif; ?>
    <div class="c-front-page__slider c-front-page__slider-overlay c-front-page__slider-overlay--darker">
      <div class="o-container">
        <div class="c-front-page__slider-text">
          <div class="c-front-page__slider-content">
            <h2><?php the_field('recipe_hero_text') ?></h2>
            <div class="hero-btn">
              <a href="<?php the_field('recipe_hero_link'); ?>" class="c-slider-button"><?php the_field('recipe_hero_link_text'); ?></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>