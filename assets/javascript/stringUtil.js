/**
 * 
 * @param {*} str - string
 * 
 * Takes @param str as string arugment and replaces all characters with underscores '_',
 * unless the character is a space ' ', in which case the space will remain'.
 *
 */
function mask(str) {
    
    var maskedName = "";

    for(var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            maskedName = maskedName + " ";
        }
        else
        {
            maskedName = maskedName + "_"
        }
    }

    return maskedName;
}

/**
 * 
 * @param {*} searchStr - string
 * @param {*} str - string
 * 
 * Returns an array of all indices for a given string (@param str) in the @param searchStr.
 * If no @param searchStr is passed in, an empty array will be returned, otherwise both the
 * @param searchStr and the @param str will be lowercased
 */
function getIndicesOf(searchStr, str) {

    var searchStrLen = searchStr.length;

    if (searchStrLen === 0) {
        return [];
    }
    else {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    var startIndex = 0, index, indices = []

    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

/**
 * 
 * @param {*} str - the target string
 * @param {*} indices - array of indexes that need to be replaced
 * @param {*} replace - string that will be used to replace the current index
 * 
 */
function replaceAt(str, indices, replace) {
    for(var i = 0; i < indices.length; i++)
    {
        var currentIndex = indices[i];
        str = str.substring(0, currentIndex) + replace + str.substring(currentIndex + 1);
    }

    return str;
}

/**
 * 
 * @param {*} str 
 * 
 * Uses a regular expression to see if the input is a valid letter
 */
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }