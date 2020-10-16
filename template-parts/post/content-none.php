<div class="o-container u-margin-bottom-40 o-single-post-<?php echo $layout; ?>">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12">
      <main role="main">
      <div class="o-container c-search-results u-margin-top-50 u-margin-bottom-70">
        <h2><?php echo apply_filters('_themename_no_posts_text', esc_html__('Whoops, something went wrong. Why not try searching for some interesting content.', '_themename')) ?></h2>
        <?php get_search_form( true ); ?>
      </div>
      </main>
    </div>
  </div>
</div>
