//需要引入配置
var privacyConfig = require('./privacyConfig');

module.exports = {
  requestApi: '/api',
  //sql配置
  sqlConfig: privacyConfig.sqlConfig
};