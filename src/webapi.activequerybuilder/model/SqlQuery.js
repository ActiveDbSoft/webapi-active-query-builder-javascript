/**
 * QueryBuilderApi
 * Active Query Builder Web API lets create, analyze and modify SQL queries for different database servers using RESTful HTTP requests to a cloud-based service. It requires SQL execution context (information about database schema and used database server) to be stored under the registered account at https://webapi.activequerybuilder.com/.
 *
 * OpenAPI spec version: 1.1.3
 * Contact: support@activedbsoft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['webapi.activequerybuilder/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WebapiActiveQueryBuilder) {
      root.WebapiActiveQueryBuilder = {};
    }
    root.WebapiActiveQueryBuilder.SqlQuery = factory(root.WebapiActiveQueryBuilder.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SqlQuery model module.
   * @module webapi.activequerybuilder/model/SqlQuery
   * @version 1.1.5
   */

  /**
   * Constructs a new <code>SqlQuery</code>.
   * Information about SQL query and it&#39;s context.
   * @alias module:webapi.activequerybuilder/model/SqlQuery
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SqlQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:webapi.activequerybuilder/model/SqlQuery} obj Optional instance to populate.
   * @return {module:webapi.activequerybuilder/model/SqlQuery} The populated <code>SqlQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier that defines SQL execution context for the given query, i.e. database server (SQL syntax rules),  database schema. The context itself must be saved in the user account on https://webapi.activequerybuilder.com/.
   * @member {{String}} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * SQL query text.
   * @member {{String}} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


