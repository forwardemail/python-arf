# python-arf

[![build status](https://img.shields.io/travis/com/forwardemail/python-arf.svg)](https://travis-ci.com/forwardemail/python-arf)
[![code coverage](https://img.shields.io/codecov/c/github/forwardemail/python-arf.svg)](https://codecov.io/gh/forwardemail/python-arf)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/forwardemail/python-arf.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/python-arf.svg)](https://npm.im/python-arf)

> Node.js wrapper around the Python package arf, which is a processor for Abu se Reporting Format (ARF) messages.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install python-arf
```

[yarn][]:

```sh
yarn add python-arf
```


## Usage

```js
const PythonArf = require('python-arf');

const pythonArf = new PythonArf();

console.log(pythonArf.renderName());
// script
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
