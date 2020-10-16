<article <?php post_class('c-post u-margin-bottom-20') ?>>
  <div class="c-post__inner">
    <div class="content">
      <?php if (get_field('travel_leg_1_title')) : ?>
        <h1><?php the_field('travel_leg_1_title'); ?></h1>

      <?php the_field('travel_leg_1_text'); ?>

        <?php
        $image = get_field('travel_leg_1_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      <?php endif; ?>

      <?php if (get_field('travel_leg_2_title')) : ?>
        <h1><?php the_field('travel_leg_2_title'); ?></h1>

        <?php the_field('travel_leg_2_text'); ?>
        
        <?php
        $image = get_field('travel_leg_2_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      <?php endif; ?>

      <?php if (get_field('travel_leg_3_title')) : ?>
        <h1><?php the_field('travel_leg_3_title'); ?></h1>

        <?php the_field('travel_leg_3_text'); ?>

        <?php
        $image = get_field('travel_leg_3_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      <?php endif; ?>
    </div>
  </div>
</article>