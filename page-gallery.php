<?php
/*
Template Name: Gallery Page
*/
?>
<?php get_header(); ?>
<div class="c-gallery">
  <div class="u-margin-bottom-5 c-breadcrumbs">
    <div class="yoast__breadcrumbs">
      <?php
      if (function_exists('yoast_breadcrumb')) {
        yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
      }
      ?>
    </div>
  </div>

  <div class="c-gallery__header--top">
    <?php get_template_part('template-parts/hero/hero-gallery', '_themename') ?>
  </div>

  <div class="u-margin-top-50 c-gallery__header--bottom o-container">
    <div class="o-row">
      <div class="o-row__column o-row__column--span-12 o-row__column--span-6@large">
        <h1><?php the_field('gallery_header_title') ?></h1>
        <p><?php the_field('gallery_header_description') ?></p>
      </div>
    </div>
  </div>

  <div class="c-gallery__container o-container-full u-margin-top-50 u-margin-bottom-70">
    <div>
      <?php echo do_shortcode('[modula id="477"]'); ?>
    </div>
  </div>
</div>

<?php get_footer(); ?>