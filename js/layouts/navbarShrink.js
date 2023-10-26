"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.navbarShrink=void 0;var _utils=require("../utils.js");function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,a){var t;if(r)return"string"==typeof r?_arrayLikeToArray(r,a):"Map"===(t="Object"===(t=Object.prototype.toString.call(r).slice(8,-1))&&r.constructor?r.constructor.name:t)||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=r[t];return n}var navbarShrink=exports.navbarShrink={navbarDom:document.querySelector(".navbar-container"),leftAsideDom:document.querySelector(".page-aside"),isnavbarShrink:!1,navbarHeight:0,init:function(){var r=this;this.navbarHeight=this.navbarDom.getBoundingClientRect().height,this.shrink(),this.togglenavbarDrawerShow(),window.addEventListener("scroll",function(){r.shrink()})},shrink:function(){var r=document.documentElement.scrollTop||document.body.scrollTop;!this.isnavbarShrink&&r>this.navbarHeight?(this.isnavbarShrink=!0,document.body.classList.add("navbar-shrink")):this.isnavbarShrink&&r<=this.navbarHeight&&(this.isnavbarShrink=!1,document.body.classList.remove("navbar-shrink"))},togglenavbarDrawerShow:function(){var r=[document.querySelector(".window-mask"),document.querySelector(".navbar-bar")],r=(document.querySelector(".navbar-drawer")&&r.push.apply(r,_toConsumableArray(document.querySelectorAll(".navbar-drawer .drawer-navbar-list .drawer-navbar-item"))),r.forEach(function(r){r.dataset.navbarInitialized||(r.dataset.navbarInitialized=1,r.addEventListener("click",function(){document.body.classList.toggle("navbar-drawer-show")}))}),document.querySelector(".navbar-container .navbar-content .logo-title"));r&&!r.dataset.navbarInitialized&&(r.dataset.navbarInitialized=1,r.addEventListener("click",function(){document.body.classList.remove("navbar-drawer-show")}))}};swup.hooks.on("page:view",function(){navbarShrink.init(),_utils.navigationState.isNavigating=!1}),swup.hooks.on("visit:start",function(){_utils.navigationState.isNavigating=!0,document.body.classList.remove("navbar-shrink")}),document.addEventListener("DOMContentLoaded",function(){navbarShrink.init()});