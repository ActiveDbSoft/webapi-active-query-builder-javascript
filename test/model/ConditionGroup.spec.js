/**
 * QueryBuilderApi
 * Active Query Builder Web API lets create, analyze and modify SQL queries for different database servers using RESTful HTTP requests to a cloud-based service. It requires SQL execution context (information about database schema and used database server) to be stored under the registered account at https://webapi.activequerybuilder.com/.
 *
 * OpenAPI spec version: 1.0.0
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WebapiActiveQueryBuilder);
  }
}(this, function(expect, WebapiActiveQueryBuilder) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WebapiActiveQueryBuilder.ConditionGroup();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ConditionGroup', function() {
    it('should create an instance of ConditionGroup', function() {
      // uncomment below and update the code to test ConditionGroup
      //var instane = new WebapiActiveQueryBuilder.ConditionGroup();
      //expect(instance).to.be.a(WebapiActiveQueryBuilder.ConditionGroup);
    });

    it('should have the property junctionType (base name: "junctionType")', function() {
      // uncomment below and update the code to test the property junctionType
      //var instane = new WebapiActiveQueryBuilder.ConditionGroup();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new WebapiActiveQueryBuilder.ConditionGroup();
      //expect(instance).to.be();
    });

    it('should have the property conditionGroups (base name: "conditionGroups")', function() {
      // uncomment below and update the code to test the property conditionGroups
      //var instane = new WebapiActiveQueryBuilder.ConditionGroup();
      //expect(instance).to.be();
    });

  });

}));
