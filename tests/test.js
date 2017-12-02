Promise = require('es6-promise').Promise;

var app    = require('webapi-active-query-builder'),
    chai   = require('chai'),
    assert = chai.assert;

function test () {
    this.timeout(10000);
    
    var api;
    var transform;
    var guid = "b3207f4f-b1f4-4dc2-979b-7724ed2d0221";
    var sql = "select customer_id, first_name, last_name, create_date from customer";

    beforeEach(function () {
        api = new app.ActiveQueryBuilderApi();
        transform = new app.Transform();
        transform.Guid = guid;
        transform.Sql = sql;
    });

    afterEach(function () {
        api = undefined;
        transform = undefined;
    });

    it("Avg", function (done) {
        var avg = new app.Totals();
        avg.field = 'first_name';
        avg.aggregate = app.Totals.AggregateEnum.avg;

        transform.totals = [avg];            
            
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'Select Avg(q.first_name) as first_nameavg From (Select customer.customer_id customer_id, customer.first_name first_name, customer.last_name last_name, customer.create_date create_date From customer) q';
                assert.equal(correct.toLowerCase(), result.totals.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });
    
    it("Max", function (done) {
        var max = new app.Totals();
        max.field = 'first_name';
        max.aggregate = app.Totals.AggregateEnum.max;

        transform.Totals = [max];
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'Select Max(q.first_name) as first_namemax From (Select customer.customer_id customer_id, customer.first_name first_name, customer.last_name last_name, customer.create_date create_date From customer) q';
                assert.equal(correct.toLowerCase(), result.totals.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });        

    it("Min", function (done) {
        var min = new app.Totals();
        min.field = 'first_name';
        min.aggregate = app.Totals.AggregateEnum.min;

        transform.Totals = [min];
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'Select Min(q.first_name) as first_namemin From (Select customer.customer_id customer_id, customer.first_name first_name, customer.last_name last_name, customer.create_date create_date From customer) q';
                assert.equal(correct.toLowerCase(), result.totals.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    it("Count", function (done) {
        var count = new app.Totals();
        count.field = 'first_name';
        count.aggregate = app.Totals.AggregateEnum.count;

        transform.Totals = [count];
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'Select count(q.first_name) as first_namecount From (Select customer.customer_id customer_id, customer.first_name first_name, customer.last_name last_name, customer.create_date create_date From customer) q';
                assert.equal(correct.toLowerCase(), result.totals.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    it("Sum", function (done) {
        var sum = new app.Totals();
        sum.field = 'first_name';
        sum.aggregate = app.Totals.AggregateEnum.sum;

        transform.Totals = [sum];
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'Select Sum(q.first_name) as first_namesum From (Select customer.customer_id customer_id, customer.first_name first_name, customer.last_name last_name, customer.create_date create_date From customer) q';
                assert.equal(correct.toLowerCase(), result.totals.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    it("Page", function (done) {
        var page = new app.Pagination();
        page.skip = 2;
        page.take = 3;

        transform.pagination = page;
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'select customer.customer_id, customer.first_name, customer.last_name, customer.create_date from customer limit 3 offset 2';
                assert.equal(correct.toLowerCase(), result.sql.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    it("OrderBy", function (done) {
        var order = new app.Sorting();
        order.field = 'customer_id';
        order.order = app.Sorting.OrderEnum.asc;

        transform.sortings = [order];
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'Select customer.customer_id, customer.first_name, customer.last_name, customer.create_date From customer order by customer.customer_id';
                assert.equal(correct.toLowerCase(), result.sql.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });;
    });

    it("OrderByDesc", function (done) {
        var order = new app.Sorting();
        order.field = 'customer_id';
        order.order = app.Sorting.OrderEnum.desc;

        transform.sortings = [order];
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'Select customer.customer_id, customer.first_name, customer.last_name, customer.create_date From customer order by customer.customer_id desc';
                assert.equal(correct.toLowerCase(), result.sql.toLowerCase());
                done();
            }).catch(function(error) {
                console.log(error);
            });;
    });

    it("Hide", function (done) {
        var column = new app.HiddenColumn();
        column.field = 'first_name';
        
        transform.hiddenColumns = [column];
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'select q.customer_id, q.last_name, q.create_date from (select customer.customer_id customer_id, customer.first_name first_name, customer.last_name last_name, customer.create_date create_date from customer) q';
                assert.equal(correct.toLowerCase(), result.sql.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    it("ConditionContains", function (done) {
        var filter = new app.ConditionGroup();
        
        var condition = new app.Condition();
        condition.field = 'first_name';
        condition.conditionOperator = app.Condition.ConditionOperatorEnum.Contains;
        condition.values = ['Orlando'];

        filter.conditions = [condition];
        
        transform.filter = filter;
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = "select customer.customer_id, customer.first_name, customer.last_name, customer.create_date from customer where customer.first_name like '%Orlando%'";
                assert.equal(correct.toLowerCase(), result.sql.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    it("ConditionLess", function (done) {
        var filter = new app.ConditionGroup();
        
        var condition = new app.Condition();
        condition.field = "customer_id"
        condition.conditionOperator = app.Condition.ConditionOperatorEnum.Less;
        condition.values = [5]

        filter.conditions = [condition]

        transform.filter = filter

        api.transformSQLPost(transform)
            .then(function (result) {
                correct = "select customer.customer_id, customer.first_name, customer.last_name, customer.create_date from customer where customer.customer_id < 5"
                assert.equal(correct.toLowerCase(), result.sql.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
        });

    it("ConditionBetween", function (done) {
        var filter = new app.ConditionGroup();
        
        var condition = new app.Condition();
        condition.field = 'customer_id';
        condition.conditionOperator = app.Condition.ConditionOperatorEnum.Between;
        condition.values = [1, 5];

        filter.conditions = [condition];

        transform.Filter = filter;
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'select customer.customer_id, customer.first_name, customer.last_name, customer.create_date from customer where customer.customer_id between 1 and 5';
                assert.equal(correct.toLowerCase(), result.sql.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });
    
    it("ConditionGroup", function (done) {
        var filter = new app.ConditionGroup();
        
        var conditionGroup = new app.ConditionGroup();
        
        var conditionNull = new app.Condition();
        conditionNull.field = 'customer_id';
        conditionNull.conditionOperator = app.Condition.ConditionOperatorEnum.IsNull;
        
        var conditionNotNull = new app.Condition();
        conditionNotNull.field = 'customer_id';
        conditionNotNull.conditionOperator = app.Condition.ConditionOperatorEnum.IsNotNull;
                    
        conditionGroup.conditions = [conditionNull, conditionNotNull];
        
        filter.conditionGroups = [conditionGroup];
        
        transform.filter = filter;
        api.transformSQLPost(transform)
            .then(function (result) {
                var correct = 'select customer.customer_id, customer.first_name, customer.last_name, customer.create_date from customer where ((customer.customer_id is null) or (customer.customer_id is not null))';
                assert.equal(correct.toLowerCase(), result.sql.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });;
    });

    it("IncorrectField", function (done) {
        var avg = new app.Totals();
        avg.field = 'id1';
        avg.totalFunc = app.Totals.AggregateEnum.avg;

        transform.totals = [avg];
        api.transformSQLPost(transform)
            .then(function (result) {
                assert.equal("querytransformer does't contain id1", result.error.toLowerCase());
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    it("getQueryColumns", function(done) {
        var query = new app.SqlQuery();
        query.guid = guid
        query.text = sql

        api.getQueryColumnsPost(query)
            .then(function(fields) {
                assert.equal(fields.length, 4);
                assert.equal('customer_id', fields[0].name.toLowerCase());
                assert.equal('smallint', fields[0].dataType);
                assert.equal('create_date', fields[3].name.toLowerCase());
                assert.equal("datetime", fields[3].dataType);
                done();
            })
            .catch(function(error) {
                console.log(error);
            });
    });
}

describe("QueryBuilderApi", test);
