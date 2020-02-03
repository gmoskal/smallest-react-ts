# Smallest React/Typescript build example

## compiling

To start and install type

```sh
npm i; npm start
```

then visit `http://localhost:1234`

## publishing

to compile project and make it ready to be published as `github page` type

```sh
npm run build
```

Compiled application is now available in `docs/` directory. Now you need two additional steps in order to make your application available online.

1. In your github repository settings under `GitHub Pages` sections set `master branch /docs folder` as a source
2. `commit` and `push` compiled files to your git repo (`docs/` folder)

After that your app is available online on https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/ (for this example repo that is [https://gmoskal.github.io/smallest-react-ts/](https://gmoskal.github.io/smallest-react-ts/))
