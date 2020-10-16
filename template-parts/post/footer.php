<footer class="c-post__footer">
  <?php if (has_category()) {
    echo '<div class="c-post__cats">';
    /* translators: , is used between categories */
    $cats_list = get_the_category_list(esc_html__(', ', '_themename'));
    /* translators: , %s is the categories list */
    printf(esc_html__('Posted in %s', '_themename'), $cats_list);
    echo '</div>';
  }
  ?>
</footer>