<div class="c-hero__container">
  <?php if (wp_is_mobile()) : ?>
    <?php
    $image = get_field('gallery_header_image_mobile');
    $size = 'full'; // (thumbnail, medium, large, full or custom size)
    if ($image) {
      echo wp_get_attachment_image($image, $size);
    }
    ?>
  <?php else : ?>
    <?php
    $image = get_field('gallery_header_image');
    $size = 'full'; // (thumbnail, medium, large, full or custom size)
    if ($image) {
      echo wp_get_attachment_image($image, $size);
    }
    ?>
  <?php endif; ?>
  <div class="c-gallery__hero c-hero__content">
    <div class="o-container">
      <div class="c-hero__content">
        <div class="c-hero__content-text">
          <h1><?php the_field('gallery_header_text'); ?></h1>
        </div>
      </div>
    </div>
  </div>
</div>