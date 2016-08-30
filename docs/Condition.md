# WebapiActiveQueryBuilder.Condition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | Column of original query to which a constraint will applied. | [optional] 
**conditionOperator** | **String** | Condition operator. | [optional] 
**values** | **[String]** | List of values for a constraint. \&quot;IsNull\&quot;, \&quot;IsNotNull\&quot; need no values; \&quot;Between\&quot;, \&quot;NotBetween\&quot; require 2 values; \&quot;In\&quot; accepts one or more values; other conditions accept single value only. | [optional] 


<a name="ConditionOperatorEnum"></a>
## Enum: ConditionOperatorEnum


* `IsNull` (value: `"IsNull"`)

* `IsNotNull` (value: `"IsNotNull"`)

* `Equal` (value: `"Equal"`)

* `NotEqual` (value: `"NotEqual"`)

* `Less` (value: `"Less"`)

* `NotLess` (value: `"NotLess"`)

* `LessEqual` (value: `"LessEqual"`)

* `NotLessEqual` (value: `"NotLessEqual"`)

* `Greater` (value: `"Greater"`)

* `NotGreater` (value: `"NotGreater"`)

* `GreaterEqual` (value: `"GreaterEqual"`)

* `NotGreaterEqual` (value: `"NotGreaterEqual"`)

* `Between` (value: `"Between"`)

* `NotBetween` (value: `"NotBetween"`)

* `In` (value: `"In"`)

* `NotIn` (value: `"NotIn"`)

* `Like` (value: `"Like"`)

* `NotLike` (value: `"NotLike"`)




