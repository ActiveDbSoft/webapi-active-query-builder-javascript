/**
 * QueryBuilderApi
 * Active Query Builder Web API lets create, analyze and modify SQL queries for different database servers using RESTful HTTP requests to a cloud-based service. It requires SQL execution context (information about database schema and used database server) to be stored under the registered account at https://webapi.activequerybuilder.com/.
 *
 * OpenAPI spec version: 1.1.8
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
    root.WebapiActiveQueryBuilder.Totals = factory(root.WebapiActiveQueryBuilder.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Totals model module.
   * @module webapi.activequerybuilder/model/Totals
   * @version 1.1.8
   */

  /**
   * Constructs a new <code>Totals</code>.
   * If any aggregations are defined there, the SELECT list of original query is replaced with the list of aggregations in transformed query. Filling aggregations is useful when you want to get totals for original query resultset.
   * @alias module:webapi.activequerybuilder/model/Totals
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Totals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:webapi.activequerybuilder/model/Totals} obj Optional instance to populate.
   * @return {module:webapi.activequerybuilder/model/Totals} The populated <code>Totals</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('aggregate')) {
        obj['aggregate'] = ApiClient.convertToType(data['aggregate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Column of original query to which an aggregate function will be applied.
   * @member {{String}} field
   */
  exports.prototype['field'] = undefined;
  /**
   * Aggregate function name.
   * @member {{module:webapi.activequerybuilder/model/Totals.AggregateEnum}} aggregate
   */
  exports.prototype['aggregate'] = undefined;


  /**
   * Allowed values for the <code>aggregate</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AggregateEnum = {
    /**
     * value: "avg"
     * @const
     */
    "avg": "avg",
    /**
     * value: "count"
     * @const
     */
    "count": "count",
    /**
     * value: "max"
     * @const
     */
    "max": "max",
    /**
     * value: "min"
     * @const
     */
    "min": "min",
    /**
     * value: "sum"
     * @const
     */
    "sum": "sum"  };


  return exports;
}));


