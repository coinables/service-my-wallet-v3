
var key = {
  address: 'address1',
  label: 'first address',
  balance: 3000,
  totalReceived: 10000
};

var newKey = {
  address: 'generated',
  label: 'my new address'
};

var account = {
  xpub: 'xpub123456'
};

var newAccount = {
  xpub: 'xpubGenerated',
  label: 'my new account'
};

var hdwallet = {
  xpubs: [account.xpub]
};

var wallet = {
  isUpgradedToHD: true,
  finalBalance: 9000,
  activeKeys: [key],
  hdwallet: hdwallet,
  key: function () { return key; },
  newLegacyAddress: function () { return newKey; },
  newAccount: function () { return newAccount; }
};

module.exports = wallet;
