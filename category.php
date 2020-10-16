<?php get_header(); ?>
<?php if (is_category(array(3, 6, 9, 8, 10, 11))) { ?>

  <?php get_template_part('template-parts/recipes/recipe-category') ?>
  
<?php } ?>
<?php get_footer(); ?>