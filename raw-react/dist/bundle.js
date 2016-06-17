/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _list = __webpack_require__(1);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var search = React.createClass({
	    displayName: 'search',
	    constructor: function constructor() {
	        this.state = { 'name': 'bob', 'job': 'coder' };
	    },
	
	    handleKeyPress: function handleKeyPress(e) {
	        if (e.keyCode === 13) {
	            e.preventDefault;
	            console.log('enter pressed');
	        }
	    },
	
	    render: function render() {
	        console.log(this.props);
	        console.log(this.handleKeyPress);
	        return React.createElement('div', {
	            className: "row text-center",
	            id: "search"
	        }, React.createElement('input', {
	            onKeyUp: this.handleKeyPress
	        }));
	    }
	});
	
	ReactDOM.render(React.createElement('div', {}, React.createElement(search, null), React.createElement(_list2.default, null)), document.getElementById('react-app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var list = React.createClass({
	  displayName: 'list',
	  render: function render() {
	    return React.createElement('ul', {}, 'Coconuts');
	  }
	});
	
	module.exports = list;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map