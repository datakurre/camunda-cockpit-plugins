Minimal "history plugins" for Camunda Cockpit
=============================================

![Minimal history plugin in action.](plugin.gif)

Try it

```bash
$ git clone https://github.com/datakurre/camunda-cockpit-plugins.git
$ docker run --rm -p 8080:8080 -v $(pwd)/camunda-cockpit-plugins:/camunda/webapps/camunda/app/cockpit/scripts/:ro camunda/camunda-bpm-platform:latest
```

Develop it

```bash
$ cd camunda-cockpit-plugins
$ npm install
$ npm run watch
```

When the scripts are mounted into running Docker container, development changes are immediately available in the container.
