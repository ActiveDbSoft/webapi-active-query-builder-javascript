# WebapiActiveQueryBuilder.Transform

SQL transformation parameters and commands.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **String** | Unique identifier that defines SQL execution context for the given query, i.e. database server (SQL syntax rules),  database schema. The context itself must be saved in the user account on https://webapi.activequerybuilder.com/. | [optional] 
**sql** | **String** | Text of original SQL query to be transformed. | [optional] 
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**totals** | [**[Totals]**](Totals.md) |  | [optional] 
**sortings** | [**[Sorting]**](Sorting.md) |  | [optional] 
**filter** | [**ConditionGroup**](ConditionGroup.md) |  | [optional] 
**hiddenColumns** | [**[HiddenColumn]**](HiddenColumn.md) |  | [optional] 


