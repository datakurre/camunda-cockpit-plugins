function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

___$insertStyle(".react-tabs__tab a {\n  cursor: pointer;\n}\n.react-tabs__tab.active a {\n  cursor: none;\n}\n\n.react-tabs__tab-panel--selected {\n  z-index: 1;\n}\n\n.Pane.vertical.Pane1 {\n  border-right: 1px solid #ddd;\n}\n\n.Resizer {\n  background: rgba(255, 255, 255, 0);\n  opacity: 0.2;\n  z-index: 1;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.Resizer:hover {\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n\n.Resizer.horizontal {\n  height: 11px;\n  margin: -5px 0;\n  border-top: 5px solid rgba(255, 255, 255, 0);\n  border-bottom: 5px solid rgba(255, 255, 255, 0);\n  cursor: row-resize;\n  width: 100%;\n}\n\n.Resizer.horizontal:hover {\n  border-top: 5px solid rgba(0, 0, 0, 0.5);\n  border-bottom: 5px solid rgba(0, 0, 0, 0.5);\n}\n\n.Resizer.vertical {\n  width: 11px;\n  margin: 0 -5px;\n  border-left: 5px solid rgba(255, 255, 255, 0);\n  border-right: 5px solid rgba(255, 255, 255, 0);\n  cursor: col-resize;\n}\n\n.Resizer.vertical:hover {\n  border-left: 5px solid rgba(0, 0, 0, 0.5);\n  border-right: 5px solid rgba(0, 0, 0, 0.5);\n}\n\n.Resizer.disabled {\n  cursor: not-allowed;\n}\n\n.Resizer.disabled:hover {\n  border-color: transparent;\n}");

var roboliteRoute = [
    {
        id: 'jupyterNavigation',
        pluginPoint: 'cockpit.navigation',
        properties: {
            pagePath: '#/jupyter',
            label: 'Jupyter Lab',
            priority: 1,
            checkActive: function (path) {
                return path.indexOf('#/jupyter') > -1;
            },
        }
    },
    {
        id: 'jupyterRoute',
        pluginPoint: 'cockpit.route',
        properties: {
            path: '/jupyter',
            label: '/jupyter',
        },
        render: function (node, _a) {
            var api = _a.api;
            var iframe = document.createElement('iframe');
            iframe.src = '../scripts/jupyter';
            iframe.style.setProperty('position', 'absolute');
            iframe.style.setProperty('top', '0px');
            iframe.style.setProperty('right', '0px');
            iframe.style.setProperty('bottom', '0px');
            iframe.style.setProperty('left', '0px');
            iframe.style.setProperty('width', '100%');
            iframe.style.setProperty('height', '100%');
            iframe.setAttribute('frameBorder', '0');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            node.appendChild(iframe);
            window.addEventListener("message", function (ev) {
                var _a, _b;
                if ((_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.location.toString().startsWith(ev.origin)) {
                    (_b = iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(api, ev.origin);
                }
            });
        },
    },
];

export default roboliteRoute;
