/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sharer.js/sharer.js":
/*!******************************************!*\
  !*** ./node_modules/sharer.js/sharer.js ***!
  \******************************************/
/***/ (() => {

eval("/**\n * @preserve\n * Sharer.js\n *\n * @description Create your own social share buttons\n * @version 0.5.1\n * @author Ellison Leao <ellisonleao@gmail.com>\n * @license MIT\n *\n */\n\n(function (window, document) {\n  'use strict';\n  /**\n   * @constructor\n   */\n  var Sharer = function (elem) {\n    this.elem = elem;\n  };\n\n  /**\n   *  @function init\n   *  @description bind the events for multiple sharer elements\n   *  @returns {Empty}\n   */\n  Sharer.init = function () {\n    var elems = document.querySelectorAll('[data-sharer]'),\n      i,\n      l = elems.length;\n\n    for (i = 0; i < l; i++) {\n      elems[i].addEventListener('click', Sharer.add);\n    }\n  };\n\n  /**\n   *  @function add\n   *  @description bind the share event for a single dom element\n   *  @returns {Empty}\n   */\n  Sharer.add = function (elem) {\n    var target = elem.currentTarget || elem.srcElement;\n    var sharer = new Sharer(target);\n    sharer.share();\n  };\n\n  // instance methods\n  Sharer.prototype = {\n    constructor: Sharer,\n    /**\n     *  @function getValue\n     *  @description Helper to get the attribute of a DOM element\n     *  @param {String} attr DOM element attribute\n     *  @returns {String|Empty} returns the attr value or empty string\n     */\n    getValue: function (attr) {\n      var val = this.elem.getAttribute('data-' + attr);\n      // handing facebook hashtag attribute\n      if (val && attr === 'hashtag') {\n        if (!val.startsWith('#')) {\n          val = '#' + val;\n        }\n      }\n      return val === null ? '' : val;\n    },\n\n    /**\n     * @event share\n     * @description Main share event. Will pop a window or redirect to a link\n     * based on the data-sharer attribute.\n     */\n    share: function () {\n      var sharer = this.getValue('sharer').toLowerCase(),\n        sharers = {\n          facebook: {\n            shareUrl: 'https://www.facebook.com/sharer/sharer.php',\n            params: {\n              u: this.getValue('url'),\n              hashtag: this.getValue('hashtag'),\n              quote: this.getValue('quote'),\n            },\n          },\n          linkedin: {\n            shareUrl: 'https://www.linkedin.com/shareArticle',\n            params: {\n              url: this.getValue('url'),\n              mini: true,\n            },\n          },\n          twitter: {\n            shareUrl: 'https://twitter.com/intent/tweet/',\n            params: {\n              text: this.getValue('title'),\n              url: this.getValue('url'),\n              hashtags: this.getValue('hashtags'),\n              via: this.getValue('via'),\n            },\n          },\n          email: {\n            shareUrl: 'mailto:' + this.getValue('to'),\n            params: {\n              subject: this.getValue('subject'),\n              body: this.getValue('title') + '\\n' + this.getValue('url'),\n            },\n          },\n          whatsapp: {\n            shareUrl: this.getValue('web') === 'true' ? 'https://web.whatsapp.com/send' : 'https://wa.me/',\n            params: {\n              phone: this.getValue('to'),\n              text: this.getValue('title') + ' ' + this.getValue('url'),\n            },\n          },\n          telegram: {\n            shareUrl: 'https://t.me/share',\n            params: {\n              text: this.getValue('title'),\n              url: this.getValue('url'),\n            },\n          },\n          viber: {\n            shareUrl: 'viber://forward',\n            params: {\n              text: this.getValue('title') + ' ' + this.getValue('url'),\n            },\n          },\n          line: {\n            shareUrl:\n              'http://line.me/R/msg/text/?' + encodeURIComponent(this.getValue('title') + ' ' + this.getValue('url')),\n          },\n          pinterest: {\n            shareUrl: 'https://www.pinterest.com/pin/create/button/',\n            params: {\n              url: this.getValue('url'),\n              media: this.getValue('image'),\n              description: this.getValue('description'),\n            },\n          },\n          tumblr: {\n            shareUrl: 'http://tumblr.com/widgets/share/tool',\n            params: {\n              canonicalUrl: this.getValue('url'),\n              content: this.getValue('url'),\n              posttype: 'link',\n              title: this.getValue('title'),\n              caption: this.getValue('caption'),\n              tags: this.getValue('tags'),\n            },\n          },\n          hackernews: {\n            shareUrl: 'https://news.ycombinator.com/submitlink',\n            params: {\n              u: this.getValue('url'),\n              t: this.getValue('title'),\n            },\n          },\n          reddit: {\n            shareUrl: 'https://www.reddit.com/submit',\n            params: { url: this.getValue('url'), title: this.getValue('title') },\n          },\n          vk: {\n            shareUrl: 'http://vk.com/share.php',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n              description: this.getValue('caption'),\n              image: this.getValue('image'),\n            },\n          },\n          xing: {\n            shareUrl: 'https://www.xing.com/social/share/spi',\n            params: {\n              url: this.getValue('url'),\n            },\n          },\n          buffer: {\n            shareUrl: 'https://buffer.com/add',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n              via: this.getValue('via'),\n              picture: this.getValue('picture'),\n            },\n          },\n          instapaper: {\n            shareUrl: 'http://www.instapaper.com/edit',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n              description: this.getValue('description'),\n            },\n          },\n          pocket: {\n            shareUrl: 'https://getpocket.com/save',\n            params: {\n              url: this.getValue('url'),\n            },\n          },\n          mashable: {\n            shareUrl: 'https://mashable.com/submit',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n            },\n          },\n          mix: {\n            shareUrl: 'https://mix.com/add',\n            params: {\n              url: this.getValue('url'),\n            },\n          },\n          flipboard: {\n            shareUrl: 'https://share.flipboard.com/bookmarklet/popout',\n            params: {\n              v: 2,\n              title: this.getValue('title'),\n              url: this.getValue('url'),\n              t: Date.now(),\n            },\n          },\n          weibo: {\n            shareUrl: 'http://service.weibo.com/share/share.php',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n              pic: this.getValue('image'),\n              appkey: this.getValue('appkey'),\n              ralateUid: this.getValue('ralateuid'),\n              language: 'zh_cn',\n            },\n          },\n          blogger: {\n            shareUrl: 'https://www.blogger.com/blog-this.g',\n            params: {\n              u: this.getValue('url'),\n              n: this.getValue('title'),\n              t: this.getValue('description'),\n            },\n          },\n          baidu: {\n            shareUrl: 'http://cang.baidu.com/do/add',\n            params: {\n              it: this.getValue('title'),\n              iu: this.getValue('url'),\n            },\n          },\n          douban: {\n            shareUrl: 'https://www.douban.com/share/service',\n            params: {\n              name: this.getValue('name'),\n              href: this.getValue('url'),\n              image: this.getValue('image'),\n              comment: this.getValue('description'),\n            },\n          },\n          okru: {\n            shareUrl: 'https://connect.ok.ru/dk',\n            params: {\n              'st.cmd': 'WidgetSharePreview',\n              'st.shareUrl': this.getValue('url'),\n              title: this.getValue('title'),\n            },\n          },\n          mailru: {\n            shareUrl: 'http://connect.mail.ru/share',\n            params: {\n              share_url: this.getValue('url'),\n              linkname: this.getValue('title'),\n              linknote: this.getValue('description'),\n              type: 'page',\n            },\n          },\n          evernote: {\n            shareUrl: 'https://www.evernote.com/clip.action',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n            },\n          },\n          skype: {\n            shareUrl: 'https://web.skype.com/share',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n            },\n          },\n          delicious: {\n            shareUrl: 'https://del.icio.us/post',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n            },\n          },\n          sms: {\n            shareUrl: 'sms://',\n            params: {\n              body: this.getValue('body'),\n            },\n          },\n          trello: {\n            shareUrl: 'https://trello.com/add-card',\n            params: {\n              url: this.getValue('url'),\n              name: this.getValue('title'),\n              desc: this.getValue('description'),\n              mode: 'popup',\n            },\n          },\n          messenger: {\n            shareUrl: 'fb-messenger://share',\n            params: {\n              link: this.getValue('url'),\n            },\n          },\n          odnoklassniki: {\n            shareUrl: 'https://connect.ok.ru/dk',\n            params: {\n              st: {\n                cmd: 'WidgetSharePreview',\n                deprecated: 1,\n                shareUrl: this.getValue('url'),\n              },\n            },\n          },\n          meneame: {\n            shareUrl: 'https://www.meneame.net/submit',\n            params: {\n              url: this.getValue('url'),\n            },\n          },\n          diaspora: {\n            shareUrl: 'https://share.diasporafoundation.org',\n            params: {\n              title: this.getValue('title'),\n              url: this.getValue('url'),\n            },\n          },\n          googlebookmarks: {\n            shareUrl: 'https://www.google.com/bookmarks/mark',\n            params: {\n              op: 'edit',\n              bkmk: this.getValue('url'),\n              title: this.getValue('title'),\n            },\n          },\n          qzone: {\n            shareUrl: 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',\n            params: {\n              url: this.getValue('url'),\n            },\n          },\n          refind: {\n            shareUrl: 'https://refind.com',\n            params: {\n              url: this.getValue('url'),\n            },\n          },\n          surfingbird: {\n            shareUrl: 'https://surfingbird.ru/share',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n              description: this.getValue('description'),\n            },\n          },\n          yahoomail: {\n            shareUrl: 'http://compose.mail.yahoo.com',\n            params: {\n              to: this.getValue('to'),\n              subject: this.getValue('subject'),\n              body: this.getValue('body'),\n            },\n          },\n          wordpress: {\n            shareUrl: 'https://wordpress.com/wp-admin/press-this.php',\n            params: {\n              u: this.getValue('url'),\n              t: this.getValue('title'),\n              s: this.getValue('title'),\n            },\n          },\n          amazon: {\n            shareUrl: 'https://www.amazon.com/gp/wishlist/static-add',\n            params: {\n              u: this.getValue('url'),\n              t: this.getValue('title'),\n            },\n          },\n          pinboard: {\n            shareUrl: 'https://pinboard.in/add',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n              description: this.getValue('description'),\n            },\n          },\n          threema: {\n            shareUrl: 'threema://compose',\n            params: {\n              text: this.getValue('text'),\n              id: this.getValue('id'),\n            },\n          },\n          kakaostory: {\n            shareUrl: 'https://story.kakao.com/share',\n            params: {\n              url: this.getValue('url'),\n            },\n          },\n          yummly: {\n            shareUrl: 'http://www.yummly.com/urb/verify',\n            params: {\n              url: this.getValue('url'),\n              title: this.getValue('title'),\n              yumtype: 'button',\n            },\n          },\n        },\n        s = sharers[sharer];\n\n      // custom popups sizes\n      if (s) {\n        s.width = this.getValue('width');\n        s.height = this.getValue('height');\n      }\n      return s !== undefined ? this.urlSharer(s) : false;\n    },\n    /**\n     * @event urlSharer\n     * @param {Object} sharer\n     */\n    urlSharer: function (sharer) {\n      var p = sharer.params || {},\n        keys = Object.keys(p),\n        i,\n        str = keys.length > 0 ? '?' : '';\n      for (i = 0; i < keys.length; i++) {\n        if (str !== '?') {\n          str += '&';\n        }\n        if (p[keys[i]]) {\n          str += keys[i] + '=' + encodeURIComponent(p[keys[i]]);\n        }\n      }\n      sharer.shareUrl += str;\n\n      var isLink = this.getValue('link') === 'true';\n      var isBlank = this.getValue('blank') === 'true';\n\n      if (isLink) {\n        if (isBlank) {\n          window.open(sharer.shareUrl, '_blank');\n        } else {\n          window.location.href = sharer.shareUrl;\n        }\n      } else {\n        console.log(sharer.shareUrl);\n        // defaults to popup if no data-link is provided\n        var popWidth = sharer.width || 600,\n          popHeight = sharer.height || 480,\n          left = window.innerWidth / 2 - popWidth / 2 + window.screenX,\n          top = window.innerHeight / 2 - popHeight / 2 + window.screenY,\n          popParams = 'scrollbars=no, width=' + popWidth + ', height=' + popHeight + ', top=' + top + ', left=' + left,\n          newWindow = window.open(sharer.shareUrl, '', popParams);\n\n        if (window.focus) {\n          newWindow.focus();\n        }\n      }\n    },\n  };\n\n  // adding sharer events on domcontentload\n  if (document.readyState === 'complete' || document.readyState !== 'loading') {\n    Sharer.init();\n  } else {\n    document.addEventListener('DOMContentLoaded', Sharer.init);\n  }\n\n  // exporting sharer for external usage\n  window.Sharer = Sharer;\n})(window, document);\n\n\n//# sourceURL=webpack://unixecure_portal/./node_modules/sharer.js/sharer.js?");

/***/ }),

/***/ "./src/javascript/share.js":
/*!*********************************!*\
  !*** ./src/javascript/share.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sharer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sharer.js */ \"./node_modules/sharer.js/sharer.js\");\n/* harmony import */ var sharer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sharer_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst sharerBtn = document.querySelectorAll('.share > button');\r\nsharerBtn.forEach((share) => {\r\n    share.dataset.url = window.location.href;\r\n});\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/share.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/share.js");
/******/ 	
/******/ })()
;