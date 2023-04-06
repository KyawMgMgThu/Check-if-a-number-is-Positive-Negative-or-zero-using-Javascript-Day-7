//Using Math.sign() method
// syntax: Math.sign(x);
function check(){
    var value = document.getElementById('data').value;
    if(value > 0){
        res = `${value} is Positive Number`;
    }
    else if(value < 0){
        res = `${value} is Negative Number`;
    }
    else if(value == 0){
        res = `${value} is Zero`;
    }
    document.getElementById('res').innerText = res;
}