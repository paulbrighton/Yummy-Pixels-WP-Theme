<?php get_header(); ?>
<?php
$layout = _themename_meta(get_the_ID(), '__themename_post_layout', 'full');
$sidebar = is_active_sidebar('city-guides-sidebar');
if ($layout === 'sidebar' && !$sidebar) {
  $layout = 'full';
}
?>
<div class="u-margin-bottom-5 u-margin-left-10 u-margin-right-10">
  <div class="yoast__breadcrumbs">
    <?php
    if (function_exists('yoast_breadcrumb')) {
      yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
    }
    ?>
  </div>
</div>

<div class="o-container c-city-guides__container u-margin-bottom-40 u-margin-top-25 o-single-post-<?php echo $layout; ?>">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo $layout === 'sidebar' ? '8' : '12' ?>@small">
      <?php get_template_part('loop', 'cityguides'); ?>
      <div class="c-city-guides__blog-link">
        <a href="<?php the_field('city_guides_archive_link', 521); ?>"><?php the_field('city_guides_archive_link_text', 521); ?></a>
      </div>
    </div>
    <?php if ($layout === 'sidebar') { ?>
      <div class="o-row__column o-row__column--span-12 o-row__column--span-4@small">
      <?php if (is_active_sidebar('city-guides-sidebar')) { ?>
            <?php dynamic_sidebar('city-guides-sidebar'); ?>
          <?php } ?>
      </div>
    <?php } ?>
  </div>
</div>
<?php get_footer(); ?>