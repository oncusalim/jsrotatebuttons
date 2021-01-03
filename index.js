
var dizi = [1, 2, 3, 6, 9, 8, 7, 4];
var dizi3 = [1, 2, 3, 6, 9, 8, 7, 4];
var dizi5 = [];
var dizi4 = [[1, 1], [2, 2], [3, 3], [4, 4], [6, 6], [7, 7], [8, 8], [9, 9]];
text = "";

function dondur() {
    var son = dizi.pop();
    dizi.unshift(son);
   
    var i2 = 0;
    for (i2 = 0; i2 < 8; i2++) {
        dizi5[i2] = [dizi3[i2], dizi[i2]];
    }
   


    var i3 = 1;
    var i4 = 0;
    for (i3 = 1; i3 < 10; i3++) {
        for (i4 = 0; i4 < 8; i4++) {
            if (i3 == dizi5[i4][0]) {
                text += '<button class="btn" id ="btn' + dizi5[i4][1] + '">' + dizi5[i4][1] + '</button>';
            }
            
        }
        if (i3 == 5) {
                text += '<button class="btn" id ="btn5" onclick="dondur()">5</button>';
               
            }


    }
    document.getElementById("btns").innerHTML = text;
    text = "";
    
}

dizi4.forEach((arr) => {
    text += '<button class="btn" id ="btn' + arr[1] + '">' + arr[1] + '</button>';
    if (arr[0] == 4) { text += '<button class="btn" id ="btn5" onclick="dondur()">5</button>'; }
});
var i = 0;
document.getElementById("btns").innerHTML = text;
text = "";
