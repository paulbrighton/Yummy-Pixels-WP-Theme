import $ from 'jquery'
import 'slick-carousel'

$('.slider').slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 3000
})
