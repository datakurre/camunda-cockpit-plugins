Minimal "history plugins" for Camunda Cockpit
=============================================

![Minimal history plugin in action.](plugin.gif)


Try it
------

With Camunda Platform 7.14.0:

```bash
$ git clone https://github.com/datakurre/camunda-cockpit-plugins.git
$ docker run --rm -p 8080:8080 -v $(pwd)/camunda-cockpit-plugins:/camunda/webapps/camunda/app/cockpit/scripts/:ro camunda/camunda-bpm-platform:7.14.0
```

With Camunda Platform 7.15.0:

```bash
$ git clone https://github.com/datakurre/camunda-cockpit-plugins.git
$ docker run -d --name mytemp camunda/camunda-bpm-platform:7.15.0
$ docker cp mytemp:/camunda/webapps/camunda/app/cockpit/scripts/camunda-cockpit-ui.js camunda-cockpit-plugins
$ docker rm -vf mytemp
$ docker run --rm -p 8080:8080 -v $(pwd)/camunda-cockpit-plugins:/camunda/webapps/camunda/app/cockpit/scripts/:ro camunda/camunda-bpm-platform:7.15.0
```

See also the example [Dockerfile for Camunda Run 7.15.0](https://github.com/datakurre/camunda-cockpit-plugins/issues/16#issuecomment-874499953).

If you don't immediately see the plugin, try again with your browser's private browsing mode. It is a common issue browser has cached a previous Cockpit plugin configuration without these plugins.

Note: Trying out the plugins with Camunda Platform 7.15.0 Docker image is more complex than with the previous version 7.14.0, because the new location of `camunda-cockpit-ui.js` prevents simple override of the scripts folder.


Use it
------

[Check the forum discussion on how to package plugins for various alternative Camunda distributions.](https://forum.camunda.org/t/minimal-cockpit-history-plugins-for-camunda-7-14-0/24651)


Develop it
----------

```bash
$ cd camunda-cockpit-plugins
$ npm install
$ npm run watch
```

When the scripts are mounted into running Docker container, development changes are immediately available in the container with page refresh.
