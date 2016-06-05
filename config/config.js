var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mubble-app'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mubble-express-development',
    options: { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }
  },

  test: {
    root: rootPath,
    app: {
      name: 'mubble-app'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mubble-express-test',
    options: { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }
  },

  production: {
    root: rootPath,
    app: {
      name: 'mubble-app'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://heroku_sth87trv:t596cl8eabv7kfl9be9j9f71th@ds023613.mlab.com:23613/heroku_sth87trv',
    options: { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }
  }
};

module.exports = config[env];
module.exports.secret = 'danielnestpasunartichot';
