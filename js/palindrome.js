exports.palindrome = function(initialWord) {

    if (String(initialWord).toLowerCase().split("").reverse().join("") == String(initialWord).toLowerCase()){
        return true;
    }else{
        return false;
    }
};
