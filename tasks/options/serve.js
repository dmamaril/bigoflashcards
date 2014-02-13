var grunt = require('grunt');

module.exports = {
  nodemon: {
    dev: {
      script: 'server.js',
      options: {
        ext: ['js', 'json'],
        ignore: ['node_modules/**', 'public/**'],
        nodeArgs: ['--debug']
      }
    }
  }
};