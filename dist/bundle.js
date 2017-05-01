(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.jshelpers = global.jshelpers || {})));
}(this, (function (exports) { 'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XY$1 = function () {
	function XY(x, y) {
		_classCallCheck(this, XY);

		if (y === undefined) y = x;
		this.x = x || 0;
		this.y = y || 0;
	}

	_createClass(XY, [{
		key: 'copy',
		value: function copy() {
			return new XY(this.x, this.y);
		}
	}, {
		key: 'map',
		value: function map(fn) {
			this.x = fn(this.x);
			this.y = fn(this.y);
			return this;
		}
	}, {
		key: 'toString',
		value: function toString(fn) {
			var rounded = this.copy().mul(100).map(Math.round).div(100);
			return '{x:' + rounded.x + ',y:' + rounded.y + '}';
		}
	}, {
		key: 'is',
		value: function is(a, y) {
			if (a instanceof XY) {
				y = a.y;
				a = a.x;
			} else if (y === undefined) y = a;
			return this.x === a && this.y === y;
		}
	}, {
		key: 'add',
		value: function add(a, y) {
			if (a instanceof XY) {
				y = a.y;a = a.x;
			} else if (y === undefined) y = a;
			this.x += a;
			this.y += y;
			return this;
		}
	}, {
		key: 'sub',
		value: function sub(a, y) {
			if (a instanceof XY) {
				y = a.y;a = a.x;
			} else if (y === undefined) y = a;
			this.x -= a;
			this.y -= y;
			return this;
		}
	}, {
		key: 'mul',
		value: function mul(a, y) {
			if (a instanceof XY) {
				y = a.y;a = a.x;
			} else if (y === undefined) y = a;
			this.x *= a;
			this.y *= y;
			return this;
		}
	}, {
		key: 'div',
		value: function div(a, y) {
			if (a instanceof XY) {
				y = a.y;a = a.x;
			} else if (y === undefined) y = a;
			this.x /= a;
			this.y /= y;
			return this;
		}
	}, {
		key: 'set',
		value: function set(a, y) {
			if (a instanceof Object) {
				y = a.y;a = a.x;
			} else if (y === undefined) y = a;
			this.x = a;
			this.y = y;
			return this;
		}
	}]);

	return XY;
}();

var XY = XY$1;

exports.XY = XY;

Object.defineProperty(exports, '__esModule', { value: true });

})));
