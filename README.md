[![Build Status](https://travis-ci.org/bakasho-libs/remove.svg?branch=master)](https://travis-ci.org/bakasho-libs/remove)

## core.remove

returns an array of items for which predFunc returns false

```javascript

var remove = require("core.remove");

function isEven(v) {
    return v % 2 === 0;
}

remove(isEven, [1,2,3,4]); // returns [1,3]

```
