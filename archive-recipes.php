<?php get_header(); ?>
<div class="u-margin-bottom-5 c-breadcrumbs">
  <div class="yoast__breadcrumbs">
    <?php
    if (function_exists('yoast_breadcrumb')) {
      yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
    }
    ?>
  </div>
</div>

<div class="c-recipes__header">
  <div class="c-recipes__header-text o-row__column o-row__column--span-12 o-row__column--span-6@small">
    <h1><?php the_field('recipe_archive_title', 221); ?></h1>
    <h2><?php the_field('recipe_archive_description', 221); ?></h2>
  </div>

  <div class="c-recipes__header-image o-row__column o-row__column--span-12 o-row__column--span-6@small">
    <?php
    $image = get_field('pork_category_image', 221);
    $size = 'full'; // (thumbnail, medium, large, full or custom size)
    if ($image) {
      echo wp_get_attachment_image($image, $size);
    }
    ?>
  </div>
</div>

<div class="o-container-full c-recipes__container u-margin-bottom-50">
  <div class="o-row">
    <div class="c-recipes__category-select o-row__column o-row__column--span-12">

      <form id="category-select" class="custom-select category-select u-flex u-flex-direction-row-reverse" action="<?php echo esc_url(home_url('/')); ?>" method="get">

        <?php get_template_part('template-parts/forms/dropdown-form', '_themename') ?>

        <input type="submit" value="<?php esc_html_e('View', '_themename'); ?>" />

      </form>
    </div>

    <div class="o-row__column o-row__column--span-12">
      <?php get_template_part('template-parts/recipes/recipe-card-layout', '_themename') ?>
    </div>
  </div>

  <div class="o-row">
    <div class="o-row__column o-row__column--span-12">
      <div class="c-recipes__archive-recipe-cards">
        <h2>Recipe Collections</h2>
        <?php get_template_part('template-parts/recipes/recipe-cat-card-list', '_themename') ?>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>