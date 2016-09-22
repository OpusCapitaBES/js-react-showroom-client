'use strict';

let libPath = require('path');
let semver = require('semver');

module.exports = {
  packages: [
    {
      name: 'test-showroom-activity',
      versionsFilter: version => semver.gt(version, '1.0.2')
    },
    {
      name: 'test-showroom-jcatalog-react-reference-search',
      versionsFilter: version => version === '2.3.4'
    },
    // {
    //   name: 'test-showroom-jcatalog-react-reference-search',
    //   versionsFilter: (version, index, arr) => index > (arr.length - 3)
    // }
  ],
  installationRoot: libPath.resolve(libPath.join(__dirname, '../tmp/npm-installer/packages')),
  packagesInfoPath: libPath.resolve(libPath.join(__dirname, '../tmp/npm-installer/packages-info.js'))
};
