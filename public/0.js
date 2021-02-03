(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Main/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Main/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: '#ntext',
      opacity: 1,
      duration: 3000,
      translateX: 800
    });
    var btn = document.getElementById('cta');
    var btn2 = document.getElementById('cta2');

    btn.onclick = function () {
      var morphing = Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: '.polymorph',
        points: [{
          value: '215, 110 0, 110 0, 0 47.7, 0 67, 76'
        }, {
          value: '215, 110 0, 110 0, 0 0, 0 67, 76'
        }],
        easing: 'easeOutQuad',
        duration: 1200,
        loop: false
      });
      Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: '#blip',
        opacity: 1,
        duration: 3000,
        translateY: 150
      });
      var promise = morphing.finished.then(function () {
        btn2.onclick = function () {
          var morphing = Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: '.polymorph',
            points: [{
              value: '215, 110 0, 110 0, 0 47.7, 0 67, 76'
            }, {
              value: '215,110 0,110 0,0 49.3,0 215,0'
            }],
            easing: 'easeOutQuad',
            duration: 1200,
            loop: false
          });
          Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: '#blip',
            opacity: 0,
            duration: 3000,
            translateY: -800
          });
        };
      });
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  scroll-behavior: smooth;\n}\nbody {\n  margin: 0;\n  font-family: \"Montserrat\";\n}\n.polymorph {\n  fill: #398f5a;\n}\n#cta{\n  position: absolute;\n  margin: 15em 10em 0;\n  left: 0;\n  right: 0;\n  width: 20%;\n  background: none;\n  border-radius: 15px;\n  padding: 15px;\n  font-size: 1.5em;\n  cursor: pointer;\n  outline: 0;\n  -webkit-animation: shadow-pulse 1s infinite;\n          animation: shadow-pulse 1s infinite;\n  cursor:pointer;\n}\n@-webkit-keyframes shadow-pulse\n{\n0% {\n    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.2);\n}\n100% {\n    box-shadow: 0 0 0 35px rgba(255, 255, 255, 0);\n}\n}\n@keyframes shadow-pulse\n{\n0% {\n    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.2);\n}\n100% {\n    box-shadow: 0 0 0 35px rgba(255, 255, 255, 0);\n}\n}\n#cta2{\n  position: absolute;\n  margin: 15em 10em 0;\n  left: 0;\n  right: 0;\n  width: 20%;\n  background: none;\n  border: 2px dashed #e7e3d8;\n  border-radius: 15px;\n  padding: 15px;\n  color: #e7e3d8;\n  font-size: 1.5em;\n  cursor: pointer;\n  outline: 0;\n}\n#cta2{\n  width: auto;\n  margin: 30px auto;\n  background: #398f5a;\n}\n#ntext{\n  position: absolute;\n  color: #e7e3d8;\n  left:  0;\n  top: 15%;\n  opacity: 0;\n  width: 45%;\n  transform: translateX(-500px);\n}\n#blip{\n  position: absolute;\n  color: #398f5a;\n  right:  15%;\n  top: 0%;\n  opacity: 0;\n  width: 45%;\n  transform: translateY(-800px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Main/Index.vue?vue&type=template&id=01e54d45&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Main/Index.vue?vue&type=template&id=01e54d45& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "w-full" }, [
      _c("img", {
        attrs: {
          id: "cta",
          src: _vm.$page.props.app.url + "/images/nasi_lemak.png"
        }
      }),
      _vm._v(" "),
      _c("svg", { attrs: { viewBox: "0 0 215 110" } }, [
        _c("polygon", {
          staticClass: "polymorph",
          attrs: { points: "215,110 0,110 0,0 49.3,0 215,0" }
        })
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "ntext" } }, [
      _c("p", { staticClass: "text-8xl italic" }, [_vm._v("Nasi Lemak!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "blip" } }, [
      _c("h1", { staticClass: "text-3xl underline italic mb-4" }, [
        _vm._v("Nasi Lemak")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-xl italic" }, [
        _vm._v(
          "\n                A dish originating in Malay cuisine that consists of fragrant rice cooked in coconut milk and pandan leaf. It is commonly found in Malaysia, where it is considered the national dish.\n                It is also the native dish in neighbouring areas with significant Malay populations such as Singapore, Brunei, and Southern Thailand. In Indonesia it can be found in several parts of Sumatra;\n                especially the Malay regions of Riau, Riau Islands and Medan. Nasi lemak can also be found in the Bangsamoro region of Mindanao, prepared by Filipino Moros, as well as Australia's external \n                territories of Christmas Island and the Cocos (Keeling) Islands. It is considered one of the most famous dishes for a Malay-style breakfast.\n            "
        )
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "italic", attrs: { id: "cta2" } }, [
        _vm._v("Yummy!")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full" }, [
      _c("p", { staticClass: "text-8xl italic" }, [_vm._v("Nasi Lekkkmak!")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-8xl italic" }, [_vm._v("Nasi Lekkkmak!")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-8xl italic" }, [_vm._v("Nasi Lemkkkak!")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-8xl italic" }, [_vm._v("Nasi Lemakkkk!")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-8xl italic" }, [_vm._v("Nasi Lemkkkak!")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Main/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Main/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_01e54d45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=01e54d45& */ "./resources/js/Pages/Main/Index.vue?vue&type=template&id=01e54d45&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Main/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_01e54d45___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_01e54d45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Main/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Main/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Main/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Main/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Main/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Main/Index.vue?vue&type=template&id=01e54d45&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Main/Index.vue?vue&type=template&id=01e54d45& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_01e54d45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=01e54d45& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Main/Index.vue?vue&type=template&id=01e54d45&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_01e54d45___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_01e54d45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);