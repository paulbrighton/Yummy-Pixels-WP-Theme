<?php get_header(); ?>
<div class="o-container c-search-results u-margin-top-50 u-margin-bottom-50">
  <?php
  $s = get_search_query();
  $args = array(
    's' => $s
  );
  ?>


  <?php
  $the_query = new WP_Query($args);
  if ($the_query->have_posts()) {
    _e("<h2>Search Results for: " . get_query_var('s') . "</h2>");
    while ($the_query->have_posts()) {
      $the_query->the_post();
  ?>

      <li>
        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
      </li>

    <?php
    }
    ?>
    <h3>Or why not browser our recipes...</h3>

    <?php get_template_part('template-parts/recipes/recipe-cat-card-list', '_themename') ?>

    <?php
  } else {
    ?>

    <h2>No Results Found</h2>
    <div class="alert alert-info">
      <p>Sorry, but nothing matched your search criteria. Please try again with some different keywords.</p>
      <?php get_search_form(true); ?>
      <h3>Or why not browser our recipes...</h3>

    <?php get_template_part('template-parts/recipes/recipe-cat-card-list', '_themename') ?>
    </div>

  <?php } ?>
</div>
<?php get_footer(); ?>