const repeatString = function(text, num=0) {

    if (num<0){
        return 'ERROR'
    } else {

        let string = "";

        for (let i=0; i<num; i++){
            string+=text;
        };

        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
