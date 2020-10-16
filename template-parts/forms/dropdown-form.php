<?php $defaults = array(
  'show_option_none'  => 'Choose a Category...',
  'option_none_value'  => '',
  'exclude'           => '4',
  'required'          => true,
); ?>
<?php wp_dropdown_categories($defaults); ?>