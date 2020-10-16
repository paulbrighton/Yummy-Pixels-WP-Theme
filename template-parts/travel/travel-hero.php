<div class="c-itinerary__header">
  <?php if (wp_is_mobile()) : ?>
    <?php
    $image = get_field('travel_header_image_mobile');
    $size = 'full'; // (thumbnail, medium, large, full or custom size)
    if ($image) {
      echo wp_get_attachment_image($image, $size);
    }
    ?>
  <?php else : ?>
    <?php
    $image = get_field('travel_header_image');
    $size = 'full'; // (thumbnail, medium, large, full or custom size)
    if ($image) {
      echo wp_get_attachment_image($image, $size);
    }
    ?>
  <?php endif; ?>
</div>