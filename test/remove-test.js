var test = require("tape"),
    remove = require("../src/index");


test("remove", function(t) {

    var isEven = function(v) { 
        return v % 2 === 0;
    };

    t.looseEqual( remove(isEven, [1,2,3,4,5]), [1,3,5], "removes even numbers" );

    t.looseEqual( remove(function(v) {
        return v.length === 1;
    }, ["a", "aa", "b", "bb"]), ["aa", "bb"], "removes strings of length 1");



    t.end();
})
