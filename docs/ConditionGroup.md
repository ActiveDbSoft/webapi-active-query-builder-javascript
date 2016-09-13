# WebapiActiveQueryBuilder.ConditionGroup

Group of conditions joined with the same boolean operator.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**junctionType** | **String** | Type of junction. All = AND; Any = OR. | [optional] 
**conditions** | [**[Condition]**](Condition.md) | List of conditions to join. | [optional] 
**conditionGroups** | [**[ConditionGroup]**](ConditionGroup.md) | List of nested condition groups to join them with a different boolean operator. | [optional] 


<a name="JunctionTypeEnum"></a>
## Enum: JunctionTypeEnum


* `And` (value: `"And"`)

* `Or` (value: `"Or"`)

* `Any` (value: `"Any"`)

* `All` (value: `"All"`)




