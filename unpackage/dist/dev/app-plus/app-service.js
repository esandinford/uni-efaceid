(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************************************!*\
  !*** /Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/main.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************************************************!*\
  !*** /Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/pages.json ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!***************************************************************************************************!*\
  !*** /Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/pages/index/index.vue?mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************!*\
  !*** /Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", {}, [
      _c("image", {
        staticClass: _vm._$s(2, "sc", "esand_logo"),
        attrs: {
          src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../static/esand_logo.png */ 5)),
          _i: 2
        }
      })
    ]),
    _c("view", { staticClass: _vm._$s(3, "sc", "btn-row"), attrs: { _i: 3 } }, [
      _c("button", {
        staticClass: _vm._$s(4, "sc", "primary item"),
        attrs: { _i: 4 },
        on: {
          click: function($event) {
            return _vm.startVerify()
          }
        }
      })
    ]),
    _c("div", {}, [
      _c("textarea", {
        attrs: { value: _vm._$s(6, "a-value", _vm.msg), _i: 6 }
      })
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***************************************************************************************!*\
  !*** /Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/static/esand_logo.png ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/esand_logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9lc2FuZF9sb2dvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************************!*\
  !*** /Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar livingDetection = uni.requireNativePlugin(\"Esand-LivingDetection\");\n// TODO 替换成您自己的APPCODE(切勿泄漏), 如何获取APPCODE,可参考：https://esandinfo.yuque.com/docs/share/13ad611e-b9c3-4cf8-a9a8-fe23a419312e?#\nvar APPCODE = '替换为你的appcode';var _default =\n{\n  data: function data() {\n    return {\n      msg: 'logs' };\n\n  },\n  methods: {\n    startVerify: function startVerify(e) {\n      /**\n                                          * @param options(JSONObject), 包括如下字段：\n                                          *     livingType：认证类型  1：远近，2：眨眼，3：摇头，4: 点头，5:张嘴，7:高性能远近，8：高性能摇头，9：高性能点头，可以是活体组合，如：123--先远近，后眨眼，后摇头，活体组合最多四个\n                                          *     textColor：界面样式-字体颜色\n                                          *     progressColor：界面样式-进度条颜色\n                                          *     progressBgColor：界面样式-进度条背景颜色\n                                          *     progressStaGradient：界面样式-进度条渐变开始颜色\n                                          *     progressEndGradient：界面样式-进度条渐变结束颜色\n                                          *     backGroundColor：界面样式-页面背景颜色\n                                          *     circleBackWidth：界面样式-进度条宽度\n                                          * @return livingDetectResult 对象包括如下几个字段\n                                          * {\n                                          *\t\t\"code\": ”ELD_SUCCESS“, -- ELD_SUCCESS：成功，ELD_FAILED：失败，ELD_PARAME_ERROR：参数异常，ELD_EXCEPTION：发生异常，ELD_UNSUPPORT：不支持此活体类型\n                                          * \t\t\"msg\":”成功“, -- 执行结果描述\n                                          * \t\t\"data\": \"......\" -- 执行结果数据\n                                          * }\n                                          */\n      var livingDetectResult = livingDetection.verifyInit({ \"livingType\": \"134\",\n        \"progressStaGradient\": \"#1781b5\",\n        \"progressEndGradient\": \"#66a9c9\",\n        \"progressBgColor\": \"#DDDDDD\",\n        \"backGroundColor\": \"#FFFFFF\",\n        \"textColor\": \"#222222\",\n        \"progressColor\": \"#0000FF\",\n        \"circleBackWidth\": 5 });\n      if (livingDetectResult.code != 'ELD_SUCCESS') {\n        this.msg = '活体检测初始化失败：' + livingDetectResult.msg;\n        return;\n      }\n\n      var that = this;\n      /**\n                        * 2. 请求阿里云初始化接口获取token（为了保护APPCODE,次端逻辑应该放在服务器端）\n                        * 参考文档：https://market.aliyun.com/products/57124001/cmapi00046021.html#sku=yuncode4002100001\n                        */\n      uni.request({\n        url: 'https://eface.market.alicloudapi.com/init',\n        method: 'POST',\n        header: {\n          'Authorization': 'APPCODE ' + APPCODE,\n          'X-Ca-Nonce': that.randomString(8), // 防重放攻击\n          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },\n\n        data: {\n          //初始化接口返回参数\n          'initMsg': livingDetectResult.data },\n\n        success: function success(res) {\n          if (res.data.code != '0000') {\n            that.msg = '获取token失败：' + res.data.msg;\n            return;\n          }\n\n          /**\n             * 3. 发起活体检测\n             */\n          livingDetection.startLivingDetect({ \"token\": res.data.token }, function (livingDetectResult) {\n            /**\n                                                                                                         * livingDetectResult 对象包括如下几个字段\n                                                                                                         * {\n                                                                                                         *    \"code\": ”ELD_SUCCESS“, -- ELD_SUCCESS：成功，ELD_FAILED：失败，ELD_PARAME_ERROR：参数异常，ELD_EXCEPTION：发生异常，ELD_TIMEOUT：执行超时，ELD_PERMISSION：无法获取相机授权，ELD_CANCEL: 用户主动退出\n                                                                                                         *    \"msg\":”成功“, -- 执行结果描述\n                                                                                                         *    \"data\": \"......\" -- 执行结果数据\n                                                                                                         *    \"token\": \"\" -- 本次认证token\n                                                                                                         * }\n                                                                                                         */\n\n            /**\n                                                                                                             * 4. 请求阿里云获取服务器端活体检测结果（为了保护APPCODE,次端逻辑应该放在服务器端）\n                                                                                                             * 参考文档：https://market.aliyun.com/products/57124001/cmapi00046021.html#sku=yuncode4002100001\n                                                                                                             */\n            uni.request({\n              url: 'https://eface.market.alicloudapi.com/verify',\n              method: 'POST',\n              header: {\n                'Authorization': 'APPCODE ' + APPCODE,\n                'X-Ca-Nonce': that.randomString(8), // 防重放攻击\n                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },\n\n              data: {\n                //初始化接口返回参数\n                \"token\": livingDetectResult.token,\n                'verifyMsg': livingDetectResult.data },\n\n              success: function success(res) {\n                that.msg = JSON.stringify(res.data);\n              },\n              //发生网络请求错误,如appcode不正确\n              fail: function fail(res) {\n                __f__(\"error\", '网络请求失败' + JSON.stringify(res), \" at pages/index/index.vue:118\");\n                return JSON.stringify(res.data);\n              } });\n\n          });\n        },\n        //发生网络请求错误,如appcode不正确\n        fail: function fail(res) {\n          __f__(\"error\", '网络请求失败' + JSON.stringify(res), \" at pages/index/index.vue:126\");\n          return JSON.stringify(res.data);\n        } });\n\n    },\n    randomString: function randomString(len) {\n      len = len || 32;\n      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';\n      var maxPos = $chars.length;\n      var randomStr = '';\n      for (var i = 0; i < len; i++) {\n        randomStr += $chars.charAt(Math.floor(Math.random() * maxPos));\n      }\n\n      randomStr = 'LDT_' + randomStr;\n      return randomStr;\n    },\n    radioChange: function radioChange(evt) {\n      for (var i = 0; i < this.items.length; i++) {\n        if (this.items[i].value === evt.target.value) {\n          this.livingType = i + 1;\n          break;\n        }\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 8)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImxpdmluZ0RldGVjdGlvbiIsInVuaSIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJBUFBDT0RFIiwiZGF0YSIsIm1zZyIsIm1ldGhvZHMiLCJzdGFydFZlcmlmeSIsImUiLCJsaXZpbmdEZXRlY3RSZXN1bHQiLCJ2ZXJpZnlJbml0IiwiY29kZSIsInRoYXQiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwicmFuZG9tU3RyaW5nIiwic3VjY2VzcyIsInJlcyIsInN0YXJ0TGl2aW5nRGV0ZWN0IiwidG9rZW4iLCJKU09OIiwic3RyaW5naWZ5IiwiZmFpbCIsImxlbiIsIiRjaGFycyIsIm1heFBvcyIsImxlbmd0aCIsInJhbmRvbVN0ciIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYWRpb0NoYW5nZSIsImV2dCIsIml0ZW1zIiwidmFsdWUiLCJ0YXJnZXQiLCJsaXZpbmdUeXBlIl0sIm1hcHBpbmdzIjoicUlBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUUsSUFBTUEsZUFBZSxHQUFHQyxHQUFHLENBQUNDLG1CQUFKLENBQXdCLHVCQUF4QixDQUF4QjtBQUNBO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLGNBQWhCLEM7QUFDZTtBQUNiQyxNQURhLGtCQUNOO0FBQ0wsV0FBTztBQUNMQyxTQUFHLEVBQUUsTUFEQSxFQUFQOztBQUdELEdBTFk7QUFNYkMsU0FBTyxFQUFFO0FBQ1BDLGVBQVcsRUFBRSxxQkFBU0MsQ0FBVCxFQUFZO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxVQUFJQyxrQkFBa0IsR0FBR1QsZUFBZSxDQUFDVSxVQUFoQixDQUEyQixFQUFDLGNBQWEsS0FBZDtBQUMxRCwrQkFBc0IsU0FEb0M7QUFFMUQsK0JBQXNCLFNBRm9DO0FBRzFELDJCQUFrQixTQUh3QztBQUkxRCwyQkFBa0IsU0FKd0M7QUFLMUQscUJBQVksU0FMOEM7QUFNMUQseUJBQWdCLFNBTjBDO0FBTzFELDJCQUFrQixDQVB3QyxFQUEzQixDQUF6QjtBQVFBLFVBQUlELGtCQUFrQixDQUFDRSxJQUFuQixJQUEyQixhQUEvQixFQUE4QztBQUM1QyxhQUFLTixHQUFMLEdBQVcsZUFBZUksa0JBQWtCLENBQUNKLEdBQTdDO0FBQ0E7QUFDRDs7QUFFRCxVQUFJTyxJQUFJLEdBQUcsSUFBWDtBQUNBOzs7O0FBSUFYLFNBQUcsQ0FBQ1ksT0FBSixDQUFZO0FBQ1ZDLFdBQUcsRUFBRSwyQ0FESztBQUVWQyxjQUFNLEVBQUUsTUFGRTtBQUdWQyxjQUFNLEVBQUU7QUFDTiwyQkFBaUIsYUFBYWIsT0FEeEI7QUFFTix3QkFBY1MsSUFBSSxDQUFDSyxZQUFMLENBQWtCLENBQWxCLENBRlIsRUFFK0I7QUFDckMsMEJBQWdCLGtEQUhWLEVBSEU7O0FBUVZiLFlBQUksRUFBRTtBQUNKO0FBQ0EscUJBQVdLLGtCQUFrQixDQUFDTCxJQUYxQixFQVJJOztBQVlWYyxlQUFPLEVBQUUsaUJBQUNDLEdBQUQsRUFBUztBQUNoQixjQUFJQSxHQUFHLENBQUNmLElBQUosQ0FBU08sSUFBVCxJQUFpQixNQUFyQixFQUE2QjtBQUMzQkMsZ0JBQUksQ0FBQ1AsR0FBTCxHQUFXLGVBQWFjLEdBQUcsQ0FBQ2YsSUFBSixDQUFTQyxHQUFqQztBQUNBO0FBQ0Q7O0FBRUQ7OztBQUdBTCx5QkFBZSxDQUFDb0IsaUJBQWhCLENBQWtDLEVBQUMsU0FBUUQsR0FBRyxDQUFDZixJQUFKLENBQVNpQixLQUFsQixFQUFsQyxFQUEyRCxVQUFTWixrQkFBVCxFQUE2QjtBQUN0Rjs7Ozs7Ozs7OztBQVVBOzs7O0FBSUFSLGVBQUcsQ0FBQ1ksT0FBSixDQUFZO0FBQ1ZDLGlCQUFHLEVBQUUsNkNBREs7QUFFVkMsb0JBQU0sRUFBRSxNQUZFO0FBR1ZDLG9CQUFNLEVBQUU7QUFDTixpQ0FBaUIsYUFBYWIsT0FEeEI7QUFFTiw4QkFBY1MsSUFBSSxDQUFDSyxZQUFMLENBQWtCLENBQWxCLENBRlIsRUFFK0I7QUFDckMsZ0NBQWdCLGtEQUhWLEVBSEU7O0FBUVZiLGtCQUFJLEVBQUU7QUFDSjtBQUNBLHlCQUFTSyxrQkFBa0IsQ0FBQ1ksS0FGeEI7QUFHSiw2QkFBYVosa0JBQWtCLENBQUNMLElBSDVCLEVBUkk7O0FBYVZjLHFCQUFPLEVBQUUsaUJBQUNDLEdBQUQsRUFBUztBQUNoQlAsb0JBQUksQ0FBQ1AsR0FBTCxHQUFXaUIsSUFBSSxDQUFDQyxTQUFMLENBQWVKLEdBQUcsQ0FBQ2YsSUFBbkIsQ0FBWDtBQUNELGVBZlM7QUFnQnRCO0FBQ0FvQixrQkFBSSxFQUFFLGNBQUFMLEdBQUcsRUFBSTtBQUNaLCtCQUFjLFdBQVdHLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixHQUFmLENBQXpCO0FBQ0EsdUJBQU9HLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixHQUFHLENBQUNmLElBQW5CLENBQVA7QUFDQSxlQXBCcUIsRUFBWjs7QUFzQkQsV0FyQ0Q7QUFzQ0QsU0EzRFM7QUE0RGhCO0FBQ0FvQixZQUFJLEVBQUUsY0FBQUwsR0FBRyxFQUFJO0FBQ1oseUJBQWMsV0FBV0csSUFBSSxDQUFDQyxTQUFMLENBQWVKLEdBQWYsQ0FBekI7QUFDQSxpQkFBT0csSUFBSSxDQUFDQyxTQUFMLENBQWVKLEdBQUcsQ0FBQ2YsSUFBbkIsQ0FBUDtBQUNBLFNBaEVlLEVBQVo7O0FBa0VELEtBdkdNO0FBd0dQYSxnQkFBWSxFQUFFLHNCQUFTUSxHQUFULEVBQWM7QUFDMUJBLFNBQUcsR0FBR0EsR0FBRyxJQUFJLEVBQWI7QUFDQSxVQUFJQyxNQUFNLEdBQUcsa0RBQWI7QUFDQSxVQUFJQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsTUFBcEI7QUFDQSxVQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLEdBQXBCLEVBQXlCSyxDQUFDLEVBQTFCLEVBQThCO0FBQzVCRCxpQkFBUyxJQUFJSCxNQUFNLENBQUNLLE1BQVAsQ0FBY0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlAsTUFBM0IsQ0FBZCxDQUFiO0FBQ0Q7O0FBRURFLGVBQVMsR0FBRyxTQUFTQSxTQUFyQjtBQUNBLGFBQU9BLFNBQVA7QUFDRCxLQW5ITTtBQW9IUE0sZUFBVyxFQUFFLHFCQUFTQyxHQUFULEVBQWM7QUFDekIsV0FBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtPLEtBQUwsQ0FBV1QsTUFBL0IsRUFBdUNFLENBQUMsRUFBeEMsRUFBNEM7QUFDMUMsWUFBSSxLQUFLTyxLQUFMLENBQVdQLENBQVgsRUFBY1EsS0FBZCxLQUF3QkYsR0FBRyxDQUFDRyxNQUFKLENBQVdELEtBQXZDLEVBQThDO0FBQzVDLGVBQUtFLFVBQUwsR0FBa0JWLENBQUMsR0FBQyxDQUFwQjtBQUNBO0FBQ0Q7QUFDRjtBQUNGLEtBM0hNLEVBTkksRSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuICBjb25zdCBsaXZpbmdEZXRlY3Rpb24gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbihcIkVzYW5kLUxpdmluZ0RldGVjdGlvblwiKTtcbiAgLy8gVE9ETyDmm7/mjaLmiJDmgqjoh6rlt7HnmoRBUFBDT0RFKOWIh+WLv+azhOa8jyksIOWmguS9leiOt+WPlkFQUENPREUs5Y+v5Y+C6ICD77yaaHR0cHM6Ly9lc2FuZGluZm8ueXVxdWUuY29tL2RvY3Mvc2hhcmUvMTNhZDYxMWUtYjljMy00Y2Y4LWE5YTgtZmUyM2E0MTkzMTJlPyNcbiAgY29uc3QgQVBQQ09ERSA9ICfmm7/mjaLkuLrkvaDnmoRhcHBjb2RlJztcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtc2c6ICdsb2dzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgc3RhcnRWZXJpZnk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICogQHBhcmFtIG9wdGlvbnMoSlNPTk9iamVjdCksIOWMheaLrOWmguS4i+Wtl+aute+8mlxuICAgICAgICAqICAgICBsaXZpbmdUeXBl77ya6K6k6K+B57G75Z6LICAx77ya6L+c6L+R77yMMu+8muecqOecvO+8jDPvvJrmkYflpLTvvIw0OiDngrnlpLTvvIw1OuW8oOWYtO+8jDc66auY5oCn6IO96L+c6L+R77yMOO+8mumrmOaAp+iDveaRh+WktO+8jDnvvJrpq5jmgKfog73ngrnlpLTvvIzlj6/ku6XmmK/mtLvkvZPnu4TlkIjvvIzlpoLvvJoxMjMtLeWFiOi/nOi/ke+8jOWQjuecqOecvO+8jOWQjuaRh+WktO+8jOa0u+S9k+e7hOWQiOacgOWkmuWbm+S4qlxuICAgICAgICAqICAgICB0ZXh0Q29sb3LvvJrnlYzpnaLmoLflvI8t5a2X5L2T6aKc6ImyXG4gICAgICAgICogICAgIHByb2dyZXNzQ29sb3LvvJrnlYzpnaLmoLflvI8t6L+b5bqm5p2h6aKc6ImyXG4gICAgICAgICogICAgIHByb2dyZXNzQmdDb2xvcu+8mueVjOmdouagt+W8jy3ov5vluqbmnaHog4zmma/popzoibJcbiAgICAgICAgKiAgICAgcHJvZ3Jlc3NTdGFHcmFkaWVudO+8mueVjOmdouagt+W8jy3ov5vluqbmnaHmuJDlj5jlvIDlp4vpopzoibJcbiAgICAgICAgKiAgICAgcHJvZ3Jlc3NFbmRHcmFkaWVudO+8mueVjOmdouagt+W8jy3ov5vluqbmnaHmuJDlj5jnu5PmnZ/popzoibJcbiAgICAgICAgKiAgICAgYmFja0dyb3VuZENvbG9y77ya55WM6Z2i5qC35byPLemhtemdouiDjOaZr+minOiJslxuICAgICAgICAqICAgICBjaXJjbGVCYWNrV2lkdGjvvJrnlYzpnaLmoLflvI8t6L+b5bqm5p2h5a695bqmXG4gICAgICAgICogQHJldHVybiBsaXZpbmdEZXRlY3RSZXN1bHQg5a+56LGh5YyF5ous5aaC5LiL5Yeg5Liq5a2X5q61XG4gICAgICAgICoge1xuICAgICAgICAqXHRcdFwiY29kZVwiOiDigJ1FTERfU1VDQ0VTU+KAnCwgLS0gRUxEX1NVQ0NFU1PvvJrmiJDlip/vvIxFTERfRkFJTEVE77ya5aSx6LSl77yMRUxEX1BBUkFNRV9FUlJPUu+8muWPguaVsOW8guW4uO+8jEVMRF9FWENFUFRJT07vvJrlj5HnlJ/lvILluLjvvIxFTERfVU5TVVBQT1JU77ya5LiN5pSv5oyB5q2k5rS75L2T57G75Z6LXG4gICAgICAgICogXHRcdFwibXNnXCI64oCd5oiQ5Yqf4oCcLCAtLSDmiafooYznu5Pmnpzmj4/ov7BcbiAgICAgICAgKiBcdFx0XCJkYXRhXCI6IFwiLi4uLi4uXCIgLS0g5omn6KGM57uT5p6c5pWw5o2uXG4gICAgICAgICogfVxuICAgICAgICAqL1xuICAgICAgICBsZXQgbGl2aW5nRGV0ZWN0UmVzdWx0ID0gbGl2aW5nRGV0ZWN0aW9uLnZlcmlmeUluaXQoe1wibGl2aW5nVHlwZVwiOlwiMTM0XCIsXG5cdFx0XCJwcm9ncmVzc1N0YUdyYWRpZW50XCI6XCIjMTc4MWI1XCIsXG5cdFx0XCJwcm9ncmVzc0VuZEdyYWRpZW50XCI6XCIjNjZhOWM5XCIsXG5cdFx0XCJwcm9ncmVzc0JnQ29sb3JcIjpcIiNERERERERcIixcblx0XHRcImJhY2tHcm91bmRDb2xvclwiOlwiI0ZGRkZGRlwiLFxuXHRcdFwidGV4dENvbG9yXCI6XCIjMjIyMjIyXCIsXG5cdFx0XCJwcm9ncmVzc0NvbG9yXCI6XCIjMDAwMEZGXCIsXG5cdFx0XCJjaXJjbGVCYWNrV2lkdGhcIjo1fSk7XG4gICAgICAgIGlmIChsaXZpbmdEZXRlY3RSZXN1bHQuY29kZSAhPSAnRUxEX1NVQ0NFU1MnKSB7XG4gICAgICAgICAgdGhpcy5tc2cgPSAn5rS75L2T5qOA5rWL5Yid5aeL5YyW5aSx6LSl77yaJyArIGxpdmluZ0RldGVjdFJlc3VsdC5tc2dcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDIuIOivt+axgumYv+mHjOS6keWIneWni+WMluaOpeWPo+iOt+WPlnRva2Vu77yI5Li65LqG5L+d5oqkQVBQQ09ERSzmrKHnq6/pgLvovpHlupTor6XmlL7lnKjmnI3liqHlmajnq6/vvIlcbiAgICAgICAgICog5Y+C6ICD5paH5qGj77yaaHR0cHM6Ly9tYXJrZXQuYWxpeXVuLmNvbS9wcm9kdWN0cy81NzEyNDAwMS9jbWFwaTAwMDQ2MDIxLmh0bWwjc2t1PXl1bmNvZGU0MDAyMTAwMDAxXG4gICAgICAgICAqL1xuICAgICAgICB1bmkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9lZmFjZS5tYXJrZXQuYWxpY2xvdWRhcGkuY29tL2luaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQVBQQ09ERSAnICsgQVBQQ09ERSxcbiAgICAgICAgICAgICdYLUNhLU5vbmNlJzogdGhhdC5yYW5kb21TdHJpbmcoOCksICAvLyDpmLLph43mlL7mlLvlh7tcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgLy/liJ3lp4vljJbmjqXlj6Pov5Tlm57lj4LmlbBcbiAgICAgICAgICAgICdpbml0TXNnJzogbGl2aW5nRGV0ZWN0UmVzdWx0LmRhdGEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSAhPSAnMDAwMCcpIHtcbiAgICAgICAgICAgICAgdGhhdC5tc2cgPSAn6I635Y+WdG9rZW7lpLHotKXvvJonK3Jlcy5kYXRhLm1zZ1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogMy4g5Y+R6LW35rS75L2T5qOA5rWLXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxpdmluZ0RldGVjdGlvbi5zdGFydExpdmluZ0RldGVjdCh7XCJ0b2tlblwiOnJlcy5kYXRhLnRva2VufSxmdW5jdGlvbihsaXZpbmdEZXRlY3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIGxpdmluZ0RldGVjdFJlc3VsdCDlr7nosaHljIXmi6zlpoLkuIvlh6DkuKrlrZfmrrVcbiAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgKiAgICBcImNvZGVcIjog4oCdRUxEX1NVQ0NFU1PigJwsIC0tIEVMRF9TVUNDRVNT77ya5oiQ5Yqf77yMRUxEX0ZBSUxFRO+8muWksei0pe+8jEVMRF9QQVJBTUVfRVJST1LvvJrlj4LmlbDlvILluLjvvIxFTERfRVhDRVBUSU9O77ya5Y+R55Sf5byC5bi477yMRUxEX1RJTUVPVVTvvJrmiafooYzotoXml7bvvIxFTERfUEVSTUlTU0lPTu+8muaXoOazleiOt+WPluebuOacuuaOiOadg++8jEVMRF9DQU5DRUw6IOeUqOaIt+S4u+WKqOmAgOWHulxuICAgICAgICAgICAgICAgKiAgICBcIm1zZ1wiOuKAneaIkOWKn+KAnCwgLS0g5omn6KGM57uT5p6c5o+P6L+wXG4gICAgICAgICAgICAgICAqICAgIFwiZGF0YVwiOiBcIi4uLi4uLlwiIC0tIOaJp+ihjOe7k+aenOaVsOaNrlxuICAgICAgICAgICAgICAgKiAgICBcInRva2VuXCI6IFwiXCIgLS0g5pys5qyh6K6k6K+BdG9rZW5cbiAgICAgICAgICAgICAgICogfVxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgKiA0LiDor7fmsYLpmL/ph4zkupHojrflj5bmnI3liqHlmajnq6/mtLvkvZPmo4DmtYvnu5PmnpzvvIjkuLrkuobkv53miqRBUFBDT0RFLOasoeerr+mAu+i+keW6lOivpeaUvuWcqOacjeWKoeWZqOerr++8iVxuICAgICAgICAgICAgICAgKiDlj4LogIPmlofmoaPvvJpodHRwczovL21hcmtldC5hbGl5dW4uY29tL3Byb2R1Y3RzLzU3MTI0MDAxL2NtYXBpMDAwNDYwMjEuaHRtbCNza3U9eXVuY29kZTQwMDIxMDAwMDFcbiAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIHVuaS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VmYWNlLm1hcmtldC5hbGljbG91ZGFwaS5jb20vdmVyaWZ5JyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0FQUENPREUgJyArIEFQUENPREUsXG4gICAgICAgICAgICAgICAgICAnWC1DYS1Ob25jZSc6IHRoYXQucmFuZG9tU3RyaW5nKDgpLCAgLy8g6Ziy6YeN5pS+5pS75Ye7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5o6l5Y+j6L+U5Zue5Y+C5pWwXG4gICAgICAgICAgICAgICAgICBcInRva2VuXCI6IGxpdmluZ0RldGVjdFJlc3VsdC50b2tlbixcbiAgICAgICAgICAgICAgICAgICd2ZXJpZnlNc2cnOiBsaXZpbmdEZXRlY3RSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoYXQubXNnID0gSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG5cdFx0XHRcdC8v5Y+R55Sf572R57uc6K+35rGC6ZSZ6K+vLOWmgmFwcGNvZGXkuI3mraPnoa5cblx0XHRcdFx0ZmFpbDogcmVzID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCfnvZHnu5zor7fmsYLlpLHotKUnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhKTtcblx0XHRcdFx0fVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG5cdFx0ICAvL+WPkeeUn+e9kee7nOivt+axgumUmeivryzlpoJhcHBjb2Rl5LiN5q2j56GuXG5cdFx0ICBmYWlsOiByZXMgPT4ge1xuXHRcdCAgXHRjb25zb2xlLmVycm9yKCfnvZHnu5zor7fmsYLlpLHotKUnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cdFx0ICBcdHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSk7XG5cdFx0ICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJhbmRvbVN0cmluZzogZnVuY3Rpb24obGVuKSB7XG4gICAgICDjgIDjgIBsZW4gPSBsZW4gfHwgMzI7XG4gICAgICDjgIDjgIB2YXIgJGNoYXJzID0gJ0FCQ0RFRkdISktNTlBRUlNUV1hZWmFiY2RlZmhpamttbnByc3R3eHl6MjM0NTY3OCc7XG4gICAgICDjgIDjgIB2YXIgbWF4UG9zID0gJGNoYXJzLmxlbmd0aDtcbiAgICAgIOOAgOOAgHZhciByYW5kb21TdHIgPSAnJztcbiAgICAgIOOAgOOAgGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIOOAgOOAgOOAgOOAgHJhbmRvbVN0ciArPSAkY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heFBvcykpO1xuICAgICAg44CA44CAfVxuICAgICAgICBcbiAgICAgICAgcmFuZG9tU3RyID0gJ0xEVF8nICsgcmFuZG9tU3RyO1xuICAgICAg44CA44CAcmV0dXJuIHJhbmRvbVN0cjtcbiAgICAgIH0sXG4gICAgICByYWRpb0NoYW5nZTogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLnZhbHVlID09PSBldnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmxpdmluZ1R5cGUgPSBpKzE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 9 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 11 */
/*!*************************************************************************!*\
  !*** /Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/App.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 12);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDME07QUFDMU0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**************************************************************************************************!*\
  !*** /Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 13);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJyQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhangzelong/Documents/HBuilderProjects/uni-efaceid/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 8)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ })
],[[0,"app-config"]]]);