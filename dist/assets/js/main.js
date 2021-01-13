/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ "./src/assets/js/components/custom-select.js":
/*!***************************************************!*\
  !*** ./src/assets/js/components/custom-select.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log('teessssttttiiinngg');
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */

x = document.getElementsByClassName('custom-select');
l = x.length;
console.log(l);

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */

  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */

  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');

  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener('click', function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName('same-as-selected');
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class');
          }

          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }

      h.click();
    });
    b.appendChild(c);
  }

  x[i].appendChild(b);
  a.addEventListener('click', function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */


document.addEventListener('click', closeAllSelect);

/***/ }),

/***/ "./src/assets/js/components/navigation/hamburger-nav.js":
/*!**************************************************************!*\
  !*** ./src/assets/js/components/navigation/hamburger-nav.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var isOpen = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.openbtn').click(function () {
    if (isOpen === 0) {
      openNav();
    } else {
      closeNav();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.closebtn').click(function () {
    closeNav();
  });

  function openNav() {
    document.getElementById('myNav').style.width = '100%';
    isOpen = 1;
  }

  function closeNav() {
    document.getElementById('myNav').style.width = '0%';
    isOpen = 0;
  }
});

/***/ }),

/***/ "./src/assets/js/components/navigation/navigation.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/components/navigation/navigation.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).addClass('open');
  console.log('mouse enter');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).removeClass('open');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menu_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
  var menu_link = menu_button.parent();
  var menu_item = menu_link.parent();

  if (menu_item.hasClass('open')) {
    menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
    menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
    menu_item.addClass('open');
    menu_link.attr('aria-expanded', 'true');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-item.open').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation_hamburger_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/hamburger-nav */ "./src/assets/js/components/navigation/hamburger-nav.js");
/* harmony import */ var _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation */ "./src/assets/js/components/navigation/navigation.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./src/assets/js/slider.js");
/* harmony import */ var _components_custom_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/custom-select */ "./src/assets/js/components/custom-select.js");
/* harmony import */ var _components_custom_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_custom_select__WEBPACK_IMPORTED_MODULE_4__);




 // import webpackStream from 'webpack-stream'

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider').slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 3000
});

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/assets/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulbrighton/Sites/yummy-pixels-blog/wp-content/themes/yp-digital-fw/src/assets/js/main.js */"./src/assets/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9jdXN0b20tc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsIiQiLCJTbGljayIsIndpbmRvdyIsImluc3RhbmNlVWlkIiwiZWxlbWVudCIsInNldHRpbmdzIiwiXyIsImRhdGFTZXR0aW5ncyIsImRlZmF1bHRzIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwiYXBwZW5kQXJyb3dzIiwiYXBwZW5kRG90cyIsImFycm93cyIsImFzTmF2Rm9yIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJjc3NFYXNlIiwiY3VzdG9tUGFnaW5nIiwic2xpZGVyIiwiaSIsInRleHQiLCJkb3RzIiwiZG90c0NsYXNzIiwiZHJhZ2dhYmxlIiwiZWFzaW5nIiwiZWRnZUZyaWN0aW9uIiwiZmFkZSIsImZvY3VzT25TZWxlY3QiLCJmb2N1c09uQ2hhbmdlIiwiaW5maW5pdGUiLCJpbml0aWFsU2xpZGUiLCJsYXp5TG9hZCIsIm1vYmlsZUZpcnN0IiwicGF1c2VPbkhvdmVyIiwicGF1c2VPbkZvY3VzIiwicGF1c2VPbkRvdHNIb3ZlciIsInJlc3BvbmRUbyIsInJlc3BvbnNpdmUiLCJyb3dzIiwicnRsIiwic2xpZGUiLCJzbGlkZXNQZXJSb3ciLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImV4dGVuZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd1RpbWVyIiwiZGF0YSIsIm9wdGlvbnMiLCJvcmlnaW5hbFNldHRpbmdzIiwiZG9jdW1lbnQiLCJtb3pIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJhdXRvUGxheSIsInByb3h5IiwiYXV0b1BsYXlDbGVhciIsImF1dG9QbGF5SXRlcmF0b3IiLCJjaGFuZ2VTbGlkZSIsImNsaWNrSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJzZXRQb3NpdGlvbiIsInN3aXBlSGFuZGxlciIsImRyYWdIYW5kbGVyIiwia2V5SGFuZGxlciIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImluaXQiLCJwcm90b3R5cGUiLCJhY3RpdmF0ZUFEQSIsImZpbmQiLCJhdHRyIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwibGVuZ3RoIiwiYXBwZW5kVG8iLCJpbnNlcnRCZWZvcmUiLCJlcSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiY2hpbGRyZW4iLCJkZXRhY2giLCJhcHBlbmQiLCJlYWNoIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZSIsImhlaWdodCIsImFuaW1hdGVTbGlkZSIsInRhcmdldExlZnQiLCJjYWxsYmFjayIsImFuaW1Qcm9wcyIsImxlZnQiLCJ0b3AiLCJhbmltU3RhcnQiLCJkdXJhdGlvbiIsInN0ZXAiLCJub3ciLCJNYXRoIiwiY2VpbCIsImNzcyIsImNvbXBsZXRlIiwiY2FsbCIsImFwcGx5VHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJkaXNhYmxlVHJhbnNpdGlvbiIsImdldE5hdlRhcmdldCIsIm5vdCIsInRhcmdldCIsInNsaWNrIiwic2xpZGVIYW5kbGVyIiwidHJhbnNpdGlvbiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNsaWRlVG8iLCJidWlsZEFycm93cyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyIiwidGVzdCIsImFkZCIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJhIiwiYiIsImMiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwibWluIiwiaGFzT3duUHJvcGVydHkiLCJ1bnNsaWNrIiwicmVmcmVzaCIsInRyaWdnZXIiLCJldmVudCIsImRvbnRBbmltYXRlIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mZnNldCIsInVuZXZlbk9mZnNldCIsImlzIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwibiIsImNsZWFuVXBFdmVudHMiLCJvZmYiLCJpbnRlcnJ1cHQiLCJ2aXNpYmlsaXR5IiwiY2xlYW5VcFNsaWRlRXZlbnRzIiwib3JpZW50YXRpb25DaGFuZ2UiLCJyZXNpemUiLCJjbGVhblVwUm93cyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImRlc3Ryb3kiLCJyZW1vdmUiLCJmYWRlU2xpZGUiLCJzbGlkZUluZGV4Iiwib3BhY2l0eSIsImZhZGVTbGlkZU91dCIsImZpbHRlclNsaWRlcyIsInNsaWNrRmlsdGVyIiwiZmlsdGVyIiwiZm9jdXNIYW5kbGVyIiwib24iLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm9mZnNldExlZnQiLCJvdXRlcldpZHRoIiwiZ2V0T3B0aW9uIiwic2xpY2tHZXRPcHRpb24iLCJvcHRpb24iLCJpbmRleGVzIiwibWF4IiwicHVzaCIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiYWJzIiwiZ29UbyIsInNsaWNrR29UbyIsInBhcnNlSW50IiwiY3JlYXRpb24iLCJoYXNDbGFzcyIsInNldFByb3BzIiwic3RhcnRMb2FkIiwibG9hZFNsaWRlciIsImluaXRpYWxpemVFdmVudHMiLCJ1cGRhdGVBcnJvd3MiLCJpbml0QURBIiwibnVtRG90R3JvdXBzIiwidGFiQ29udHJvbEluZGV4ZXMiLCJ2YWwiLCJzbGlkZUNvbnRyb2xJbmRleCIsImluZGV4T2YiLCJhcmlhQnV0dG9uQ29udHJvbCIsIm1hcHBlZFNsaWRlSW5kZXgiLCJlbmQiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiYWN0aW9uIiwiaW5pdFVJIiwic2hvdyIsInRhZ05hbWUiLCJtYXRjaCIsImtleUNvZGUiLCJsb2FkUmFuZ2UiLCJjbG9uZVJhbmdlIiwicmFuZ2VTdGFydCIsInJhbmdlRW5kIiwibG9hZEltYWdlcyIsImltYWdlc1Njb3BlIiwiaW1hZ2UiLCJpbWFnZVNvdXJjZSIsImltYWdlU3JjU2V0IiwiaW1hZ2VTaXplcyIsImltYWdlVG9Mb2FkIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsInNsaWNlIiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwicHJvZ3Jlc3NpdmVMYXp5TG9hZCIsIm5leHQiLCJzbGlja05leHQiLCJwYXVzZSIsInNsaWNrUGF1c2UiLCJwbGF5Iiwic2xpY2tQbGF5IiwicG9zdFNsaWRlIiwiJGN1cnJlbnRTbGlkZSIsImZvY3VzIiwicHJldiIsInNsaWNrUHJldiIsInRyeUNvdW50IiwiJGltZ3NUb0xvYWQiLCJpbml0aWFsaXppbmciLCJsYXN0VmlzaWJsZUluZGV4IiwiY3VycmVudEJyZWFrcG9pbnQiLCJsIiwicmVzcG9uc2l2ZVNldHRpbmdzIiwidHlwZSIsInNwbGljZSIsInNvcnQiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3dEZWxheSIsInJlbW92ZVNsaWRlIiwic2xpY2tSZW1vdmUiLCJyZW1vdmVCZWZvcmUiLCJyZW1vdmVBbGwiLCJzZXRDU1MiLCJwb3NpdGlvbiIsInBvc2l0aW9uUHJvcHMiLCJ4IiwieSIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwib2Zmc2V0Iiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwidmFsdWUiLCJhcmd1bWVudHMiLCJvcHQiLCJib2R5U3R5bGUiLCJib2R5Iiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0b2dnbGUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsImhpZGUiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJyIiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJyb3VuZCIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJmbiIsImFyZ3MiLCJBcnJheSIsInJldCIsImFwcGx5IiwiY29uc29sZSIsImxvZyIsImoiLCJsbCIsInNlbEVsbW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwic2VsZWN0ZWRJbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiayIsInMiLCJoIiwic2wiLCJ5bCIsInBhcmVudE5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGljayIsImNsb3NlQWxsU2VsZWN0IiwibmV4dFNpYmxpbmciLCJjbGFzc0xpc3QiLCJlbG1udCIsInhsIiwiYXJyTm8iLCJpc09wZW4iLCJvcGVuTmF2IiwiY2xvc2VOYXYiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwic2libGluZ3MiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG4gICAgIF8gXyAgICAgIF8gICAgICAgX1xuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XG5cXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXG4gICAgICAgICAgICAgICAgICAgfF9fL1xuXG4gVmVyc2lvbjogMS44LjFcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxuIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcbiAgSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xuXG4gKi9cbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG5cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XG5cbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xuXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQoaSArIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xuXG4gICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xuICAgICAgICAgICAgXy5yb3dDb3VudCA9IDE7XG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XG5cbiAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLmRlZmF1bHRzLCBzZXR0aW5ncywgZGF0YVNldHRpbmdzKTtcblxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xuICAgICAgICAgICAgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xuICAgICAgICAgICAgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xuXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcblxuICAgICAgICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcbiAgICAgICAgICAgIF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87XG5cblxuICAgICAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGljaztcblxuICAgIH0oKSk7XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWFjdGl2ZScpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IChpbmRleCA+PSBfLnNsaWRlQ291bnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZEJlZm9yZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uKHRhcmdldExlZnQsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hc05hdkZvciA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJ29wYWNpdHkgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlUaW1lciA9IHNldEludGVydmFsKCBfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5hdXRvUGxheVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMSAmJiAoIF8uY3VycmVudFNsaWRlICsgMSApID09PSAoIF8uc2xpZGVDb3VudCAtIDEgKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG5cbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcblxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgZG90O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmZpbmQoJ2xpJykuZmlyc3QoKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xuXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG5cbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG5cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xuXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcblxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XG5cbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcblxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsU3R5bGluZycpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRsaXN0LmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYXBwZW5kKF8uJHNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfLmNsZWFuVXBSb3dzKCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgIF8udW5zbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICBpZighcmVmcmVzaCkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2Rlc3Ryb3knLCBbX10pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICcnO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJylcbiAgICAgICAgICAgIC5vbignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycsICcqJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgJHNmID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIGlmKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gMSArIE1hdGguY2VpbCgoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZXJRdHkgLSAxO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQsXG4gICAgICAgICAgICB2ZXJ0aWNhbEhlaWdodCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIHRhcmdldFNsaWRlLFxuICAgICAgICAgICAgY29lZjtcblxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcbiAgICAgICAgICAgICAgICBjb2VmID0gLTFcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMS41O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKHZlcnRpY2FsSGVpZ2h0ICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiBjb2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIC8gMikgLSAoKF8uc2xpZGVXaWR0aCAqIF8uc2xpZGVDb3VudCkgLyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxuICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhlcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcblxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcbiAgICAgICAgICAgICAgICB0YWJDb250cm9sSW5kZXhlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgPj0gMCkgJiYgKHZhbCA8IF8uc2xpZGVDb3VudCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLm5vdChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQ29udHJvbEluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXMuaW5kZXhPZihpKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYnBhbmVsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlQ29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgIHZhciBhcmlhQnV0dG9uQ29udHJvbCA9ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBzbGlkZUNvbnRyb2xJbmRleFxuICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBhcmlhQnV0dG9uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFiJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6IChpICsgMSkgKyAnIG9mICcgKyBudW1Eb3RHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgICAgICB9KS5lbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLmF0dHIoeyd0YWJpbmRleCc6ICcwJ30pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmFjdGl2YXRlQURBKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucGF1c2VPbkhvdmVyICkge1xuXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG5cbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdzdGFydCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnbW92ZSdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihfLnZpc2liaWxpdHlDaGFuZ2UsICQucHJveHkoXy52aXNpYmlsaXR5LCBfKSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub24oJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ub3JpZW50YXRpb25DaGFuZ2UsIF8pKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLnJlc2l6ZSwgXykpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vbignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG4gICAgICAgICQoXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5zaG93KCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmtleUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgIC8vRG9udCBzbGlkZSBpZiB0aGUgY3Vyc29yIGlzIGluc2lkZSB0aGUgZm9ybSBmaWVsZHMgYW5kIGFycm93IGtleXMgYXJlIHByZXNzZWRcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAnbmV4dCcgOiAgJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAncHJldmlvdXMnIDogJ25leHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZEltYWdlcyhpbWFnZXNTY29wZSkge1xuXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIGltYWdlc1Njb3BlKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGF6eScpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyY1NldCA9ICQodGhpcykuYXR0cignZGF0YS1zcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5jdXJyZW50U2xpZGUgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IE1hdGgubWF4KDAsIF8uY3VycmVudFNsaWRlIC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gMiArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpICsgXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5vcHRpb25zLmluZmluaXRlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIF8uY3VycmVudFNsaWRlIDogXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VTdGFydCA+IDApIHJhbmdlU3RhcnQtLTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcmFuZ2VTdGFydCAtIDEsXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcmFuZ2VFbmQsXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShwcmV2U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEobmV4dFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5pbml0VUkoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcblxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRTbGlkZSA9ICQoXy4kc2xpZGVzLmdldChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUHJldiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZCA9IGZ1bmN0aW9uKCB0cnlDb3VudCApIHtcblxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXG4gICAgICAgICAgICBpbWFnZVNyY1NldCxcbiAgICAgICAgICAgIGltYWdlU2l6ZXMsXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcblxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gaW1hZ2UuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRyeUNvdW50IDwgMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogdHJ5IHRvIGxvYWQgdGhlIGltYWdlIDMgdGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWxsSW1hZ2VzTG9hZGVkJywgWyBfIF0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCBpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XG5cbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG5cbiAgICAgICAgLy8gaW4gbm9uLWluZmluaXRlIHNsaWRlcnMsIHdlIGRvbid0IHdhbnQgdG8gZ28gcGFzdCB0aGVcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBsZXNzIHNsaWRlcyB0aGFuIHRvIHNob3csIGdvIHRvIHN0YXJ0LlxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcblxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcblxuICAgICAgICBfLmluaXQoKTtcblxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcblxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXG4gICAgICAgICAgICByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsO1xuXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xuXG4gICAgICAgICAgICBmb3IgKCBicmVha3BvaW50IGluIHJlc3BvbnNpdmVTZXR0aW5ncyApIHtcblxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcblxuICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XG4gICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XG5cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2luZ2xlIG9wdGlvbidzIHZhbHVlOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzZXQgb2YgcmVzcG9uc2l2ZSBvcHRpb25zOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIHVwZGF0aW5nIG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlIChub3QgcmVzcG9uc2l2ZSlcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcblxuICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSAncmVzcG9uc2l2ZScgJiYgJC50eXBlKCBhcmd1bWVudHNbMV0gKSA9PT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaW5nbGUnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3NpbmdsZScgKSB7XG5cbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xuXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcblxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcblxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcblxuICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldERpbWVuc2lvbnMoKTtcblxuICAgICAgICBfLnNldEhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICBpZiAoXy5wb3NpdGlvblByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnVzZUNTUyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdPVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ01velRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd3ZWJraXRUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnbXNUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0LCBhbGxTbGlkZXMsIGluZGV4T2Zmc2V0LCByZW1haW5kZXI7XG5cbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXG4gICAgICAgICAgICAuZmluZCgnLnNsaWNrLXNsaWRlJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgdmFyIGV2ZW5Db2VmID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAlIDIgPT09IDAgPyAxIDogMDtcblxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4IC0gY2VudGVyT2Zmc2V0ICsgZXZlbkNvZWYsIGluZGV4ICsgY2VudGVyT2Zmc2V0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgXy5sYXp5TG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXR1cEluZmluaXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gXy5zbGlkZUNvdW50OyBpID4gKF8uc2xpZGVDb3VudCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0b2dnbGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuaXMoJy5zbGljay1zbGlkZScpID9cbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XG5cbiAgICAgICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciB0YXJnZXRTbGlkZSwgYW5pbVNsaWRlLCBvbGRTbGlkZSwgc2xpZGVMZWZ0LCB0YXJnZXRMZWZ0ID0gbnVsbCxcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XG5cbiAgICAgICAgc3luYyA9IHN5bmMgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlICYmIF8ub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlICYmIF8uY3VycmVudFNsaWRlID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XG4gICAgICAgIHRhcmdldExlZnQgPSBfLmdldExlZnQodGFyZ2V0U2xpZGUpO1xuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8uY3VycmVudExlZnQgPSBfLnN3aXBlTGVmdCA9PT0gbnVsbCA/IHNsaWRlTGVmdCA6IF8uc3dpcGVMZWZ0O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGUgLSBfLnNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcblxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXNOYXZGb3IgKSB7XG5cbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBuYXZUYXJnZXQuc2xpY2soJ2dldFNsaWNrJyk7XG5cbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgICAgIG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzO1xuXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XG4gICAgICAgIHlEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFkgLSBfLnRvdWNoT2JqZWN0LmN1clk7XG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG5cbiAgICAgICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMzUpICYmIChzd2lwZUFuZ2xlIDw9IDEzNSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF8uc3dpcGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLnNjcm9sbGluZykge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcywgdmVydGljYWxTd2lwZUxlbmd0aDtcblxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcblxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xuICAgICAgICB9XG5cblxuICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiBfLm9wdGlvbnMuZWRnZUZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdG91Y2hlcztcblxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCAhPT0gMSB8fCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRYID0gXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJHNsaWRlc0NhY2hlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kcHJldkFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJG5leHRBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bnNsaWNrID0gZnVuY3Rpb24oZnJvbUJyZWFrcG9pbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCd1bnNsaWNrJywgW18sIGZyb21CcmVha3BvaW50XSk7XG4gICAgICAgIF8uZGVzdHJveSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmXG4gICAgICAgICAgICBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZURvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfO1xuICAgIH07XG5cbn0pKTtcbiIsImNvbnNvbGUubG9nKCd0ZWVzc3NzdHR0dGlpaW5uZ2cnKVxudmFyIHgsIGksIGosIGwsIGxsLCBzZWxFbG1udCwgYSwgYiwgY1xuLyogTG9vayBmb3IgYW55IGVsZW1lbnRzIHdpdGggdGhlIGNsYXNzIFwiY3VzdG9tLXNlbGVjdFwiOiAqL1xueCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1zZWxlY3QnKVxubCA9IHgubGVuZ3RoXG5jb25zb2xlLmxvZyhsKVxuZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICBzZWxFbG1udCA9IHhbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpWzBdXG4gIGxsID0gc2VsRWxtbnQubGVuZ3RoXG4gIC8qIEZvciBlYWNoIGVsZW1lbnQsIGNyZWF0ZSBhIG5ldyBESVYgdGhhdCB3aWxsIGFjdCBhcyB0aGUgc2VsZWN0ZWQgaXRlbTogKi9cbiAgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpXG4gIGEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWxlY3Qtc2VsZWN0ZWQnKVxuICBhLmlubmVySFRNTCA9IHNlbEVsbW50Lm9wdGlvbnNbc2VsRWxtbnQuc2VsZWN0ZWRJbmRleF0uaW5uZXJIVE1MXG4gIHhbaV0uYXBwZW5kQ2hpbGQoYSlcbiAgLyogRm9yIGVhY2ggZWxlbWVudCwgY3JlYXRlIGEgbmV3IERJViB0aGF0IHdpbGwgY29udGFpbiB0aGUgb3B0aW9uIGxpc3Q6ICovXG4gIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKVxuICBiLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VsZWN0LWl0ZW1zIHNlbGVjdC1oaWRlJylcbiAgZm9yIChqID0gMTsgaiA8IGxsOyBqKyspIHtcbiAgICAvKiBGb3IgZWFjaCBvcHRpb24gaW4gdGhlIG9yaWdpbmFsIHNlbGVjdCBlbGVtZW50LFxuICAgIGNyZWF0ZSBhIG5ldyBESVYgdGhhdCB3aWxsIGFjdCBhcyBhbiBvcHRpb24gaXRlbTogKi9cbiAgICBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJylcbiAgICBjLmlubmVySFRNTCA9IHNlbEVsbW50Lm9wdGlvbnNbal0uaW5uZXJIVE1MXG4gICAgYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvKiBXaGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCwgdXBkYXRlIHRoZSBvcmlnaW5hbCBzZWxlY3QgYm94LFxuICAgICAgICBhbmQgdGhlIHNlbGVjdGVkIGl0ZW06ICovXG4gICAgICB2YXIgeSwgaSwgaywgcywgaCwgc2wsIHlsXG4gICAgICBzID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpWzBdXG4gICAgICBzbCA9IHMubGVuZ3RoXG4gICAgICBoID0gdGhpcy5wYXJlbnROb2RlLnByZXZpb3VzU2libGluZ1xuICAgICAgZm9yIChpID0gMDsgaSA8IHNsOyBpKyspIHtcbiAgICAgICAgaWYgKHMub3B0aW9uc1tpXS5pbm5lckhUTUwgPT0gdGhpcy5pbm5lckhUTUwpIHtcbiAgICAgICAgICBzLnNlbGVjdGVkSW5kZXggPSBpXG4gICAgICAgICAgaC5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTFxuICAgICAgICAgIHkgPSB0aGlzLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2FtZS1hcy1zZWxlY3RlZCcpXG4gICAgICAgICAgeWwgPSB5Lmxlbmd0aFxuICAgICAgICAgIGZvciAoayA9IDA7IGsgPCB5bDsgaysrKSB7XG4gICAgICAgICAgICB5W2tdLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2FtZS1hcy1zZWxlY3RlZCcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaC5jbGljaygpXG4gICAgfSlcbiAgICBiLmFwcGVuZENoaWxkKGMpXG4gIH1cbiAgeFtpXS5hcHBlbmRDaGlsZChiKVxuICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAvKiBXaGVuIHRoZSBzZWxlY3QgYm94IGlzIGNsaWNrZWQsIGNsb3NlIGFueSBvdGhlciBzZWxlY3QgYm94ZXMsXG4gICAgYW5kIG9wZW4vY2xvc2UgdGhlIGN1cnJlbnQgc2VsZWN0IGJveDogKi9cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY2xvc2VBbGxTZWxlY3QodGhpcylcbiAgICB0aGlzLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC1oaWRlJylcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC1hcnJvdy1hY3RpdmUnKVxuICB9KVxufVxuXG5mdW5jdGlvbiBjbG9zZUFsbFNlbGVjdCAoZWxtbnQpIHtcbiAgLyogQSBmdW5jdGlvbiB0aGF0IHdpbGwgY2xvc2UgYWxsIHNlbGVjdCBib3hlcyBpbiB0aGUgZG9jdW1lbnQsXG4gIGV4Y2VwdCB0aGUgY3VycmVudCBzZWxlY3QgYm94OiAqL1xuICB2YXIgeCwgeSwgaSwgeGwsIHlsLCBhcnJObyA9IFtdXG4gIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QtaXRlbXMnKVxuICB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0LXNlbGVjdGVkJylcbiAgeGwgPSB4Lmxlbmd0aFxuICB5bCA9IHkubGVuZ3RoXG4gIGZvciAoaSA9IDA7IGkgPCB5bDsgaSsrKSB7XG4gICAgaWYgKGVsbW50ID09IHlbaV0pIHtcbiAgICAgIGFyck5vLnB1c2goaSlcbiAgICB9IGVsc2Uge1xuICAgICAgeVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtYXJyb3ctYWN0aXZlJylcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IHhsOyBpKyspIHtcbiAgICBpZiAoYXJyTm8uaW5kZXhPZihpKSkge1xuICAgICAgeFtpXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtaGlkZScpXG4gICAgfVxuICB9XG59XG5cbi8qIElmIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIHRoZSBzZWxlY3QgYm94LFxudGhlbiBjbG9zZSBhbGwgc2VsZWN0IGJveGVzOiAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFsbFNlbGVjdClcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChmdW5jdGlvbiAoKSB7XG4gIHZhciBpc09wZW4gPSAwXG4gICQoJy5vcGVuYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc09wZW4gPT09IDApIHtcbiAgICAgIG9wZW5OYXYoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZU5hdigpXG4gICAgfVxuICB9KVxuICAkKCcuY2xvc2VidG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VOYXYoKVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9wZW5OYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgaXNPcGVuID0gMVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VOYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzAlJ1xuICAgIGlzT3BlbiA9IDBcbiAgfVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJylcbiAgY29uc29sZS5sb2coJ21vdXNlIGVudGVyJylcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJylcbn0pXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnLm1lbnUgLm1lbnUtYnV0dG9uJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbGV0IG1lbnVfYnV0dG9uID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKVxuICBsZXQgbWVudV9pdGVtID0gbWVudV9saW5rLnBhcmVudCgpXG4gIGlmIChtZW51X2l0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJy5tZW51LWl0ZW0ub3BlbicpKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICB9IGVsc2Uge1xuICAgIG1lbnVfaXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG4gICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJylcbiAgICBtZW51X2xpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xuICBpZiAoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XG4gICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICB9XG59KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdidcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbidcbmltcG9ydCAnLi9zbGlkZXInXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jdXN0b20tc2VsZWN0J1xuLy8gaW1wb3J0IHdlYnBhY2tTdHJlYW0gZnJvbSAnd2VicGFjay1zdHJlYW0nIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCdcblxuJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgaW5maW5pdGU6IHRydWUsXG4gIGRvdHM6IHRydWUsXG4gIGFycm93czogZmFsc2UsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMzAwMFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=