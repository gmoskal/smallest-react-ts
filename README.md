# Smallest React/Typescript build example

<img alt="Smallest React/Typescript build and publish example" src="https://www.svgrepo.com/show/84150/hedgehog.svg" width="100px" />

## Running

To start and install type

```sh
npm i; npm start
```

then visit `http://localhost:1234`

## Publishing as github page

to compile project and make it ready to be published as `github page` type

```sh
npm run build
```

Compiled application is now available in `docs/` directory. 
Two additional steps are needed to make your application live.

1. In your github repository settings under `GitHub Pages` sections set `master branch /docs folder` as a source
2. `commit` and `push` compiled files to your git repo (`docs/` folder)

When that finished, your app should be available on https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/ 

This repo build is availabe [here](https://gmoskal.github.io/smallest-react-ts/)

## Happy coding
