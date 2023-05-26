import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import TOC from "../../components/Toc";
import { tocAnchorItemSel, useSiteStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
var Toc = /*#__PURE__*/memo(function () {
  var items = useSiteStore(tocAnchorItemSel, isEqual);
  return /*#__PURE__*/_jsx(TOC, {
    items: items
  });
});
export default Toc;