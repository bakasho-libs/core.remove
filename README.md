## remove

returns an array of items for which predFunc returns false

```javascript

function isEven(v) {
    return v % 2 === 0;
}

remove(isEven, [1,2,3,4]); // returns [1,3]

```
