

### if conditional

```php
<?php
	$image_id = get_sub_field('group-section_repeater_image');
  $alt_text = get_post_meta($image_id , '_wp_attachment_image_alt', true);
?>

<?php if ( $image_id ) : ?>
	<img
		data-sizes="auto"
		alt="<?php echo $alt_text; ?>"
		data-src="<?php echo $image_url_s; ?>"
    
    class="img-object-fitimg-object-position--right-lazyload" 
	/>
<?php endif; ?>
```