webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Index/ProductPagination.js":
/*!***********************************************!*\
  !*** ./components/Index/ProductPagination.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/home/magikoopa/Dev/react-reserve/components/Index/ProductPagination.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProductPagination(_ref) {
  var totalPages = _ref.totalPages;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    textAlign: "center",
    style: {
      margin: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    defaultActivePAge: 1,
    totalPages: totalPages,
    onPageChange: function onPageChange(event, data) {
      data.activePage === 1 ? router.push('/') : router.push("/?page=".concat(data.activePage));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPagination);

/***/ })

})
//# sourceMappingURL=index.js.70cc68263befcc5a3e3f.hot-update.js.map