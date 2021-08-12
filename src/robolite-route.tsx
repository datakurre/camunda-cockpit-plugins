import './instance-route-history.scss';

import React from 'react';
import {RoutePluginParams} from './types';

export default [
  {
    id: 'jupyterNavigation',
    pluginPoint: 'cockpit.navigation',
    properties: {
      pagePath: '#/jupyter',
      label: 'Jupyter Lab',
      priority: 1,
      checkActive: function(path: string) {
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

    render: (node: Element, { api }: RoutePluginParams) => {
        const iframe = document.createElement('iframe');
        iframe.src = '../scripts/jupyter';
        iframe.style.setProperty('position', 'absolute');
        iframe.style.setProperty('top', '0px');
        iframe.style.setProperty('right', '0px');
        iframe.style.setProperty('bottom', '0px');
        iframe.style.setProperty('left', '0px');
        iframe.style.setProperty('width', '100%');
        iframe.style.setProperty('height', '100%');
        iframe.setAttribute('frameBorder', '0')
        iframe.setAttribute('width', '100%')
        iframe.setAttribute('height', '100%')
        node.appendChild(iframe);
        window.addEventListener("message", (ev: MessageEvent) => {
            if (iframe.contentWindow?.location.toString().startsWith(ev.origin)) {
                iframe.contentWindow?.postMessage(api, ev.origin);
            }
        })
    },
  },
];
