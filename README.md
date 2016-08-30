# webapi-active-query-builder

Active Query Builder Web API lets create, analyze and modify SQL queries for different database servers using RESTful HTTP requests to a cloud-based service. It requires SQL execution context (information about database schema and used database server) to be stored under the registered account at https://webapi.activequerybuilder.com/.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install webapi-active-query-builder --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WebapiActiveQueryBuilder = require('webapi-active-query-builder');

var api = new WebapiActiveQueryBuilder.ActiveQueryBuilderApi()

var query = new WebapiActiveQueryBuilder.SqlQuery(); // {SqlQuery} Information about SQL query and it's context.

api.getQueryColumnsPost(query).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://webapi.activequerybuilder.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WebapiActiveQueryBuilder.ActiveQueryBuilderApi* | [**getQueryColumnsPost**](docs/ActiveQueryBuilderApi.md#getQueryColumnsPost) | **POST** /getQueryColumns | 
*WebapiActiveQueryBuilder.ActiveQueryBuilderApi* | [**transformSQLPost**](docs/ActiveQueryBuilderApi.md#transformSQLPost) | **POST** /transformSQL | 


## Documentation for Models

 - [WebapiActiveQueryBuilder.Condition](docs/Condition.md)
 - [WebapiActiveQueryBuilder.ConditionGroup](docs/ConditionGroup.md)
 - [WebapiActiveQueryBuilder.HiddenColumn](docs/HiddenColumn.md)
 - [WebapiActiveQueryBuilder.Pagination](docs/Pagination.md)
 - [WebapiActiveQueryBuilder.QueryColumn](docs/QueryColumn.md)
 - [WebapiActiveQueryBuilder.Sorting](docs/Sorting.md)
 - [WebapiActiveQueryBuilder.SqlQuery](docs/SqlQuery.md)
 - [WebapiActiveQueryBuilder.Totals](docs/Totals.md)
 - [WebapiActiveQueryBuilder.Transform](docs/Transform.md)
 - [WebapiActiveQueryBuilder.TransformResult](docs/TransformResult.md)


## Documentation for Authorization

 All endpoints do not require authorization.

