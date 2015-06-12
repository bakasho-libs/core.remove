module.exports = remove;

function remove(predFunc, array) {

    var len = array.length,
        result = [],
        index = -1;

    while (++index < len) {

        if (!predFunc(array[index])) {

            result[result.length] = array[index];

        }

    }

    return result;
}
