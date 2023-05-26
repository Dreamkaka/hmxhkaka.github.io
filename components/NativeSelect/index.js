import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { autoUpdate, flip, FloatingFocusManager, FloatingOverlay, FloatingPortal, inner, offset, shift, size, useClick, useDismiss, useFloating, useInnerOffset, useInteractions, useListNavigation, useRole, useTypeahead } from '@floating-ui/react';
import { useEffect, useRef, useState } from 'react';
import useControlledState from 'use-merge-value';
import SelectItem from "./SelectItem";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var NativeSelect = function NativeSelect(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    value = _ref.value,
    prefixCls = _ref.prefixCls,
    onChange = _ref.onChange,
    renderValue = _ref.renderValue,
    renderItem = _ref.renderItem,
    style = _ref.style;
  var cls = prefixCls !== null && prefixCls !== void 0 ? prefixCls : 'native-select';
  var _useControlledState = useControlledState(0, {
      value: value,
      onChange: onChange
    }),
    _useControlledState2 = _slicedToArray(_useControlledState, 2),
    selectedIndex = _useControlledState2[0],
    setSelectedIndex = _useControlledState2[1];
  var _useStyles = useStyles(cls),
    styles = _useStyles.styles;
  var listRef = useRef([]);
  var listContentRef = useRef([]);
  var overflowRef = useRef(null);
  var allowSelectRef = useRef(false);
  var allowMouseUpRef = useRef(true);
  var selectTimeoutRef = useRef();
  var scrollRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    activeIndex = _useState4[0],
    setActiveIndex = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    fallback = _useState6[0],
    setFallback = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    innerOffset = _useState8[0],
    setInnerOffset = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    touch = _useState10[0],
    setTouch = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    blockSelection = _useState12[0],
    setBlockSelection = _useState12[1];
  if (!open) {
    if (innerOffset !== 0) setInnerOffset(0);
    if (fallback) setFallback(false);
    if (blockSelection) setBlockSelection(false);
  }
  var _useFloating = useFloating({
      placement: 'bottom-start',
      open: open,
      onOpenChange: setOpen,
      whileElementsMounted: autoUpdate,
      middleware: fallback ? [offset(5), touch ? shift({
        crossAxis: true,
        padding: 10
      }) : flip({
        padding: 10
      }), size({
        apply: function apply(_ref2) {
          var _scrollRef$current$st, _scrollRef$current;
          var availableHeight = _ref2.availableHeight;
          Object.assign((_scrollRef$current$st = (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.style) !== null && _scrollRef$current$st !== void 0 ? _scrollRef$current$st : {}, {
            maxHeight: "".concat(availableHeight, "px")
          });
        },
        padding: 10
      })] : [inner({
        listRef: listRef,
        overflowRef: overflowRef,
        scrollRef: scrollRef,
        index: selectedIndex,
        offset: innerOffset,
        onFallbackChange: setFallback,
        padding: 10,
        minItemsVisible: touch ? 8 : 4,
        referenceOverflowThreshold: 20
      }), offset({
        crossAxis: -4
      })]
    }),
    x = _useFloating.x,
    y = _useFloating.y,
    strategy = _useFloating.strategy,
    refs = _useFloating.refs,
    context = _useFloating.context;
  var _useInteractions = useInteractions([useClick(context, {
      event: 'mousedown'
    }), useDismiss(context), useRole(context, {
      role: 'listbox'
    }), useInnerOffset(context, {
      enabled: !fallback,
      onChange: setInnerOffset,
      overflowRef: overflowRef,
      scrollRef: scrollRef
    }), useListNavigation(context, {
      listRef: listRef,
      activeIndex: activeIndex,
      selectedIndex: selectedIndex,
      onNavigate: setActiveIndex
    }), useTypeahead(context, {
      listRef: listContentRef,
      activeIndex: activeIndex,
      onMatch: open ? setActiveIndex : setSelectedIndex
    })]),
    getReferenceProps = _useInteractions.getReferenceProps,
    getFloatingProps = _useInteractions.getFloatingProps,
    getItemProps = _useInteractions.getItemProps;
  useEffect(function () {
    if (open) {
      selectTimeoutRef.current = setTimeout(function () {
        allowSelectRef.current = true;
      }, 300);
      return function () {
        clearTimeout(selectTimeoutRef.current);
      };
    } else {
      allowSelectRef.current = false;
      allowMouseUpRef.current = true;
    }
  }, [open]);
  var _ref3 = options[selectedIndex] || {},
    label = _ref3.label;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({
      type: 'button',
      ref: refs.setReference,
      className: styles.button,
      "aria-label": 'selected-item',
      style: style
    }, getReferenceProps({
      onTouchStart: function onTouchStart() {
        setTouch(true);
      },
      onPointerMove: function onPointerMove(_ref4) {
        var pointerType = _ref4.pointerType;
        if (pointerType === 'mouse') {
          setTouch(false);
        }
      }
    })), {}, {
      children: renderValue ? renderValue(selectedIndex) : label
    })), /*#__PURE__*/_jsx(FloatingPortal, {
      children: open && /*#__PURE__*/_jsx(FloatingOverlay, {
        lockScroll: !touch,
        style: {
          zIndex: 3000
        },
        children: /*#__PURE__*/_jsx(FloatingFocusManager, {
          context: context,
          modal: false,
          initialFocus: -1,
          children: /*#__PURE__*/_jsx("div", {
            ref: refs.setFloating,
            style: {
              position: strategy,
              top: y !== null && y !== void 0 ? y : 0,
              left: x !== null && x !== void 0 ? x : 0
            },
            children: /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
              className: styles.container,
              style: {
                overflowY: 'auto'
              },
              ref: scrollRef
            }, getFloatingProps({
              onContextMenu: function onContextMenu(e) {
                e.preventDefault();
              }
            })), {}, {
              children: options.map(function (item, i) {
                return /*#__PURE__*/_jsx(SelectItem, _objectSpread({
                  prefixCls: cls,
                  value: item.value,
                  label: renderItem ? renderItem(item, i) : item.label
                  // Prevent immediate selection on touch devices when
                  // pressing the ScrollArrows
                  ,
                  disabled: blockSelection,
                  isSelected: i === selectedIndex,
                  isActive: i === activeIndex,
                  ref: function ref(node) {
                    listRef.current[i] = node;
                    listContentRef.current[i] = item.label;
                  }
                }, getItemProps({
                  onTouchStart: function onTouchStart() {
                    allowSelectRef.current = true;
                    allowMouseUpRef.current = false;
                  },
                  onKeyDown: function onKeyDown() {
                    allowSelectRef.current = true;
                  },
                  onClick: function onClick() {
                    if (allowSelectRef.current) {
                      setSelectedIndex(i);
                      setOpen(false);
                    }
                  },
                  onMouseUp: function onMouseUp() {
                    if (!allowMouseUpRef.current) {
                      return;
                    }
                    if (allowSelectRef.current) {
                      setSelectedIndex(i);
                      setOpen(false);
                    }

                    // On touch devices, prevent the element from
                    // immediately closing `onClick` by deferring it
                    clearTimeout(selectTimeoutRef.current);
                    selectTimeoutRef.current = setTimeout(function () {
                      allowSelectRef.current = true;
                    });
                  }
                })), item.value);
              })
            }))
          })
        })
      })
    })]
  });
};
export default NativeSelect;