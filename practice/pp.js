// 

function restpara(x, ...rest){
    return rest
}


const vv = (restpara(10, 12, 234, 53, "hello"));

console.log(typeof(vv));

