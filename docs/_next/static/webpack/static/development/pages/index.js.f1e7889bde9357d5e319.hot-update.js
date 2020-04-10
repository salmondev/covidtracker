webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DataTableColumns */ "./components/DataTableColumns.js");
/* harmony import */ var _components_DataChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DataChart */ "./components/DataChart.js");
/* harmony import */ var _components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TimeSeriesChart */ "./components/TimeSeriesChart.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\panur\\Documents\\covid19\\pages\\index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var apiUrl = 'https://api.covid19api.com/summary';
var timeSeriesUrl = 'https://pomber.github.io/covid19/timeseries.json';

var fetcher = function fetcher(url) {
  return unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url).then(function (r) {
    return r.json();
  });
};





var customStyle = {
  tableWrapper: {
    style: {
      display: 'block'
    }
  }
};

var IndexPage = function IndexPage() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(apiUrl, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(timeSeriesUrl, fetcher),
      timeseries = _useSWR2.data;

  if (!data) {
    return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 12
      }
    });
  }

  if (error) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    }, "Error...");
  }

  var sortedData = data.Countries.sort(function (a, b) {
    return a.TotalConfirmed < b.TotalConfirmed ? 1 : -1;
  });
  return __jsx("div", {
    className: "jsx-325644957" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "325644957",
    __self: _this
  }, "@import url('https://fonts.googleapis.com/css?family=Comic+Neue&display=swap');*.jsx-325644957{font-family:'Comic Neue',sans-serif;}.container.jsx-325644957{width:820px;margin:0 auto;}.title.jsx-325644957{text-align:center;}footer.jsx-325644957{text-align:center;padding:2rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGFudXJcXERvY3VtZW50c1xcY292aWQxOVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDUyxBQUV5RixBQUd2QyxBQUl6QixBQUtNLEFBSUEsWUFSSixNQUtoQixBQUlpQixRQVJqQixPQVNBLEdBZEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwYW51clxcRG9jdW1lbnRzXFxjb3ZpZDE5XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICd1bmZldGNoJztcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9hcGkuY292aWQxOWFwaS5jb20vc3VtbWFyeSc7XHJcbmNvbnN0IHRpbWVTZXJpZXNVcmwgPSAnaHR0cHM6Ly9wb21iZXIuZ2l0aHViLmlvL2NvdmlkMTkvdGltZXNlcmllcy5qc29uJztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG5cclxuaW1wb3J0IGNvbHVtbnMgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRhVGFibGVDb2x1bW5zJztcclxuaW1wb3J0IERhdGFDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFDaGFydCc7XHJcbmltcG9ydCBUaW1lU2VyaWVzQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lU2VyaWVzQ2hhcnQnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGUgPSB7XHJcbiAgdGFibGVXcmFwcGVyOiB7XHJcbiAgICBzdHlsZToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihhcGlVcmwsIGZldGNoZXIpO1xyXG4gIGNvbnN0IHsgZGF0YTogdGltZXNlcmllcyB9ID0gdXNlU1dSKHRpbWVTZXJpZXNVcmwsIGZldGNoZXIpO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxwPkVycm9yLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNvcnRlZERhdGEgPSBkYXRhLkNvdW50cmllcy5zb3J0KChhLCBiKSA9PlxyXG4gICAgYS5Ub3RhbENvbmZpcm1lZCA8IGIuVG90YWxDb25maXJtZWQgPyAxIDogLTFcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db21pYytOZXVlJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NvbWljIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogODIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5DT1ZJRC0xOSBEYXRhIHBhZ2UgZGV2ZWxvcGUgYnkgcGFudXJ1dDwvaDI+XHJcblxyXG4gICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgdGl0bGU9XCJDT1ZJRC0xOSBTdW1tYXJ5XCJcclxuICAgICAgICBjdXN0b21TdHlsZXM9e2N1c3RvbVN0eWxlfVxyXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgZGF0YT17c29ydGVkRGF0YX1cclxuICAgICAgICBwYWdpbmF0aW9uPXt0cnVlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPERhdGFDaGFydCBkYXRhPXtkYXRhLkNvdW50cmllc30gdGl0bGU9XCJTdW1tYXJ5XCIgLz5cclxuXHJcbiAgICAgIDxUaW1lU2VyaWVzQ2hhcnQgZGF0YT17dGltZXNlcmllcy5UaGFpbGFuZH0gdGl0bGU9XCJUaGFpbGFuZCBTdW1tYXJ5XCIgLz5cclxuICAgICAgPFRpbWVTZXJpZXNDaGFydCBkYXRhPXt0aW1lc2VyaWVzLlVTfSB0aXRsZT1cIlVTIFN1bW1hcnlcIiAvPlxyXG4gICAgICA8VGltZVNlcmllc0NoYXJ0IGRhdGE9e3RpbWVzZXJpZXMuQ2hpbmF9IHRpdGxlPVwiQ2hpbmEgU3VtbWFyeVwiIC8+XHJcblxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9QaG9uYm9waXQvY292aWQtMTktbmV4dGpzLWV4YW1wbGVcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU291cmNlIENvZGVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIHsnIGJ5ICd9XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXZhaG95LmNvbVwiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZXZhaG95LmNvbVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\panur\\\\Documents\\\\covid19\\\\pages\\\\index.js */"), __jsx("h2", {
    className: "jsx-325644957" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, "COVID-19 Data page develope by panurut"), __jsx(react_data_table_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
    title: "COVID-19 Summary",
    customStyles: customStyle,
    columns: _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_5__["default"],
    data: sortedData,
    pagination: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.Countries,
    title: "Summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.Thailand,
    title: "Thailand Summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.US,
    title: "US Summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.China,
    title: "China Summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx("footer", {
    className: "jsx-325644957",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-325644957",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/Phonbopit/covid-19-nextjs-example",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-325644957",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "Source Code"), ' by ', __jsx("a", {
    href: "https://devahoy.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-325644957",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "Devahoy.com"))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.f1e7889bde9357d5e319.hot-update.js.map