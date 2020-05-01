# Babel and Webpack Starter
A setup for transpiler and bundler using babel and webpack to run javascript code in the browser

## Transpiler 
- Reads code written in one language and produces the equivalent code in another.
- **Babel** is one of the most popular es6 transpilers.

## Bundler
- Combines multiple modules into one js file to reduce errors and resources on the client-side.
- **Webpack** allows us to create an environment that transforms es6 code with babel

```JSON
  "devDependencies": {
    "@babel/core": "^7.9.6",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.1.0",
    "babel-preset-env": "^1.7.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
  }
  ```

## Install dependencies
```
$ npm run install
```

## Run the application in development mode
```
$ npm run start
```

## Build the application in production mode
```
$ npm run build
```


