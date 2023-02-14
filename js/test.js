
//append numberr
function easyLoop(){
    let result = "";
    for(let i=0; i<=100; i++){
        if(i%7===0){
            result += i;
        }
    }
    return result;
}

console.log(easyLoop());


function strangeWord(word) {
    let res;

    for (let i = 0; i < word.length ; i++) {
        if(i%2===0){
            res= +word[i]
        }
    }

    return res;
}

function goldenMiddle(a, b) {
    let res = [];

    res.push(a[1])
    res.push(b[1])
    return res;
}

function theGround(obj) {
    if(obj.name.length === obj.category.length) {
        return obj.name;
    }else if(obj.name.length > obj.category.length) {
        return obj.name;
    }else
        return obj.category;
}
