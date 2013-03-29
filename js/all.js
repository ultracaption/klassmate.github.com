/*global jQuery */
/*!	
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/
(function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this),n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n(),e(window).on("resize",n)})}})(jQuery),function(){var e;e=function(){return $(".mosaic").css("height",$(window).width()/4),$(".mosaic.x2").css("height",$(window).width()/2)},$(function(){return e(),$(window).resize(function(){return e()}),$(".mosaic.big_logo h1").fitText(.5,{minFontSize:"50px",maxFontSize:"150px"}),$(".mosaic p").fitText(1.5,{minFontSize:"15px",maxFontSize:"25px"})})}.call(this);