<?php if (have_posts()) { ?>
  <?php while (have_posts()) { ?>
    <?php the_post() ?>

    <?php get_template_part('template-parts/post/content', get_post_format()); ?>
    <?php get_template_part('template-parts/single/navigation'); ?>

  <?php } ?>

<?php } else { ?>
  <?php get_template_part('template-parts/post/content', 'none'); ?>
  </p>
<?php } ?>