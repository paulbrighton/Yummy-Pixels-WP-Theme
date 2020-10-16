<?php get_header(); ?>
<!-- Testing Deploy to Hostinger -->

<?php get_template_part('template-parts/slider/slider-hero', '_themename') ?>

<div class="c-front-page__intro">
  <div class="o-container">
    <div class="o-row u-align-middle">
      <div class="c-front-page__intro-text o-row__column o-row__column--span-12 o-row__column--span-6@medium u-flex u-flex-direction-column">
        <h1 class="c-front-page__brand-title"><?php the_field('fp_site_title') ?> <?php the_field('fp_intro_title') ?></h1>
        <?php the_field('fp_intro_text') ?>
      </div>

      <div class="c-front-page__intro-image o-row__column o-row__column--span-12 o-row__column--span-6@medium">
        <?php
        $image = get_field('fp_intro_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>
</div>

<div class="c-front-page__recipes">
  <div class="o-container">
    <h2>Recipe Collections</h2>
    <?php get_template_part('template-parts/recipes/recipe-cat-card-list', '_themename') ?>
  </div>
</div>

<div class="c-front-page__travel">
  <div class="o-container">
    
    <div class="o-row u-align-middle">
      <div class="c-front-page__travel-text o-row__column o-row__column--span-12 o-row__column--span-6@medium u-flex u-flex-direction-column">
      <h2><?php the_field('fp_travel_title') ?></h2>
        <?php the_field('fp_travel_inspiration_text') ?>
      </div>

      <div class=" c-front-page__travel-image o-row__column o-row__column--span-12 o-row__column--span-6@medium">
        <?php
        $image = get_field('fp_travel_inspiration_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>
</div>

<?php get_template_part('template-parts/front-page/selection-cards', '_themename') ?>

<div class="c-front-page__cookbook">
  <div class="o-container">
    <h2><?php the_field('fp_cookbook_title') ?></h2>
    <div class="c-front-page__cookbook-content">
      <div class="o-row">
        <div class="c-front-page__cookbook-container o-row__column o-row__column--span-12 o-row__column--span-5@medium">
          <div class="c-front-page__cookbook-image">
            <?php
            $image = get_field('fp_cookbook_image');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
        </div>
        <div class="o-row__column o-row__column--span-12 o-row__column--span-1@medium"></div>
        <div class="c-front-page__cookbook-text-contanier u-flex u-flex-direction-column o-row__column o-row__column--span-12 o-row__column--span-6@medium">
          <div class="c-front-page__cookbook-text">
            <h3><?php the_field('fp_cookbook_subtitle') ?></h3>
            <div class="c-front-page__cookbook-paragraph">
              <p><?php the_field('fp_cookbook_text') ?></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>