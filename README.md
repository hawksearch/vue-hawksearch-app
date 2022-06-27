# vue-hawksearch-app

This app bundles [Hawksearch Vue SDK](https://github.com/hawksearch/vue-hawksearch) and other dependencies into one
.js file. This file is going to be used for creation extensions and plugins integrated with Hawksearch.

## Requirements

* Node 14

## Installation

```sh
npm install
```

## Development

```sh
npm run dev
cd vue-hawksearch-app
npm link
cd your-plugin
npm link vue-hawksearch-app
```

Now you are able to make any changes in   `vue-hawksearch-app` and get bundled app once files are saved.

## Build

```sh
npm run build
```

## Usage

Get the bundled app js file `dist/js/vue-hawksearch-app.js` and use in your project. 
## Debug on production
