# Smallest React/Typescript build example

<img alt="Smallest React/Typescript build and publish example" src="https://www.svgrepo.com/show/84150/hedgehog.svg" width="100px" />

## Running

To install packages and start local http server type

```sh
npm i; npm start
```

your parcel dev server should be running on [http://localhost:1234](http://localhost:1234)

## Publishing as a github page

In order to publish your project as github, enable `github pages` on your repo setting. 
(To be precise: go to repository settings under `GitHub Pages` sections set as a source: `master branch /docs folder`)

Then build your project by typing

```sh
npm run build
```

That compiles your react/ts app into your local _docs/_ folder. Now add all generated content to your git repo and `push` it.
When that will finish, your app should be available on https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/ 

This repo build is available [here](https://gmoskal.github.io/smallest-react-ts/)
## Happy coding
