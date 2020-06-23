function getCount(str) {
    var vowelsCount = 0;


    
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || "e" || "i" || "o" || "u") {
            console.log(str[i])
            vowelsCount += 1
        }
    }

    return vowelsCount;
}


getCount("o a kak ushakov lil vo kashu kakao")