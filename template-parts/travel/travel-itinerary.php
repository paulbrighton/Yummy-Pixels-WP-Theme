<?php if (get_field('travel_leg_1_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex c-itinerary--dark">
    <div class='c-itinerary__text c-itinerary--dark-text'>
      <h2><?php the_field('travel_leg_1_title') ?></h2>
      <div c-itinerary__main--day-text-p><?php the_field('travel_leg_1_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--dark-img'>
      <?php
      $image = get_field('travel_leg_1_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_2_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex u-flex-direction-row-reverse c-itinerary--light">
    <div class='c-itinerary__text c-itinerary--light-text'>
      <h2><?php the_field('travel_leg_2_title') ?></h2>
      <div c-itinerary__main--leg-text-p><?php the_field('travel_leg_2_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--light-img'>
      <?php
      $image = get_field('travel_leg_2_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_3_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex c-itinerary--dark">
    <div class='c-itinerary__text c-itinerary--dark-text'>
      <h2><?php the_field('travel_leg_3_title') ?></h2>
      <div c-itinerary__main--day-text-p><?php the_field('travel_leg_3_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--dark-img'>
      <?php
      $image = get_field('travel_leg_3_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_4_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex u-flex-direction-row-reverse c-itinerary--light">
    <div class='c-itinerary__text c-itinerary--light-text'>
      <h2><?php the_field('travel_leg_4_title') ?></h2>
      <div c-itinerary__main--leg-text-p><?php the_field('travel_leg_4_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--light-img'>
      <?php
      $image = get_field('travel_leg_4_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_5_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex c-itinerary--dark">
    <div class='c-itinerary__text c-itinerary--dark-text'>
      <h2><?php the_field('travel_leg_5_title') ?></h2>
      <div c-itinerary__main--day-text-p><?php the_field('travel_leg_5_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--dark-img'>
      <?php
      $image = get_field('travel_leg_5_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_6_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex u-flex-direction-row-reverse c-itinerary--light">
    <div class='c-itinerary__text c-itinerary--light-text'>
      <h2><?php the_field('travel_leg_6_title') ?></h2>
      <div c-itinerary__main--leg-text-p><?php the_field('travel_leg_6_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--light-img'>
      <?php
      $image = get_field('travel_leg_6_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_7_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex c-itinerary--dark">
    <div class='c-itinerary__text c-itinerary--dark-text'>
      <h2><?php the_field('travel_leg_7_title') ?></h2>
      <div c-itinerary__main--day-text-p><?php the_field('travel_leg_7_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--dark-img'>
      <?php
      $image = get_field('travel_leg_7_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_8_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex u-flex-direction-row-reverse c-itinerary--light">
    <div class='c-itinerary__text c-itinerary--light-text'>
      <h2><?php the_field('travel_leg_8_title') ?></h2>
      <div c-itinerary__main--leg-text-p><?php the_field('travel_leg_8_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--light-img'>
      <?php
      $image = get_field('travel_leg_8_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_9_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex c-itinerary--dark">
    <div class='c-itinerary__text c-itinerary--dark-text'>
      <h2><?php the_field('travel_leg_9_title') ?></h2>
      <div c-itinerary__main--day-text-p><?php the_field('travel_leg_9_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--dark-img'>
      <?php
      $image = get_field('travel_leg_9_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_10_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex u-flex-direction-row-reverse c-itinerary--light">
    <div class='c-itinerary__text c-itinerary--light-text'>
      <h2><?php the_field('travel_leg_10_title') ?></h2>
      <div c-itinerary__main--leg-text-p><?php the_field('travel_leg_10_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--light-img'>
      <?php
      $image = get_field('travel_leg_10_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_11_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex c-itinerary--dark">
    <div class='c-itinerary__text c-itinerary--dark-text'>
      <h2><?php the_field('travel_leg_11_title') ?></h2>
      <div c-itinerary__main--day-text-p><?php the_field('travel_leg_11_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--dark-img'>
      <?php
      $image = get_field('travel_leg_11_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_12_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex u-flex-direction-row-reverse c-itinerary--light">
    <div class='c-itinerary__text c-itinerary--light-text'>
      <h2><?php the_field('travel_leg_12_title') ?></h2>
      <div c-itinerary__main--leg-text-p><?php the_field('travel_leg_12_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--light-img'>
      <?php
      $image = get_field('travel_leg_12_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_13_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex c-itinerary--dark">
    <div class='c-itinerary__text c-itinerary--dark-text'>
      <h2><?php the_field('travel_leg_13_title') ?></h2>
      <div c-itinerary__main--day-text-p><?php the_field('travel_leg_13_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--dark-img'>
      <?php
      $image = get_field('travel_leg_13_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_14_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex u-flex-direction-row-reverse c-itinerary--light">
    <div class='c-itinerary__text c-itinerary--light-text'>
      <h2><?php the_field('travel_leg_14_title') ?></h2>
      <div c-itinerary__main--leg-text-p><?php the_field('travel_leg_14_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--light-img'>
      <?php
      $image = get_field('travel_leg_14_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_15_title')) { ?>
<div class='o-container--full'>
  <div class="u-flex c-itinerary--dark">
    <div class='c-itinerary__text c-itinerary--dark-text'>
      <h2><?php the_field('travel_leg_15_title') ?></h2>
      <div c-itinerary__main--day-text-p><?php the_field('travel_leg_15_text') ?></div>
    </div>
    <div class='c-itinerary__img c-itinerary--dark-img'>
      <?php
      $image = get_field('travel_leg_15_image');
      $size = 'full';
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php } ?>

<?php if (get_field('travel_leg_16_title')) { ?>
  <div class='o-container--full'>
    <div class="u-flex u-flex-direction-row-reverse c-itinerary--light">
      <div class='c-itinerary__text c-itinerary--light-text'>
        <h2><?php the_field('travel_leg_16_title') ?></h2>
        <div c-itinerary__main--leg-text-p><?php the_field('travel_leg_16_text') ?></div>
      </div>
      <div class='c-itinerary__img c-itinerary--light-img'>
        <?php
        $image = get_field('travel_leg_16_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>
<?php } ?>