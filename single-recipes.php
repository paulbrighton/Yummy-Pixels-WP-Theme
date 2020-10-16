<?php get_header(); ?>
<div class="c-recipe o-container-full">
  <div class="c-recipe__breadcrumbs">
    <div class="yoast__breadcrumbs">
      <?php
      if (function_exists('yoast_breadcrumb')) {
        yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
      }
      ?>
    </div>
  </div>
</div>

<div class="c-recipe o-container">
  <?php get_template_part('template-parts/recipes/recipe-hero', '_themename') ?>

  <div class="u-margin-bottom-50 u-margin-top-30">
    <div class="o-row">
      <div class="o-row__column o-row__column--span-12 u-flex u-justify-center c-recipe__title">
        <h1><?php the_field('recipe_header_title') ?></h1>
      </div>
    </div>

    <div class="o-row">
      <div class="o-row__column o-row__column--span-12 u-flex u-justify-center c-recipe__description">
        <p><?php the_field('recipe_header_description') ?></p>
      </div>
    </div>

    <div class="o-row c-recipe__info-container">
      <div class="o-row__column o-row__column--span-4 c-recipe__info">
        <div class="c-recipe__info-content">
          <div class="c-recipe__info-image u-flex u-justify-center">
            <?php
            $image = get_field('recipe_header_cooking_time_image', 221);
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p><?php the_field('recipe_header_cooking_time') ?></p>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-4 c-recipe__info">
        <div class="c-recipe__info-content">
          <div class="c-recipe__info-image u-flex u-justify-center">
            <?php
            $image = get_field('recipe_header_servings_image', 221);
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p><?php the_field('recipe_header_servings') ?></p>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-4 c-recipe__info">
        <div class="c-recipe__info-content">
          <div class="c-recipe__info-image u-flex u-justify-center">
            <?php
            $image = get_field('recipe_header_author_image', 221);
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p><?php the_field('recipe_header_author') ?></p>
        </div>
      </div>
    </div>

    <div class="o-row c-recipe__container u-margin-top-50@small">
      <div class="o-row__column o-row__column--span-12 o-row__column--span-4@small o-row__column--span-3@large">
        <div class="c-recipe__ingredients">
          <h2>Ingredients</h2>
          <?php the_field('recipe_ingredients_list') ?>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-12 o-row__column--span-8@small o-row__column--span-6@large">
        <div class="c-recipe__directions">
          <h2>Directions</h2>
          <?php the_field('recipe_directions_list') ?>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-12 o-row__column--span-12@small o-row__column--span-3@large">
        <div class="c-recipe__sidebar">
          <?php if (is_active_sidebar('recipe-sidebar')) { ?>
            <?php dynamic_sidebar('recipe-sidebar'); ?>
          <?php } ?>
        </div>
      </div>

      <div class="o-row__column o-row__column--span-12">
        <?php get_template_part('template-parts/post/footer', '_themename') ?>
      </div>

      <div class="o-row__column o-row__column--span-12">
        <?php get_template_part('template-parts/single/single-pagination'); ?>
      </div>
    </div>
  </div>
</div>
</div>
<?php get_footer(); ?>