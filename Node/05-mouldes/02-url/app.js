const url = require('url')
var log4js = require('log4js')

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});


const logger = log4js.getLogger("cheese");
logger.level = "debug";
const urlString = 'https://www.baidu.com;443/path/index.html?id=2#tag=3'
logger.debug(url.parse(urlString))