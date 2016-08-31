# WebapiActiveQueryBuilder.Totals

If any aggregations are defined there, the SELECT list of original query is replaced with the list of aggregations in transformed query. Filling aggregations is useful when you want to get totals for original query resultset.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | Column of original query to which an aggregate function will be applied. | [optional] 
**aggregate** | **String** | Aggregate function name. | [optional] 


<a name="AggregateEnum"></a>
## Enum: AggregateEnum


* `avg` (value: `"avg"`)

* `count` (value: `"count"`)

* `max` (value: `"max"`)

* `min` (value: `"min"`)

* `sum` (value: `"sum"`)




