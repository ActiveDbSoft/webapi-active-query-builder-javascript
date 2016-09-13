/**
 * QueryBuilderApi
 * Active Query Builder Web API lets create, analyze and modify SQL queries for different database servers using RESTful HTTP requests to a cloud-based service. It requires SQL execution context (information about database schema and used database server) to be stored under the registered account at https://webapi.activequerybuilder.com/.
 *
 * OpenAPI spec version: 1.1.5
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
    define(['webapi.activequerybuilder/ApiClient', 'webapi.activequerybuilder/model/Condition', 'webapi.activequerybuilder/model/ConditionGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Condition'), require('./ConditionGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.WebapiActiveQueryBuilder) {
      root.WebapiActiveQueryBuilder = {};
    }
    root.WebapiActiveQueryBuilder.ConditionGroup = factory(root.WebapiActiveQueryBuilder.ApiClient, root.WebapiActiveQueryBuilder.Condition, root.WebapiActiveQueryBuilder.ConditionGroup);
  }
}(this, function(ApiClient, Condition, ConditionGroup) {
  'use strict';




  /**
   * The ConditionGroup model module.
   * @module webapi.activequerybuilder/model/ConditionGroup
   * @version 1.1.6
   */

  /**
   * Constructs a new <code>ConditionGroup</code>.
   * Group of conditions joined with the same boolean operator.
   * @alias module:webapi.activequerybuilder/model/ConditionGroup
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ConditionGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:webapi.activequerybuilder/model/ConditionGroup} obj Optional instance to populate.
   * @return {module:webapi.activequerybuilder/model/ConditionGroup} The populated <code>ConditionGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('junctionType')) {
        obj['junctionType'] = ApiClient.convertToType(data['junctionType'], 'String');
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], [Condition]);
      }
      if (data.hasOwnProperty('conditionGroups')) {
        obj['conditionGroups'] = ApiClient.convertToType(data['conditionGroups'], [ConditionGroup]);
      }
    }
    return obj;
  }

  /**
   * Type of junction. All = AND; Any = OR.
   * @member {{module:webapi.activequerybuilder/model/ConditionGroup.JunctionTypeEnum}} junctionType
   */
  exports.prototype['junctionType'] = undefined;
  /**
   * List of conditions to join.
   * @member {{Array.<module:webapi.activequerybuilder/model/Condition>}} conditions
   */
  exports.prototype['conditions'] = undefined;
  /**
   * List of nested condition groups to join them with a different boolean operator.
   * @member {{Array.<module:webapi.activequerybuilder/model/ConditionGroup>}} conditionGroups
   */
  exports.prototype['conditionGroups'] = undefined;


  /**
   * Allowed values for the <code>junctionType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.JunctionTypeEnum = {
    /**
     * value: "And"
     * @const
     */
    "And": "And",
    /**
     * value: "Or"
     * @const
     */
    "Or": "Or",
    /**
     * value: "Any"
     * @const
     */
    "Any": "Any",
    /**
     * value: "All"
     * @const
     */
    "All": "All"  };


  return exports;
}));


