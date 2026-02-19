System.register(["jimu-core/emotion","jimu-core/react","jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_react__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "react"
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/api-getter/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function Widget(props) {
    var _a, _b;
    const [table, setTable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('1');
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('LF1');
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // For feature layer data
    const [featureLayerRecords, setFeatureLayerRecords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [featureLayerLoading, setFeatureLayerLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const callApi = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        setLoading(true);
        setError('');
        setResult(null);
        try {
            const params = new URLSearchParams({ table, location });
            const url = `https://erma.kgsgroup.com:5001/api/v1/ErmaPsql/ViewReport?${params.toString()}`;
            const res = yield fetch(url, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) {
                throw new Error(`API returned ${res.status} ${res.statusText}`);
            }
            // If your API returns JSON:
            const data = yield res.json();
            setResult(data);
        }
        catch (e) {
            setError((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : 'Request failed (check CORS/SSL)');
        }
        finally {
            setLoading(false);
        }
    });
    // Query feature layer data
    const queryFeatureLayer = (dataSource) => __awaiter(this, void 0, void 0, function* () {
        setFeatureLayerLoading(true);
        setError('');
        try {
            const queryableDs = dataSource;
            // Query all records (or use where clause)
            const queryParams = {
                where: '1=1', // Get all records, or use specific SQL where clause
                outFields: ['*'],
                pageSize: 100
            };
            const queryResult = yield queryableDs.query(queryParams);
            setFeatureLayerRecords(queryResult.records);
            console.log('Feature Layer Records:', queryResult.records);
        }
        catch (e) {
            setError('Failed to query feature layer: ' + e.message);
        }
        finally {
            setFeatureLayerLoading(false);
        }
    });
    // Handle data source ready
    const onDataSourceCreated = (dataSource) => {
        console.log('Data source created:', dataSource);
        // Auto-query when data source is ready
        queryFeatureLayer(dataSource);
    };
    // Get the first data source ID from useDataSources
    const useDataSourceId = (_b = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: 12 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "External API Report" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "table" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: table, onChange: (e) => setTable(e.target.value) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "location" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: location, onChange: (e) => setLocation(e.target.value) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: "primary", onClick: callApi, disabled: loading, children: loading ? 'Calling…' : 'Submit' }), loading && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: 12 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) }), error && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: 12 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { form: "basic", type: "error", text: error }) })), result && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { style: { marginTop: 12, background: '#f6f6f6', padding: 10, maxHeight: 220, overflow: 'auto' }, children: JSON.stringify(result, null, 2) })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", { style: { margin: '20px 0' } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Feature Layer Data" }), useDataSourceId ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_2__.DataSourceComponent, { useDataSource: props.useDataSources[0], onDataSourceCreated: onDataSourceCreated }), featureLayerLoading && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Loading, {}), featureLayerRecords.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: 12 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: ["Records found: ", featureLayerRecords.length] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { style: { background: '#f6f6f6', padding: 10, maxHeight: 300, overflow: 'auto' }, children: featureLayerRecords.map((record, idx) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["Record ", idx + 1, ": ", JSON.stringify(record.getData(), null, 2)] }, idx))) })] }))] })) : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { color: '#666', fontStyle: 'italic' }, children: "No data source selected. Please configure a data source in the widget settings." }))] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcGktZ2V0dGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIWjtBQUM2QjtBQUNUO0FBRzVDLFNBQVMsTUFBTSxDQUFFLEtBQTBCOztJQUN4RCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLCtDQUFRLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUM3QyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLCtDQUFRLENBQU0sSUFBSSxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdB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LEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcGktZ2V0dGVyL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2VDb21wb25lbnQgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dElucHV0LCBBbGVydCwgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB0eXBlIHsgRGF0YVNvdXJjZSwgRGF0YVJlY29yZCwgUXVlcmlhYmxlRGF0YVNvdXJjZSwgQXJjR0lTUXVlcnlQYXJhbXMgfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XHJcbiAgY29uc3QgW3RhYmxlLCBzZXRUYWJsZV0gPSB1c2VTdGF0ZSgnMScpXHJcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgnTEYxJylcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8YW55PihudWxsKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPignJylcclxuICBcclxuICAvLyBGb3IgZmVhdHVyZSBsYXllciBkYXRhXHJcbiAgY29uc3QgW2ZlYXR1cmVMYXllclJlY29yZHMsIHNldEZlYXR1cmVMYXllclJlY29yZHNdID0gdXNlU3RhdGU8RGF0YVJlY29yZFtdPihbXSlcclxuICBjb25zdCBbZmVhdHVyZUxheWVyTG9hZGluZywgc2V0RmVhdHVyZUxheWVyTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgY2FsbEFwaSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIHNldEVycm9yKCcnKVxyXG4gICAgc2V0UmVzdWx0KG51bGwpXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IHRhYmxlLCBsb2NhdGlvbiB9KVxyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9lcm1hLmtnc2dyb3VwLmNvbTo1MDAxL2FwaS92MS9Fcm1hUHNxbC9WaWV3UmVwb3J0PyR7cGFyYW1zLnRvU3RyaW5nKCl9YFxyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSByZXR1cm5lZCAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSWYgeW91ciBBUEkgcmV0dXJucyBKU09OOlxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBzZXRSZXN1bHQoZGF0YSlcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICBzZXRFcnJvcihlPy5tZXNzYWdlID8/ICdSZXF1ZXN0IGZhaWxlZCAoY2hlY2sgQ09SUy9TU0wpJylcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBRdWVyeSBmZWF0dXJlIGxheWVyIGRhdGFcclxuICBjb25zdCBxdWVyeUZlYXR1cmVMYXllciA9IGFzeW5jIChkYXRhU291cmNlOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICBzZXRGZWF0dXJlTGF5ZXJMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcXVlcnlhYmxlRHMgPSBkYXRhU291cmNlIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcclxuICAgICAgXHJcbiAgICAgIC8vIFF1ZXJ5IGFsbCByZWNvcmRzIChvciB1c2Ugd2hlcmUgY2xhdXNlKVxyXG4gICAgICBjb25zdCBxdWVyeVBhcmFtczogQXJjR0lTUXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgd2hlcmU6ICcxPTEnLCAvLyBHZXQgYWxsIHJlY29yZHMsIG9yIHVzZSBzcGVjaWZpYyBTUUwgd2hlcmUgY2xhdXNlXHJcbiAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICBwYWdlU2l6ZTogMTAwXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gYXdhaXQgcXVlcnlhYmxlRHMucXVlcnkocXVlcnlQYXJhbXMpXHJcbiAgICAgIFxyXG4gICAgICBzZXRGZWF0dXJlTGF5ZXJSZWNvcmRzKHF1ZXJ5UmVzdWx0LnJlY29yZHMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdGZWF0dXJlIExheWVyIFJlY29yZHM6JywgcXVlcnlSZXN1bHQucmVjb3JkcylcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICBzZXRFcnJvcignRmFpbGVkIHRvIHF1ZXJ5IGZlYXR1cmUgbGF5ZXI6ICcgKyBlLm1lc3NhZ2UpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRGZWF0dXJlTGF5ZXJMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSGFuZGxlIGRhdGEgc291cmNlIHJlYWR5XHJcbiAgY29uc3Qgb25EYXRhU291cmNlQ3JlYXRlZCA9IChkYXRhU291cmNlOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRGF0YSBzb3VyY2UgY3JlYXRlZDonLCBkYXRhU291cmNlKVxyXG4gICAgLy8gQXV0by1xdWVyeSB3aGVuIGRhdGEgc291cmNlIGlzIHJlYWR5XHJcbiAgICBxdWVyeUZlYXR1cmVMYXllcihkYXRhU291cmNlKVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHRoZSBmaXJzdCBkYXRhIHNvdXJjZSBJRCBmcm9tIHVzZURhdGFTb3VyY2VzXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZUlkID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXT8uZGF0YVNvdXJjZUlkXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEyIH19PlxyXG4gICAgICA8aDM+RXh0ZXJuYWwgQVBJIFJlcG9ydDwvaDM+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5cclxuICAgICAgICA8bGFiZWw+dGFibGU8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0SW5wdXQgdmFsdWU9e3RhYmxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRhYmxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5cclxuICAgICAgICA8bGFiZWw+bG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0SW5wdXQgdmFsdWU9e2xvY2F0aW9ufSBvbkNoYW5nZT17KGUpID0+IHNldExvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17Y2FsbEFwaX0gZGlzYWJsZWQ9e2xvYWRpbmd9PlxyXG4gICAgICAgIHtsb2FkaW5nID8gJ0NhbGxpbmfigKYnIDogJ1N1Ym1pdCd9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAge2xvYWRpbmcgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEyIH19PjxMb2FkaW5nIC8+PC9kaXY+fVxyXG5cclxuICAgICAge2Vycm9yICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTIgfX0+XHJcbiAgICAgICAgICA8QWxlcnQgZm9ybT1cImJhc2ljXCIgdHlwZT1cImVycm9yXCIgdGV4dD17ZXJyb3J9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7cmVzdWx0ICYmIChcclxuICAgICAgICA8cHJlIHN0eWxlPXt7IG1hcmdpblRvcDogMTIsIGJhY2tncm91bmQ6ICcjZjZmNmY2JywgcGFkZGluZzogMTAsIG1heEhlaWdodDogMjIwLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMil9XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogRmVhdHVyZSBMYXllciBEYXRhIFNlY3Rpb24gKi99XHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcyMHB4IDAnIH19IC8+XHJcbiAgICAgIDxoMz5GZWF0dXJlIExheWVyIERhdGE8L2gzPlxyXG4gICAgICBcclxuICAgICAge3VzZURhdGFTb3VyY2VJZCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcclxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXNbMF19XHJcbiAgICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7ZmVhdHVyZUxheWVyTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2ZlYXR1cmVMYXllclJlY29yZHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMiB9fT5cclxuICAgICAgICAgICAgICA8cD48c3Ryb25nPlJlY29yZHMgZm91bmQ6IHtmZWF0dXJlTGF5ZXJSZWNvcmRzLmxlbmd0aH08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgPHByZSBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2Y2ZjZmNicsIHBhZGRpbmc6IDEwLCBtYXhIZWlnaHQ6IDMwMCwgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgIHtmZWF0dXJlTGF5ZXJSZWNvcmRzLm1hcCgocmVjb3JkLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVjb3JkIHtpZHggKyAxfToge0pTT04uc3RyaW5naWZ5KHJlY29yZC5nZXREYXRhKCksIG51bGwsIDIpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjNjY2JywgZm9udFN0eWxlOiAnaXRhbGljJyB9fT5cclxuICAgICAgICAgIE5vIGRhdGEgc291cmNlIHNlbGVjdGVkLiBQbGVhc2UgY29uZmlndXJlIGEgZGF0YSBzb3VyY2UgaW4gdGhlIHdpZGdldCBzZXR0aW5ncy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==