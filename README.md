# crypto-nodejs

A simple native library wrapper for LIBRA crypto library.


## Getting Started

```sh
git clone https://github.com/dc-release/crypto-nodejs.git
cd crypto-nodejs
npm install
```

## SDK API

This npm module exports three (3) methods from the crypto native library.

* `GeneratePassphrase() - string`
* `ValidateTokenExp(string) - string`
* `RefreshPassphrase() - void`

## Usage

```js
const crypto = require('crypto-nodejs');

console.log(crypto.GeneratePassphrase());
```