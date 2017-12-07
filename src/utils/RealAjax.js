import Logger from './Logger';
import superagent from 'superagent';
import globalConfig from '../config';

const logger = new Logger('Ajax');

// 模拟统一的延迟, 返回promise对象

/**
 * 封装所有ajax逻辑, 为了配合async/await, 所有ajax请求都要返回promise对象
 */
class Ajax {

  // Ajax工具类提供的方法可以分为2种:
  // 1. 基础的get/post方法, 这些是通用的
  // 2. 在get/post基础上包装的业务方法, 比如getCurrentUser, 这些方法是有业务含义的

  // 作为缓存
  tableCache = new Map();

  /**
   * 内部方法, 在superagent api的基础上, 包装一些全局的设置
   *
   * @param method 要请求的方法
   * @param url 要请求的url
   * @param params url上的额外参数
   * @param data 要发送的数据
   * @param headers 额外设置的http header
   * @returns {Promise}
   */
  requestWrapper(method, url, {params, data, headers} = {}) {
    logger.debug('method=%s, url=%s, params=%o, data=%o, headers=%o', method, url, params, data, headers);
    return new Promise((resolve, reject) => {
      const tmp = superagent(method, url);
      // 是否是跨域请求
      if (globalConfig.isCrossDomain()) {
        tmp.withCredentials();
      }
      // 设置全局的超时时间
      if (globalConfig.api.timeout && !isNaN(globalConfig.api.timeout)) {
        tmp.timeout(globalConfig.api.timeout);
      }
      // 默认的Content-Type和Accept
      tmp.set('Content-Type', 'application/json').set('Accept', 'application/json');
      // 如果有自定义的header
      if (headers) {
        tmp.set(headers);
      }
      // url中是否有附加的参数?
      if (params) {
        tmp.query(params);
      }
      // body中发送的数据
      if (data) {
        tmp.send(data);
      }
      // 包装成promise
      tmp.end((err, res) => {
        logger.debug('err=%o, res=%o', err, res);
        // 我本来在想, 要不要在这里把错误包装下, 即使请求失败也调用resolve, 这样上层就不用区分"网络请求成功但查询数据失败"和"网络失败"两种情况了
        // 但后来觉得这个ajax方法是很底层的, 在这里包装不合适, 应该让上层业务去包装
        if (res && res.body) {
          resolve(res);
        } else {
          reject(err || res);
        }
      });
    });
  }

  // 基础的get/post方法

  get(url, opts = {}) {
    return this.requestWrapper('GET', url, {...opts});
  }

  delete(url, opts = {}) {
    return this.requestWrapper('DELETE', url, {...opts});
  }

  post(url, data, opts = {}) {
    return this.requestWrapper('POST', url, {...opts, data});
  }

  put(url, data, opts = {}) {
    return this.requestWrapper('PUT', url, {...opts, data});
  }


  // 业务方法
   /**
   * 登出
   *
   * @returns {*}
   */
  logout(){
    return this.post(`${globalConfig.getAPIPath()}${globalConfig.login.logout}`, {'access-token': sessionStorage.getItem('access_token') || ''});
  }
  /**
   * 获取当前登录的用户
   *
   * @returns {*}
   */
  getCurrentUser() {
    return this.post(`${globalConfig.getAPIPath()}${globalConfig.login.getCurrentUser}`, {'access-token': sessionStorage.getItem('access_token') || ''});
  }

  /**
   * 用户登录
   *
   * @param username
   * @param password
   */
  login(username, password) {
    
    const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    return this.post(`${globalConfig.getAPIPath()}${globalConfig.login.validate}`, {account : username, pwd : password}, {headers});
  }
  // getCurrentUser() {
  //   return mockPromise(resolve => {
  //     result.success = true;
  //     result.data = 'guest';
  //     resolve(result);
  //   });
  // }

  // login(username, password) {
  //   return mockPromise(resolve => {
  //     if (username === 'guest' && password === 'guest') {
  //       result.success = true;
  //       result.data = 'guest';
  //       resolve(result);
  //     } else {
  //       result.success = false;
  //       result.code = 100;
  //       result.message = 'invalid username or password';
  //       resolve(result);
  //     }
  //   });
  // }

  /**
   *  封装CRUD相关操作
   *
   * @param tableName 要操作的表名
   * @returns {*}
   */
  CRUD(tableName) {
    if (this.tableCache.has(tableName)) {
      return this.tableCache.get(tableName);
    }

    const util = new CRUDUtil(tableName);
    util.ajax = this;
    this.tableCache.set(tableName, util);
    return util;
  }
}

/**
 * 封装CRUD相关操作, 有点内部类的感觉
 */
class CRUDUtil {
  constructor(tableName) {
    this.tableName = tableName;
  }

  /**
   * 查询某个表
   *
   * @param queryObj 查询条件封装为一个对象
   * @returns {*}
   */
  select(queryObj) {
    let q = Object.assign({}, queryObj);
    if(q.companyName && q.companyName !== ''){
      q.companyName = '~(' + q.companyName + ')';
    }
    if(q.name && q.name !== ''){
      q.name = '~(' + q.name + ')';
    }
    delete q.page;
    delete q.pageSize;
    return this.ajax.get(`${globalConfig.getAPIPath()}/${this.tableName}`, {params: {query : JSON.stringify(q)}});
  }

  /**
   * 给某个表新增一条数据
   *
   * @param dataObj 要新增的数据
   * @returns {*}
   */
  insert(dataObj) {
    return this.ajax.post(`${globalConfig.getAPIPath()}/${this.tableName}`, dataObj);
  }

  /**
   * 更新某个表的数据, 可以批量, 也可以单条
   *
   * @param keys 要更新的记录的主键
   * @param dataObj 要更新哪些字段
   * @returns {*}
   */
  update(keys = [], dataObj) {
    const tmp = keys.join(',');
    return this.ajax.put(`${globalConfig.getAPIPath()}/${this.tableName}/${tmp}`, dataObj);
  }

  /**
   * 删除某个表的数据, 可以批量, 也可以单条
   *
   * @param keys 要删除的记录的主键
   * @returns {*}
   */
  delete(keys = []) {
    if(keys.length > 1){
      keys.map(k=>{
        return this.ajax.delete(`${globalConfig.getAPIPath()}/${this.tableName}/${k.toString()}`)
      }) 
    }else{
      return this.ajax.delete(`${globalConfig.getAPIPath()}/${this.tableName}/${keys[0].toString()}`);
    }
    
  }

  /**
   * 从服务端获取某个表的schema, 会merge到本地的schema中
   *
   * @returns {*}
   */
  getRemoteSchema() {
    return this.ajax.get(`${globalConfig.getAPIPath()}/${this.tableName}/schema`);
  }
}

export default Ajax;
