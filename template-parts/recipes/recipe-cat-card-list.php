<div class="o-row">
  <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium o-row__column--span-6@small recipe-card recipe-card--chicken">
      <div class="recipe-card__content">
        <?php
        $image = get_field('chicken_card_image', 916);
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="recipe-card__text">
          <h3><?php echo get_cat_name($category_id = 6); ?></h3>
          <p class="recipe-card__text-flex-height"><?php the_field('chicken_card_description', 916); ?></p>
          <?php $category_link = get_category_link(6); ?>
          <div class="recipe-card__btn">
            <a href="<?php echo esc_url($category_link); ?>"><?php the_field('recipe_card_link_text', 187); ?></a>
          </div>
        </div>
      </div>
  </div>

  <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium o-row__column--span-6@small recipe-card recipe-card--pork">
      <div class="recipe-card__content">
        <?php
        $image = get_field('pork_card_image', 916);
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="recipe-card__text">
          <h3><?php echo get_cat_name($category_id = 3); ?></h3>
          <div class="recipe-card__text-flex-height">
            <p><?php the_field('pork_card_description', 916); ?></p>
          </div>
          <?php $category_link = get_category_link(3); ?>
          <div class="recipe-card__btn">
            <a href="<?php echo esc_url($category_link); ?>"><?php the_field('recipe_card_link_text', 17); ?></a>
          </div>
        </div>
      </div>
  </div>

  <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium o-row__column--span-6@small recipe-card recipe-card--lamb">
      <div class="recipe-card__content">
        <?php
        $image = get_field('lamb_card_image', 916);
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="recipe-card__text">
        <h3><?php echo get_cat_name($category_id = 9); ?></h3>
          <div class="recipe-card__text-flex-height">
            <p><?php the_field('lamb_card_description', 916); ?></p>
          </div>
          <?php $category_link = get_category_link(9); ?>
          <div class="recipe-card__btn">
            <a href="<?php echo esc_url($category_link); ?>"><?php the_field('recipe_card_link_text', 206); ?></a>
          </div>
        </div>
      </div>
  </div>

  <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium o-row__column--span-6@small recipe-card recipe-card--beef">
      <div class="recipe-card__content">
        <?php
        $image = get_field('beef_card_image', 916);
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="recipe-card__text">
        <h3><?php echo get_cat_name($category_id = 11); ?></h3>
          <div class="recipe-card__text-flex-height">
            <p><?php the_field('beef_card_description', 916); ?></p>
          </div>
          <?php $category_link = get_category_link(11); ?>
          <div class="recipe-card__btn">
            <a href="<?php echo esc_url($category_link); ?>"><?php the_field('recipe_card_link_text', 200); ?></a>
          </div>
        </div>
      </div>
  </div>

  <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium o-row__column--span-6@small recipe-card recipe-card--seafood">
      <div class="recipe-card__content">
        <?php
        $image = get_field('seafood_card_image', 916);
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="recipe-card__text">
        <h3><?php echo get_cat_name($category_id = 8); ?></h3>
          <div class="recipe-card__text-flex-height">
            <p><?php the_field('seafood_card_description', 916); ?></p>
          </div>
          <?php $category_link = get_category_link(8); ?>
          <div class="recipe-card__btn">
            <a href="<?php echo esc_url($category_link); ?>"><?php the_field('recipe_card_link_text', 204); ?></a>
          </div>
        </div>
      </div>
  </div>

  <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium o-row__column--span-6@small recipe-card recipe-card--vegetarian">
      <div class="recipe-card__content">
        <?php
        $image = get_field('vegetarian_card_image', 916);
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="recipe-card__text">
          <h3><?php echo get_cat_name($category_id = 10); ?></h3>
          <p class="recipe-card__text-flex-height"><?php the_field('vegetarian_card_description', 916); ?></p>
          <?php $category_link = get_category_link(10); ?>
          <div class="recipe-card__btn">
            <a href="<?php echo esc_url($category_link); ?>"><?php the_field('recipe_card_link_text', 202); ?></a>
          </div>
        </div>
      </div>
  </div>
</div>