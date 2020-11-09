"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postCommit = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import apiconfig from './../../apiconfig'

/**
 * 提交评论
*/
var postCommit = function postCommit(data) {
  return new Promise(function (resolve, reject) {
    _axios["default"].post('http://172.18.34.17:3000/v1/chili/postcommits', data, {
      headers: {
        'Accept': 'text/javascript, application/javascript, application/ x-javascript, */*',
        'Authorization': window.localStorage.token
      }
    }).then(function (data) {
      resolve(data);
    })["catch"](function (error) {
      reject(error.response.data.error);
    });
  });
};

exports.postCommit = postCommit;