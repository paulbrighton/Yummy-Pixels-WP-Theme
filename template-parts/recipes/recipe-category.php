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

  <?php if (is_category('pork')) { ?>
    <?php $cat_title = 'pork'; ?>
    <div class="c-recipes__header-text o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <h1><?php the_field('pork_category_title', 221); ?></h1>
      <p><?php the_field('pork_category_description', 221); ?></p>
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
  <?php } ?>

  <?php if (is_category('poultry')) { ?>
    <?php $cat_title = 'poultry'; ?>
    <div class="c-recipes__header-text o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <h1><?php the_field('chicken_category_title', 221); ?></h1>
      <p><?php the_field('chicken_category_description', 221); ?></p>
    </div>

    <div class="c-recipes__header-image o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <?php
      $image = get_field('chicken_category_image', 221);
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  <?php } ?>

  <?php if (is_category('lamb')) { ?>
    <?php $cat_title = 'lamb'; ?>
    <div class="c-recipes__header-text o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <h1><?php the_field('lamb_category_title', 221); ?></h1>
      <p><?php the_field('lamb_category_description', 221); ?></p>
    </div>

    <div class="c-recipes__header-image o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <?php
      $image = get_field('lamb_category_image', 221);
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  <?php } ?>

  <?php if (is_category('beef')) { ?>
    <?php $cat_title = 'beef'; ?>
    <div class="c-recipes__header-text o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <h1><?php the_field('beef_category_title', 221); ?></h1>
      <p><?php the_field('beef_category_description', 221); ?></p>
    </div>

    <div class="c-recipes__header-image o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <?php
      $image = get_field('beef_category_image', 221);
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  <?php } ?>

  <?php if (is_category('seafood')) { ?>
    <?php $cat_title = 'seafood'; ?>
    <div class="c-recipes__header-text o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <h1><?php the_field('seafood_category_title', 221); ?></h1>
      <p><?php the_field('seafood_category_description', 221); ?></p>
    </div>

    <div class="c-recipes__header-image o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <?php
      $image = get_field('seafood_category_image', 221);
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  <?php } ?>

  <?php if (is_category('vegetarian')) { ?>
    <?php $cat_title = 'vegetarian'; ?>
    <div class="c-recipes__header-text o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <h1><?php the_field('vegetarian_category_title', 221); ?></h1>
      <p><?php the_field('vegetarian_category_description', 221); ?></p>
    </div>

    <div class="c-recipes__header-image o-row__column o-row__column--span-12 o-row__column--span-6@small">
      <?php
      $image = get_field('vegetarian_category_image', 221);
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  <?php } ?>
</div>

<div class="o-container-full u-margin-bottom-50 c-recipes__container">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12">
      <div class="c-recipes__sub-header">
        <div class="c-recipes__sub-header__cat-form">
          <div class="c-recipes__sub-header__cat-form-content">
            <p><?php esc_html_e('Recipe categories:', '_themename'); ?> </p>
            <form id="category-select" class="custom-select category-select u-flex u-flex-direction-row-reverse" action="<?php echo esc_url(home_url('/')); ?>" method="get">
              <?php $category_args = array(
                'show_option_none'  => 'Choose a Category...',
                'exclude'           => '4'
              ); ?>
              <?php wp_dropdown_categories($category_args); ?>

              <input type="submit" value="<?php esc_html_e('View', '_themename'); ?>" />

            </form>
          </div>

        </div>

        <div class="c-recipes__sub-header__blog-link">
          <a href="index.php?page_id=208"><?php the_field('all_recipes_link_text', 221); ?></a>
        </div>
      </div>
    </div>
  </div>

  <div class="o-row c-recipes">
    <?php
    $args = array(
      // get which post types that are to be used
      'post_type'         => 'recipes',
      'posts_per_page'    => 6,
      'category_name'  => $cat_title,
      'order'         => 'asc',
      'paged'         => $paged
    );
    $the_query = new WP_Query($args);

    if ($the_query->have_posts()) {
      while ($the_query->have_posts()) {
        $the_query->the_post(); ?>

        <div class="c-recipes__card o-row__column o-row__column--span-12 o-row__column--span-6@small o-row__column--span-4@large">
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
  </div>

  <div class="c-blog__pagination">
    <p class="c-blog__pagination--previous button"><?php previous_posts_link(__('Previous Articles', '_themename'), $the_query->max_num_pages); ?></p>
    <p class="c-blog__pagination--next button"><?php next_posts_link(__('More Articles', '_themename'), $the_query->max_num_pages); ?></p>
  </div>

  <!-- <div class="c-recipes__blog-link">
    <a href="index.php?page_id=208"><?php the_field('all_recipes_link_text', 221); ?></a>
  </div> -->
</div>