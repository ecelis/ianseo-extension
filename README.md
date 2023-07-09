# Arqueria Docker Desktop Extension

The extension allows Ianseo archery tournaments management software
to run in a docker desktop runtime environment.

The goal is to present a simple and unified way to run the software
cross-platform.

This work builds on top of other people work, the open source community
but specially the Ianseo Team https://ianseo.net


## Local development

You can use `docker` to build, install and push your extension. Also, we provide an opinionated [Makefile](Makefile) that could be convenient for you. There isn't a strong preference of using one over the other, so just use the one you're most comfortable with.

To build the extension, use `make build-extension` **or**:

```shell
  docker buildx build -t ecelis/arqueria-desktop:latest . --load
```

To install the extension, use `make install-extension` **or**:

```shell
  docker extension install ecelis/arqueria-desktop:latest
```

> If you want to automate this command, use the `-f` or `--force` flag to accept the warning message.

To preview the extension in Docker Desktop, open Docker Dashboard once the installation is complete. The left-hand menu displays a new tab with the name of your extension. You can also use `docker extension ls` to see that the extension has been installed successfully.

### Frontend development

During the development of the frontend part, it's helpful to use hot reloading to test your changes without rebuilding your entire extension. To do this, you can configure Docker Desktop to load your UI from a development server.
Assuming your app runs on the default port, start your UI app and then run:

```shell
  cd ui
  npm install
  npm run dev
```

This starts a development server that listens on port `3000`.

You can now tell Docker Desktop to use this as the frontend source. In another terminal run:

```shell
  docker extension dev ui-source ecelis/arqueria-desktop:latest http://localhost:3000
```

In order to open the Chrome Dev Tools for your extension when you click on the extension tab, run:

```shell
  docker extension dev debug ecelis/arqueria-desktop:latest
```

Each subsequent click on the extension tab will also open Chrome Dev Tools. To stop this behaviour, run:

```shell
  docker extension dev reset ecelis/arqueria-desktop:latest
```

### Clean up

To remove the extension:

```shell
docker extension rm ecelis/arqueria-desktop:latest
```

