import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
// copy form https://github.com/loktar00/react-lazy-load/blob/master/src/LazyLoad.tsx#L2
import { Card } from 'antd';
import React, { Children, Component, createElement } from 'react';
import scrollParent from "./utils";
import { jsx as _jsx } from "react/jsx-runtime";
export var IntersectionLoad = /*#__PURE__*/function (_Component) {
  _inherits(IntersectionLoad, _Component);
  var _super = _createSuper(IntersectionLoad);
  function IntersectionLoad(props) {
    var _this;
    _classCallCheck(this, IntersectionLoad);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "elementObserver", void 0);
    _defineProperty(_assertThisInitialized(_this), "wrapper", void 0);
    _defineProperty(_assertThisInitialized(_this), "lazyLoadHandler", function (entries) {
      var onContentVisible = _this.props.onContentVisible;
      var _entries = _slicedToArray(entries, 1),
        entry = _entries[0];
      var isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        var _this$wrapper;
        _this.setState({
          visible: true
        }, function () {
          if (onContentVisible) {
            onContentVisible();
          }
        });

        // Stop observing
        var node = (_this$wrapper = _this.wrapper) === null || _this$wrapper === void 0 ? void 0 : _this$wrapper.current;
        if (node && node instanceof HTMLElement) {
          var _this$elementObserver;
          (_this$elementObserver = _this.elementObserver) === null || _this$elementObserver === void 0 ? void 0 : _this$elementObserver.unobserve(node);
        }
      }
    });
    _this.elementObserver = null;
    _this.wrapper = /*#__PURE__*/React.createRef();
    _this.state = {
      visible: false
    };
    return _this;
  }
  _createClass(IntersectionLoad, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var eventNode = this.getEventNode();
      if (eventNode === window) {
        eventNode = document.body;
      }
      setTimeout(function () {
        var _this2$wrapper;
        var _this2$props = _this2.props,
          offset = _this2$props.offset,
          threshold = _this2$props.threshold;
        var options = {
          rootMargin: typeof offset === 'number' ? "".concat(offset, "px") : offset || '0px',
          threshold: threshold || 0,
          root: document.body
        };
        _this2.elementObserver = new IntersectionObserver(_this2.lazyLoadHandler, options);
        var node = (_this2$wrapper = _this2.wrapper) === null || _this2$wrapper === void 0 ? void 0 : _this2$wrapper.current;
        if (node instanceof HTMLElement) {
          _this2.elementObserver.observe(node);
        }
      }, 200);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_, nextState) {
      return nextState.visible;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$wrapper2;
      var node = (_this$wrapper2 = this.wrapper) === null || _this$wrapper2 === void 0 ? void 0 : _this$wrapper2.current;
      console.log(node);
      if (node && node instanceof HTMLElement) {
        var _this$elementObserver2;
        (_this$elementObserver2 = this.elementObserver) === null || _this$elementObserver2 === void 0 ? void 0 : _this$elementObserver2.unobserve(node);
      }
    }
  }, {
    key: "getEventNode",
    value: function getEventNode() {
      var _this$wrapper3, _this$wrapper4;
      if (!((_this$wrapper3 = this.wrapper) !== null && _this$wrapper3 !== void 0 && _this$wrapper3.current)) return document.body;
      return scrollParent((_this$wrapper4 = this.wrapper) === null || _this$wrapper4 === void 0 ? void 0 : _this$wrapper4.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        height = _this$props.height,
        width = _this$props.width,
        elementType = _this$props.elementType;
      var visible = this.state.visible;
      var elStyles = {
        width: width
      };
      var elClasses = "LazyLoad".concat(visible ? ' is-visible' : '').concat(className ? " ".concat(className) : '');
      var componentElementType = elementType || 'div';
      return /*#__PURE__*/createElement(componentElementType, {
        className: elClasses,
        style: elStyles,
        ref: this.wrapper
      }, visible ? Children.only(children) : /*#__PURE__*/_jsx(Card, {
        className: "loading",
        loading: true,
        style: {
          height: height,
          width: '100%'
        }
      }));
    }
  }]);
  return IntersectionLoad;
}(Component);
_defineProperty(IntersectionLoad, "defaultProps", {
  elementType: 'div',
  className: '',
  offset: 0,
  threshold: 0,
  width: null,
  onContentVisible: null,
  height: null
});