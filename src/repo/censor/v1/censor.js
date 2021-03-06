/*
 * Copyright 2018 JDCLOUD.COM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http:#www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 站点检测类接口
 * 京东云内容安全-OpenAPI站点检测类接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'censor'
Service._services[serviceId] = true

/**
 * censor service.
 * @version 1.0.1
 */

class CENSOR extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'censor.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  提交音频异步检测任务
      * @param {Object} opts - parameters
      * @param {} [opts.scenes] - 指定检测场景  optional
      * @param {} [opts.tasks] - 检测任务列表，包含一个或多个元素。每个元素是个结构体，最多可添加10个元素，每个元素的具体结构描述见audioTask。  optional
      * @param {} [opts.callback] - 异步检测结果回调通知您的URL，支持HTTP/HTTPS。该字段为空时，您必须定时检索检测结果。  optional
      * @param {} [opts.seed] - 随机字符串，该值用于回调通知请求中的签名。当使用callback时，该字段必须提供。  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param taskData data
      */

  asyncAudioScan (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.scenes !== undefined && opts.scenes !== null) {
      postBody['scenes'] = opts.scenes
    }
    if (opts.tasks !== undefined && opts.tasks !== null) {
      postBody['tasks'] = opts.tasks
    }
    if (opts.callback !== undefined && opts.callback !== null) {
      postBody['callback'] = opts.callback
    }
    if (opts.seed !== undefined && opts.seed !== null) {
      postBody['seed'] = opts.seed
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call asyncAudioScan with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/audio:asyncscan',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查看音频异步检测结果
      * @param {Object} opts - parameters
      * @param {array} opts.taskIds
      * @param {string} callback - callback
      @return {Object} result
      * @param audioResult data
      */

  audioResults (opts, callback) {
    opts = opts || {}

    if (opts.taskIds === undefined || opts.taskIds === null) {
      throw new Error(
        "Missing the required parameter 'opts.taskIds' when calling audioResults"
      )
    }

    let postBody = {}
    if (opts.taskIds !== undefined && opts.taskIds !== null) {
      postBody['taskIds'] = opts.taskIds
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call audioResults with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/audio:results',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  删除敏感库
      * @param {Object} opts - parameters
      * @param {string} opts.libId - 敏感库id
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  deleteCensorLib (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteCensorLib"
      )
    }

    opts = opts || {}

    if (opts.libId === undefined || opts.libId === null) {
      throw new Error(
        "Missing the required parameter 'opts.libId' when calling deleteCensorLib"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.libId !== undefined && opts.libId !== null) {
      queryParams['libId'] = opts.libId
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call deleteCensorLib with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/regions/{regionId}/customCensorLib:custom',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  删除敏感库Item
      * @param {Object} opts - parameters
      * @param {string} opts.libId - 敏感库id
      * @param {string} opts.itemId - itemId，支持多个，用&#39;,&#39;分隔，表示批量删除
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  deleteCensorLibItems (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteCensorLibItems"
      )
    }

    opts = opts || {}

    if (opts.libId === undefined || opts.libId === null) {
      throw new Error(
        "Missing the required parameter 'opts.libId' when calling deleteCensorLibItems"
      )
    }
    if (opts.itemId === undefined || opts.itemId === null) {
      throw new Error(
        "Missing the required parameter 'opts.itemId' when calling deleteCensorLibItems"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.libId !== undefined && opts.libId !== null) {
      queryParams['libId'] = opts.libId
    }
    if (opts.itemId !== undefined && opts.itemId !== null) {
      queryParams['itemId'] = opts.itemId
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call deleteCensorLibItems with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/regions/{regionId}/customCensorLib:customItem',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  图片同步检测
      * @param {Object} opts - parameters
      * @param {} [opts.scenes] - 指定检测场景  optional
      * @param {} [opts.tasks] - 检测任务列表，包含一个或多个元素。每个元素是个结构体，最多可添加10个元素，即最多对10段文本进行检测。每个元素的具体结构描述见ImageTask。  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param imageResult data
      */

  imageScan (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.scenes !== undefined && opts.scenes !== null) {
      postBody['scenes'] = opts.scenes
    }
    if (opts.tasks !== undefined && opts.tasks !== null) {
      postBody['tasks'] = opts.tasks
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call imageScan with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/image:scan',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  提交图片异步检测任务
      * @param {Object} opts - parameters
      * @param {} [opts.scenes] - 指定检测场景  optional
      * @param {} [opts.tasks] - 检测任务列表，包含一个或多个元素。每个元素是个结构体，最多可添加10个元素，每个元素的具体结构描述见ImageTask。  optional
      * @param {} [opts.callback] - 异步检测结果回调通知您的URL，支持HTTP/HTTPS。该字段为空时，您必须定时检索检测结果。  optional
      * @param {} [opts.seed] - 随机字符串，该值用于回调通知请求中的签名。当使用callback时，该字段必须提供。  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param taskData data
      */

  asyncImageScan (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.scenes !== undefined && opts.scenes !== null) {
      postBody['scenes'] = opts.scenes
    }
    if (opts.tasks !== undefined && opts.tasks !== null) {
      postBody['tasks'] = opts.tasks
    }
    if (opts.callback !== undefined && opts.callback !== null) {
      postBody['callback'] = opts.callback
    }
    if (opts.seed !== undefined && opts.seed !== null) {
      postBody['seed'] = opts.seed
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call asyncImageScan with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/image:asyncscan',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查看图片异步检测结果
      * @param {Object} opts - parameters
      * @param {array} opts.taskIds
      * @param {string} callback - callback
      @return {Object} result
      * @param imageResult data
      */

  imageResults (opts, callback) {
    opts = opts || {}

    if (opts.taskIds === undefined || opts.taskIds === null) {
      throw new Error(
        "Missing the required parameter 'opts.taskIds' when calling imageResults"
      )
    }

    let postBody = {}
    if (opts.taskIds !== undefined && opts.taskIds !== null) {
      postBody['taskIds'] = opts.taskIds
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call imageResults with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/image:results',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  删除限制参数配置
      * @param {Object} opts - parameters
      * @param {string} opts.limitId - 限制参数配置id
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  deleteLimit (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteLimit"
      )
    }

    opts = opts || {}

    if (opts.limitId === undefined || opts.limitId === null) {
      throw new Error(
        "Missing the required parameter 'opts.limitId' when calling deleteLimit"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.limitId !== undefined && opts.limitId !== null) {
      queryParams['limitId'] = opts.limitId
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call deleteLimit with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/regions/{regionId}/limit:limit',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  文本同步检测-检测文本中是否包含违规信息
      * @param {Object} opts - parameters
      * @param {} [opts.scenes] - 指定检测场景，固定值：antispam  optional
      * @param {} [opts.tasks] - 检测任务列表，包含一个或多个元素。每个元素是个结构体，最多可添加10个元素，即最多对10段文本进行检测。每个元素的具体结构描述见TextTask。  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param textResult data
      */

  textScan (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.scenes !== undefined && opts.scenes !== null) {
      postBody['scenes'] = opts.scenes
    }
    if (opts.tasks !== undefined && opts.tasks !== null) {
      postBody['tasks'] = opts.tasks
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call textScan with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/text:scan',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  文本同步检测-检测文本中是否包含违规信息
      * @param {Object} opts - parameters
      * @param {} [opts.scenes] - 指定检测场景，固定值：antispam  optional
      * @param {} [opts.tasks] - 检测任务列表，包含一个或多个元素。每个元素是个结构体，最多可添加10个元素，即最多对10段文本进行检测。每个元素的具体结构描述见TextTask。  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param textResult data
      */

  innerTextScan (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.scenes !== undefined && opts.scenes !== null) {
      postBody['scenes'] = opts.scenes
    }
    if (opts.tasks !== undefined && opts.tasks !== null) {
      postBody['tasks'] = opts.tasks
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call innerTextScan with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/text:innerscan',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  提交视频异步检测任务
      * @param {Object} opts - parameters
      * @param {} [opts.live] - 是否直播。默认为false，表示为普通视频检测；若是直播检测，该值必须传入true。  optional
      * @param {} [opts.scenes] - 指定检测场景  optional
      * @param {} [opts.audioScenes] - 视频中语音的检测场景  optional
      * @param {} [opts.tasks] - 检测任务列表，包含一个或多个元素。每个元素是个结构体，最多可添加10个元素，每个元素的具体结构描述见videoTask。  optional
      * @param {} [opts.callback] - 异步检测结果回调通知您的URL，支持HTTP/HTTPS。该字段为空时，您必须定时检索检测结果。  optional
      * @param {} [opts.seed] - 随机字符串，该值用于回调通知请求中的签名。当使用callback时，该字段必须提供。  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param taskData data
      */

  asyncVideoScan (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.live !== undefined && opts.live !== null) {
      postBody['live'] = opts.live
    }
    if (opts.scenes !== undefined && opts.scenes !== null) {
      postBody['scenes'] = opts.scenes
    }
    if (opts.audioScenes !== undefined && opts.audioScenes !== null) {
      postBody['audioScenes'] = opts.audioScenes
    }
    if (opts.tasks !== undefined && opts.tasks !== null) {
      postBody['tasks'] = opts.tasks
    }
    if (opts.callback !== undefined && opts.callback !== null) {
      postBody['callback'] = opts.callback
    }
    if (opts.seed !== undefined && opts.seed !== null) {
      postBody['seed'] = opts.seed
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call asyncVideoScan with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/video:asyncscan',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查看视频异步检测结果
      * @param {Object} opts - parameters
      * @param {array} opts.taskIds
      * @param {string} callback - callback
      @return {Object} result
      * @param videoResult data
      */

  videoResults (opts, callback) {
    opts = opts || {}

    if (opts.taskIds === undefined || opts.taskIds === null) {
      throw new Error(
        "Missing the required parameter 'opts.taskIds' when calling videoResults"
      )
    }

    let postBody = {}
    if (opts.taskIds !== undefined && opts.taskIds !== null) {
      postBody['taskIds'] = opts.taskIds
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  censor/1.0.1'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call videoResults with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/video:results',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = CENSOR
