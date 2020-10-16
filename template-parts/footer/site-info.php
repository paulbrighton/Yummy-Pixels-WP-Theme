<?php
$site_info = get_theme_mod('_themename_site_info', '');
$built_by_info = get_theme_mod('_themename_built_by_info', '');
?>

<?php if ($site_info) { ?>
  <div class="c-site-info">
    <div class="o-container">
      <div class="o-row">
        <div class="o-row__column o-row__column--span-6@small c-site-info__text">
          <?php
          $allowed = array('a' => array(
            'href'    =>  array(),
            'title'   =>  array()
          ));
          echo wp_kses($site_info, $allowed)
          ?>
        </div>
        <div class="o-row__column o-row__column--span-6@small c-built-by-info__text">
          <?php
          $allowed = array('a' => array(
            'href'    =>  array(),
            'title'   =>  array()
          ));
          echo wp_kses($built_by_info, $allowed)
          ?>
        </div>
      </div>
    </div>
  </div>
<?php } ?>