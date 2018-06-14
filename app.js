var moveFwd, moveBck;
document.getElementById('ps').onclick = function() {
    clearInterval(moveFwd);
    moveFwd = false;
    clearInterval(moveBck);
    moveBck = false;
    console.log("Pause!");
};

var fwdFn = function() {
    clearInterval(moveBck);
    moveBck = false;
    if (!moveFwd) {
        var val = document.getElementById('left').value,
            len = val.length;
        if (len !== 0) {
            moveFwd = setInterval (function() {
                var newVal = val.substring(0, 1);
                val = val.substring(1);
                document.getElementById('left').value = val;
                document.getElementById('right').value += newVal; 
                console.log('left to  right: ' + newVal);
                len--;
                if (len === 0) {
                    clearInterval(moveFwd);
                    moveFwd = false;
                }
            }, 1000);
        }
    }
};

var backFn = function() {
    clearInterval(moveFwd);
    moveFwd = false;
    if (!moveBck) {
        var val = document.getElementById('right').value,
            len = val.length;
        if (len !== 0) {
            moveBck = setInterval (function() {
                var newVal = val.substring(document.getElementById('right').value.length - 1, document.getElementById('right').value.length);
                val = val.substring(0, document.getElementById('right').value.length - 1);
                document.getElementById('right').value = val;
                document.getElementById('left').value = newVal + document.getElementById('left').value;
                console.log('right to  left: ' + newVal);
                len--;
                if (len === 0) {
                    clearInterval(moveBck);
                    moveBck = false;
                }
            }, 1000);
        }
    }
};
document.getElementById('fwd').addEventListener('click', fwdFn);
document.getElementById('back').addEventListener('click', backFn);
