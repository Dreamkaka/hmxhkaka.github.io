import { GithubFilled } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { memo } from 'react';
import { githubSel, useSiteStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
var GithubButton = function GithubButton() {
  var repoUrl = useSiteStore(githubSel);
  return !repoUrl ? null : /*#__PURE__*/_jsx(Tooltip, {
    arrow: false,
    title: 'Github',
    children: /*#__PURE__*/_jsx("a", {
      href: repoUrl,
      target: '_blank',
      rel: "noreferrer",
      children: /*#__PURE__*/_jsx(Button, {
        icon: /*#__PURE__*/_jsx(GithubFilled, {})
      })
    })
  });
};
export default /*#__PURE__*/memo(GithubButton);