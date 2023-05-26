import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _navigator;
import { SearchOutlined } from '@ant-design/icons';
import { useSiteSearch } from 'dumi';
import SearchResult from 'dumi/theme-default/slots/SearchResult';
import { useEffect, useRef, useState } from 'react';
import { Input } from "./Input";
import { Mask } from "./Mask";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export { Input as SearchInput } from "./Input";
export { Mask as SearchMask } from "./Mask";
var isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(typeof navigator !== 'undefined' ? (_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.platform : '');
var isInput = function isInput(target) {
  return ['TEXTAREA', 'INPUT'].includes(target.tagName) || target.contentEditable === 'true';
};
var SearchBar = function SearchBar() {
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    focusing = _useState2[0],
    setFocusing = _useState2[1];
  var inputRef = useRef(null);
  var modalInputRef = useRef(null);
  var _useState3 = useState('⌘'),
    _useState4 = _slicedToArray(_useState3, 2),
    symbol = _useState4[0],
    setSymbol = _useState4[1];
  var _useSiteSearch = useSiteSearch(),
    keywords = _useSiteSearch.keywords,
    setKeywords = _useSiteSearch.setKeywords,
    result = _useSiteSearch.result,
    loading = _useSiteSearch.loading;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    modalVisible = _useState6[0],
    setModalVisible = _useState6[1];
  useEffect(function () {
    // why put useEffect?
    // to avoid Text content mismatch between server & client in ssr
    if (!isAppleDevice) {
      setSymbol('Ctrl');
    }
    var handler = function handler(ev) {
      if ((isAppleDevice ? ev.metaKey : ev.ctrlKey) && ev.key === 'k' || ev.key === '/' && !isInput(ev.target)) {
        ev.preventDefault();
        if (inputRef.current) {
          var _inputRef$current$get = inputRef.current.getBoundingClientRect(),
            top = _inputRef$current$get.top,
            bottom = _inputRef$current$get.bottom,
            left = _inputRef$current$get.left,
            right = _inputRef$current$get.right;
          var isInViewport = top >= 0 && left >= 0 && bottom <= window.innerHeight && right <= window.innerWidth;
          if (isInViewport) {
            inputRef.current.focus();
          } else {
            setKeywords('');
            setModalVisible(true);
            setTimeout(function () {
              var _modalInputRef$curren;
              (_modalInputRef$curren = modalInputRef.current) === null || _modalInputRef$curren === void 0 ? void 0 : _modalInputRef$curren.focus();
            });
          }
        }
      }
      if (ev.key === 'Escape') {
        ev.preventDefault();
        setModalVisible(false);
      }
    };
    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    className: styles.container,
    children: [/*#__PURE__*/_jsx(SearchOutlined, {
      className: styles.svg
    }), /*#__PURE__*/_jsx(Input, {
      onFocus: function onFocus() {
        return setFocusing(true);
      },
      onBlur: function onBlur() {
        // wait for item click
        setTimeout(function () {
          setFocusing(false);
        }, 1);
      },
      onChange: function onChange(keywords) {
        return setKeywords(keywords);
      },
      ref: inputRef,
      className: styles.input
    }), /*#__PURE__*/_jsxs("span", {
      className: styles.shortcut,
      children: [symbol, " K"]
    }), keywords.trim() && focusing && (result.length || !loading) && !modalVisible && /*#__PURE__*/_jsx("div", {
      className: styles.popover,
      children: /*#__PURE__*/_jsx("section", {
        children: /*#__PURE__*/_jsx(SearchResult, {
          data: result,
          loading: loading
        })
      })
    }), /*#__PURE__*/_jsxs(Mask, {
      visible: modalVisible,
      onMaskClick: function onMaskClick() {
        setModalVisible(false);
      },
      onClose: function onClose() {
        return setKeywords('');
      },
      children: [/*#__PURE__*/_jsxs("div", {
        style: {
          position: 'relative'
        },
        children: [/*#__PURE__*/_jsx(SearchOutlined, {
          className: styles.svg
        }), /*#__PURE__*/_jsx(Input, {
          className: styles.input,
          onFocus: function onFocus() {
            return setFocusing(true);
          },
          onBlur: function onBlur() {
            // wait for item click
            setTimeout(function () {
              setFocusing(false);
            }, 1);
          },
          onChange: function onChange(keywords) {
            return setKeywords(keywords);
          },
          ref: modalInputRef
        })]
      }), /*#__PURE__*/_jsx(SearchResult, {
        data: result,
        loading: loading,
        onItemSelect: function onItemSelect() {
          setModalVisible(false);
        }
      })]
    })]
  });
};
export default SearchBar;