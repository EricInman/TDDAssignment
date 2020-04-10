
function greet(name='my friend'){
    if(typeof(name) === 'string')
        return handleSingleName(name);
    else
        return handleMultipleNames(name);
};

function handleSingleName(name){
    if(checkUpperCase(name))
        return "HELLO, " + name + "!";
    return "Hello, " + name + ".";
}

function handleMultipleNames(name){
    var upperNames = [];
    var normalNames = [];
    for(var i = 0; i < name.length; i++){
        var entry = name[i];

        if(entry.includes('\"')){
            entry = entry.replace(/"/g, '');
            entry = entry.split('$'); // this line basically puts the string in an array so the loop can process it correctly
        }
        else
            entry = entry.split(', ');

        for(var j = 0; j < entry.length; j++){
            if(checkUpperCase(entry[j]))
                upperNames.push(entry[j]);
            else
                normalNames.push(entry[j]);
        }
    }
    var shoutingString = separateNameSentences(upperNames, true);
    var normalString = separateNameSentences(normalNames, false);

    if(shoutingString !== null)
        return normalString + " " + shoutingString;
    return normalString;
}

function separateNameSentences(names, isUpper){
    if(names.length === 0)
        return null;

    var returnString = "Hello, ";

    if(isUpper)
        var returnString = "AND HELLO ";

    if(names.length === 1 && isUpper)
        return returnString + names[0] + "!";
    else if(names.length === 1 && !isUpper)
        return returnString + names[0] + ".";

    for(var i = 0; i < names.length-1; i++){
        if(names.length > 2)
            returnString += names[i] + ", ";
        else
            returnString += names[i] + " ";
    }

    if(isUpper)
        return returnString + "AND " + names[names.length-1] + "!";
    else
        return returnString + "and " + names[names.length-1] + ".";
}

function checkUpperCase(name){
    return name === name.toUpperCase();
}

module.exports = {greet};