# webapi-active-query-builder

Active Query Builder Web API lets create, analyze and modify SQL queries for different database servers using RESTful HTTP requests to a cloud-based service. It requires SQL execution context (information about database schema and used database server) to be stored under the registered account at https://webapi.activequerybuilder.com/.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install webapi-active-query-builder --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var webapi = require('webapi-active-query-builder');

var api = new webapi.ActiveQueryBuilderApi();
var sql = "Select customer_id, first_name From customer";
var metadataGuid = "b3207f4f-b1f4-4dc2-979b-7724ed2d0221";

var query = new webapi.SqlQuery(); // {SqlQuery} Information about SQL query and it's context.
query.guid = metadataGuid;
query.text = sql;

api.getQueryColumnsPost(query)
	.then(function(columns) {
  		console.log('API called successfully. Returned columns: ' + columns);
	});

var transform = new webapi.Transform();
transform.guid = metadataGuid;
transform.sql = sql;

var filter = new webapi.ConditionGroup();
            
var condition = new webapi.Condition();
condition.field = 'customer_id';
condition.conditionOperator = webapi.Condition.ConditionOperatorEnum.Greater;
condition.values = [10];

filter.conditions = [condition];

var page = new webapi.Pagination();
page.skip = 10;
page.take = 5;

var order = new webapi.Sorting();
order.field = 'customer_id';
order.order = webapi.Sorting.OrderEnum.asc;

transform.filter = filter;
transform.pagination = page;
transform.sortings = [order];

api.transformSQLPost(transform)
	.then(function (result) {
		console.log('API called successfully. Returned query: ' + result.sql);
	});

```

## Documentation for API Endpoints

All URIs are relative to *https://webapi.activequerybuilder.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WebapiActiveQueryBuilder.ActiveQueryBuilderApi* | [**getQueryColumnsPost**] | **POST** /getQueryColumns | 
*WebapiActiveQueryBuilder.ActiveQueryBuilderApi* | [**transformSQLPost**] | **POST** /transformSQL | 


## Documentation for Models

 - [WebapiActiveQueryBuilder.Condition](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/Condition.md)
 - [WebapiActiveQueryBuilder.ConditionGroup](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/ConditionGroup.md)
 - [WebapiActiveQueryBuilder.HiddenColumn](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/HiddenColumn.md)
 - [WebapiActiveQueryBuilder.Pagination](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/Pagination.md)
 - [WebapiActiveQueryBuilder.QueryColumn](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/QueryColumn.md)
 - [WebapiActiveQueryBuilder.Sorting](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/Sorting.md)
 - [WebapiActiveQueryBuilder.SqlQuery](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/SqlQuery.md)
 - [WebapiActiveQueryBuilder.Totals](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/Totals.md)
 - [WebapiActiveQueryBuilder.Transform](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/Transform.md)
 - [WebapiActiveQueryBuilder.TransformResult](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript/blob/master/docs/TransformResult.md)


## Documentation for Authorization

All endpoints do not require authorization.


## Source code

Full source code of all clients for Active Query Builder Web API is available on GitHub. Get the source code of javascript here: [https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript](https://github.com/ActiveDbSoft/webapi-active-query-builder-javascript)
