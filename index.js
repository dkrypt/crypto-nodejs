const ffi = require('ffi-napi');
const path = require('path');

let lib = '';
if (process.platform === 'win32') {
  lib = path.join(__dirname, '/lib/windows/crypto.dll');
}
if (process.platform === 'darwin') {
  lib = path.join(__dirname, '/lib/darwin/crypto.dylib');
}
if (process.platform === 'linux') {
  lib = path.join(__dirname, '/lib/linux/crypto.so');
}
const cryptoLib = ffi.Library(lib, {
  'ValidateTokenExp': ['string', ['string']],
  'GeneratePassphrase': ['string', []],
  'RefreshPassphrase': ['void', []]
});

module.exports = {
  GeneratePassphrase: () => {
    return cryptoLib.GeneratePassphrase();
  },
  ValidateTokenExp: (token) => {
    return cryptoLib.ValidateTokenExp(token);
  },
  RefreshPassphrase: () => {
    return cryptoLib.RefreshPassphrase();
  }
}