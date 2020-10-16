<?php
$prev = get_previous_post();
$next = get_next_post();
?>

<?php if ($prev || $next) { ?>
  <nav class="c-post-navigation" role="navigation">
    <h2 class="u-screen-reader-text"><?php esc_html_e('Post Navigation', '_themename'); ?></h2>
    <div class="c-post-navigation__links">
      <?php if ($prev) { ?>
        <div class="c-post-navigation__post c-post-navigation__post--prev">
          <a class="c-post-navigation__link" href="<?php the_permalink($prev->ID) ?>">
            <div class="c-post-navigation__content">
              <span class="c-post-navigation__subtitle">
                <i class="fas fa-angle-left"></i>
                <?php esc_html_e('Previous Recipe', '_themename'); ?>
              </span>
              <span class="c-post-navigation__title">
                <?php echo esc_html(get_the_title($prev->ID)); ?>
              </span>
            </div>
          </a>
        </div>
      <?php } ?>
      <?php if ($next) { ?>
        <div class="c-post-navigation__post c-post-navigation__post--next">
          <a class="c-post-navigation__link" href="<?php the_permalink($next->ID) ?>">
            <div class="c-post-navigation__content">
              <span class="c-post-navigation__subtitle">
                <?php esc_html_e('Next Recipe', '_themename'); ?>
                <i class="fas fa-angle-right"></i>
              </span>
              <span class="c-post-navigation__title">
                <?php echo esc_html(get_the_title($next->ID)); ?>
              </span>
            </div>
          </a>
        </div>
      <?php } ?>
    </div>
  </nav>
<?php } ?>