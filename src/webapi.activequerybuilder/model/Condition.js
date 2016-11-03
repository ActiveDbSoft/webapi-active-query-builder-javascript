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
    root.WebapiActiveQueryBuilder.Condition = factory(root.WebapiActiveQueryBuilder.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Condition model module.
   * @module webapi.activequerybuilder/model/Condition
   * @version 1.1.8
   */

  /**
   * Constructs a new <code>Condition</code>.
   * Defines a constraint for original query resultset values.
   * @alias module:webapi.activequerybuilder/model/Condition
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Condition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:webapi.activequerybuilder/model/Condition} obj Optional instance to populate.
   * @return {module:webapi.activequerybuilder/model/Condition} The populated <code>Condition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('conditionOperator')) {
        obj['conditionOperator'] = ApiClient.convertToType(data['conditionOperator'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Column of original query to which a constraint will applied.
   * @member {{String}} field
   */
  exports.prototype['field'] = undefined;
  /**
   * Condition operator.
   * @member {{module:webapi.activequerybuilder/model/Condition.ConditionOperatorEnum}} conditionOperator
   */
  exports.prototype['conditionOperator'] = undefined;
  /**
   * List of values for a constraint. 'IsNull', 'IsNotNull' need no values; 'Between', 'NotBetween' require 2 values; 'In' accepts one or more values; other conditions accept single value only.
   * @member {{Array.<String>}} values
   */
  exports.prototype['values'] = undefined;


  /**
   * Allowed values for the <code>conditionOperator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ConditionOperatorEnum = {
    /**
     * value: "IsNull"
     * @const
     */
    "IsNull": "IsNull",
    /**
     * value: "IsNotNull"
     * @const
     */
    "IsNotNull": "IsNotNull",
    /**
     * value: "Equal"
     * @const
     */
    "Equal": "Equal",
    /**
     * value: "NotEqual"
     * @const
     */
    "NotEqual": "NotEqual",
    /**
     * value: "Less"
     * @const
     */
    "Less": "Less",
    /**
     * value: "NotLess"
     * @const
     */
    "NotLess": "NotLess",
    /**
     * value: "LessEqual"
     * @const
     */
    "LessEqual": "LessEqual",
    /**
     * value: "NotLessEqual"
     * @const
     */
    "NotLessEqual": "NotLessEqual",
    /**
     * value: "Greater"
     * @const
     */
    "Greater": "Greater",
    /**
     * value: "NotGreater"
     * @const
     */
    "NotGreater": "NotGreater",
    /**
     * value: "GreaterEqual"
     * @const
     */
    "GreaterEqual": "GreaterEqual",
    /**
     * value: "NotGreaterEqual"
     * @const
     */
    "NotGreaterEqual": "NotGreaterEqual",
    /**
     * value: "Between"
     * @const
     */
    "Between": "Between",
    /**
     * value: "NotBetween"
     * @const
     */
    "NotBetween": "NotBetween",
    /**
     * value: "In"
     * @const
     */
    "In": "In",
    /**
     * value: "NotIn"
     * @const
     */
    "NotIn": "NotIn",
    /**
     * value: "Contains"
     * @const
     */
    "Contains": "Contains",
    /**
     * value: "DoesntContain"
     * @const
     */
    "DoesntContain": "DoesntContain",
    /**
     * value: "StartsWith"
     * @const
     */
    "StartsWith": "StartsWith",
    /**
     * value: "DoesntStartWith"
     * @const
     */
    "DoesntStartWith": "DoesntStartWith",
    /**
     * value: "EndsWith"
     * @const
     */
    "EndsWith": "EndsWith",
    /**
     * value: "DoesntEndWith"
     * @const
     */
    "DoesntEndWith": "DoesntEndWith"  };


  return exports;
}));


