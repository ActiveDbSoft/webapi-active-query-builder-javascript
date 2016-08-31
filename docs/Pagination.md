# WebapiActiveQueryBuilder.Pagination

Instructs to limit the number of rows in transformed query resultset taking limitations of original query into account. In other words, if original query contains row limitation clause, it will be wrapped into a derived table and additional row limitation clause will be added ontop.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip** | **Integer** | Number of rows to skip from the top of original resultset. | [optional] 
**take** | **Integer** | Number of rows to get from orignal to new resultset. | [optional] 


