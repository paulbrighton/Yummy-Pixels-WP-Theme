<?php

/*
* Template Name: Recipes Page
*/
?>
<?php get_header(); ?>
<div class="yoast__breadcrumbs">
  <?php
  if (function_exists('yoast_breadcrumb')) {
    yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
  }
  ?>
</div>

<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12">
      <header>
        <!-- <?php the_archive_title('<h1>', '</h1>'); ?>
        <?php the_archive_description('<p>', '</p>') ?> -->
        Add archive header content for recipes here
      </header>
    </div>

    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? '8' : '12'; ?>@small">
      <?php get_template_part('loop', 'recipes') ?>
    </div>
    <?php if (is_active_sidebar('primary-sidebar')) { ?>
      <div class="o-row__column o-row__column--span-12 o-row__column--span-4@small">
        <?php get_sidebar() ?>
      </div>
    <?php } ?>
  </div>
</div>
<?php get_footer(); ?>