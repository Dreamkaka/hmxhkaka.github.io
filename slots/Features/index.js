import { shallow } from 'zustand/shallow';
import FeatureBlock from "../../components/Features";
import { featuresSel, useSiteStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
var Features = function Features() {
  var features = useSiteStore(featuresSel, shallow);
  if (!Boolean(features === null || features === void 0 ? void 0 : features.length)) return null;
  return /*#__PURE__*/_jsx(FeatureBlock, {
    items: features,
    style: {
      margin: '0 16px'
    }
  });
};
export default Features;