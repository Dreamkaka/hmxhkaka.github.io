import { useOutlet } from 'dumi';
import DemoProvider from "../../components/DemoProvider";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function () {
  var outlet = useOutlet();
  return /*#__PURE__*/_jsx(DemoProvider, {
    children: outlet
  });
});