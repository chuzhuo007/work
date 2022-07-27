import './index.less';
//点击数字的方法
//BUG 小数问题 乘除第二个数不能是负数
window.num= function (num1) {
    let text = document.getElementById("text");
    let t1 = text.value;
    //判断第一次是否是点 是点返回0.
    if (t1 == "" && num1 == ".") {
        text.value = "0."
        return;
    }
    //判断第一个是否为0，为0不可以继续输入0
    if (num1 == 0 && t1 == "0") {
        return;
    }
    //第二个数 输入的是0的话 把01 变成1
    if (num1 == 0 && t1.split("+")[1] == "0") {

        return;
    } else if (t1.indexOf('+') != -1 && t1.split("+")[1] == "0") {  //如果有
        if (num1 != '.') {

            text.value = t1.substr(0, t1.length - 1) + num1;
        } else {
            text.value = t1.substr(0, t1.length - 1) + 0 + num1;
        }
        return;

    } else if (num1 == 0 && t1.split("-")[1] == "0") {

        return;
    } else if (t1.indexOf('-') != -1 && t1.split("-")[1] == "0") {
        if (num1 != '.') {
            text.value = t1.substr(0, t1.length - 1) + num1;
        } else {
            text.value = t1.substr(0, t1.length - 1) + 0 + num1;
        }
        return;

    } else if (num1 == 0 && t1.split("*")[1] == "0") {

        return;
    } else if (t1.indexOf('*') != -1 && t1.split("*")[1] == "0") {
        if (num1 != '.') {
            text.value = t1.substr(0, t1.length - 1) + num1;
        } else {
            text.value = t1.substr(0, t1.length - 1) + 0 + num1;
        }
        return;

    } else if (num1 == 0 && t1.split("÷")[1] == "0") {

        return;
    } else if (t1.indexOf('÷') != -1 && t1.split("÷")[1] == "0") {
        if (num1 != '.') {
            text.value = t1.substr(0, t1.length - 1) + num1;
        } else {
            text.value = t1.substr(0, t1.length - 1) + 0 + num1;
        }
        return;

    }
    //如果存在两个-号 并且 最后一位现在是0 减号在0前
    if (num1 != '.' && t1.match(/-/g) != null && t1.match(/-/g).length == 2 && t1.substr(t1.length - 1, t1.length - 1) == 0 && t1.substr(t1.length - 2, t1.length - 3) == '-'
    ) {
        // alert(t1.substr(t1.length-1,t1.length-1))
        // alert(t1.substr(t1.length-2,t1.length-3))
        //在输入0 就返回
        if (num1 == 0) {
            // alert(0)
            return
        } else {
            // 在第二个数0后面继续输入除零以外的数 会变成这个数 比如01 变成1
            alert(t1.substr(0, t1.length - 1) + num1)
            text.value = t1.substr(0, t1.length - 1) + num1;
            return;
        }
    }

    //如果第一个数是0，不让出现01,02这种数字,换为1,2 并且
    if (num1 != 0 && num1 != '.' && t1 == "0") {
        text.value = num1;
        return;
    }
    //判断是否有.和运算符后有·
    //判断是否有.并且是否有运算符 并且现在输入的是.
    //这个if结尾在161行
    if ((t1.indexOf('.') != -1 || t1.indexOf('+') != -1 || t1.indexOf('-') != -1 || t1.indexOf('*') != -1 || t1.indexOf('÷') != -1) && num1 == ".") {
        //如果有运算符并且运算符在最后一位 例”3+“  输入.会变成0.
        if (t1.indexOf('+') != -1 && t1.indexOf('+') == t1.length - 1) {
            text.value = t1 + '0.'
            return;
        } else if (t1.indexOf('-') != -1 && t1.indexOf('-') == t1.length - 1) {
            text.value = t1 + '0.'
            return;
        } else if (t1.indexOf('*') != -1 && t1.indexOf('*') == t1.length - 1) {
            text.value = t1 + '0.'
            return;
        } else if (t1.indexOf('÷') != -1 && t1.indexOf('÷') == t1.length - 1) {
            text.value = t1 + '0.'
            return;
        }
        //如果有+并且+不是出现在末尾,说明有数据 把他当成数
        if (t1.indexOf('+') != -1 && t1.indexOf('+') != t1.length - 1) {
            var arr = t1.split("+");
            //如果等于-1没有.
            //例如9+9  9没有点 回填上.
            if (arr[1].indexOf('.') == -1) {
                //  alert(arr[1])
                text.value = t1 + num1;
            }

        }
        //负数出现重复.问题  
        if (t1.indexOf('-') != -1 && t1.indexOf('-') != t1.length - 1) {
            //有两个-并且最后不是.并且第二个数没点
            // alert(t1.split("-")[2])
            //判断第二个数是否是有 如果没有 点击. 会出现0.
            if (t1.match(/-/g) != null && t1.match(/-/g).length == 2 && t1.substr(t1.length - 1, t1.length - 1) != '.'
                && t1.split("-")[2] == "") {
                // alert(2)
                text.value = t1 + '0.'
                return;
            } else if (t1.split("-").length > 2 && t1.split("-")[2].indexOf('.') == -1) {//判断第二个数是否有点没点就加
                text.value = t1 + num1;
            }
            else if (t1.match(/-/g) != null && t1.match(/-/g).length == 1) {
                // alert(0);
                var arr = t1.split("-");
                //如果等于-1没有.
                if (arr[1].indexOf('.') == -1) {
                    // alert(1)
                    // alert(arr[1])
                    text.value = t1 + num1;
                }
            }

        }
        if (t1.indexOf('*') != -1 && t1.indexOf('*') != t1.length - 1) {
            var arr = t1.split("*");
            //如果等于-1没有.
            if (arr[1].indexOf('.') == -1) {
                // alert(arr[1])
                text.value = t1 + num1;
            }

        }
        if (t1.indexOf('÷') != -1 && t1.indexOf('÷') != t1.length - 1) {
            var arr = t1.split("÷");
            //如果等于-1没有.
            if (arr[1].indexOf('.') == -1) {
                // alert(arr[1])
                text.value = t1 + num1;
            }

        }
        return;
    }

    text.value = t1 + num1;
}
//清空方法
window.returnToZero=function () {
    let text = document.getElementById("text");
    text.value = "";
}
//回退方法
window.huitui=function () {
    let text = document.getElementById("text");
    let t1 = text.value;
    text.value = t1.substr(0, t1.length - 1);
}
//运算符规律
window.jisuan=function (operator) {
    let text = document.getElementById("text");
    let t1 = text.value;
    let arr;
    //存负数
    // var arr1;
    //判断是否上来直接输入的是负号
    if (operator == "-" && t1 == "") {
        text.value = 0 + '-';
    }
    //不能上来直接输入运算符
    if (t1 == "") {
        return;
    }
    //判断是输入过运算符
    else if (t1.indexOf('+') == -1 & t1.indexOf('-') == -1 & t1.indexOf('*') == -1 & t1.indexOf('÷') == -1) {
        text.value = t1 + operator;
    }
    //如果输入过运算符进行计算
    else if (t1.indexOf('+') != -1 || t1.indexOf('-') != -1 || t1.indexOf('*') != -1 || t1.indexOf('÷') != -1) {
        //    alert(t1.match(/-/g).length)
        //第一个数是负数并且存在+/-/*/÷
        if (t1.indexOf('+') != -1 && t1.indexOf('+') == t1.length - 1 && operator == '-') {
            text.value = t1.split('+')[0] + '-';
        }
        if (t1.indexOf('-') == 0 && (t1.indexOf('+') != -1 || t1.indexOf('*') != -1 || t1.indexOf('÷') != -1)) {
            //判断有哪个运算符并且运算符不能在末尾
            if (t1.indexOf('+') != -1 && t1.indexOf('+') != t1.length - 1) {
                arr = t1.split('+')
                text.value = parseFloat(arr[0]) + parseFloat(arr[1]) + operator;
            }
            if (t1.indexOf('*') != -1 && t1.indexOf('*') != t1.length - 1) {
                arr = t1.split('*')
                text.value = parseFloat(arr[0]) * parseFloat(arr[1]) + operator;
            }
            if (t1.indexOf('÷') != -1 && t1.indexOf('÷') != t1.length - 1) {
                arr = t1.split('÷')
                text.value = parseFloat(arr[0]) / parseFloat(arr[1]) + operator;

            }
            return;
        }
        if (t1.match(/-/g) != null && t1.match(/-/g).length == 2 && t1.substr(t1.length - 1, t1.length - 1) == "-") {
            return;
        }

        //如果+出现在最后我不会让你点加号再去计算 因为split根据+分割       
        if (t1.indexOf('+') != -1 && t1.indexOf('+') != t1.length - 1) {

            arr = t1.split("+");
            text.value = parseFloat(arr[0]) + parseFloat(arr[1]);

            text.value = text.value + operator
        } else
            //如果-的位置不在最后
            if (t1.indexOf('-') != -1 && t1.indexOf('-') != t1.length - 1) {
                //如果两个减的位置不相等
                if (t1.match(/-/g) != null && t1.match(/-/g).length == 2 && t1.substr(t1.length - 1, t1.length - 1) != "-") {
                    // alert(1)
                    arr = t1.split("-");
                    // alert(parseInt("-"+arr[1]))
                    // alert(parseInt("-"+arr[2]))

                    text.value = parseFloat("-" + arr[1]) + parseFloat("-" + arr[2]) + operator;

                    return;
                }

                arr = t1.split("-");
                //如果框中为-1- 把负号删除变成 -1 在按- 不让他去计算
                if (arr[0] == "") {
                    text.value = t1 + operator;
                    return;
                }

                text.value = parseFloat(arr[0]) - parseFloat(arr[1]);

                text.value = text.value + operator
            } else if (t1.indexOf('*') != -1 && t1.indexOf('*') != t1.length - 1) {
                arr = t1.split("*");


                text.value = parseFloat(arr[0]) * parseFloat(arr[1]);
                text.value = text.value + operator
            } else if (t1.indexOf('÷') != -1 && t1.indexOf('÷') != t1.length - 1) {
                arr = t1.split("÷");
                text.value = parseFloat(arr[0]) / parseFloat(arr[1]);

                text.value = text.value + operator
            }
        // else if(t1.indexOf('-')!=-1&&t1.indexOf('*'!=-1)){
        //     alert(1)
        // }


    }
}



window.denghao=function () {

    let text = document.getElementById("text");
    let t1 = text.value;
    let arr;
    if (t1.indexOf('-') == 0 && (t1.indexOf('+') != -1 || t1.indexOf('*') != -1 || t1.indexOf('÷') != -1)) {
        //判断有哪个运算符并且运算符不能在末尾
        if (t1.indexOf('+') != -1 && t1.indexOf('+') != t1.length - 1) {
            arr = t1.split('+')

            text.value = parseFloat(arr[0]) + parseFloat(arr[1]);
        } else if (t1.indexOf('*') != -1 && t1.indexOf('*') != t1.length - 1) {
            arr = t1.split('*')
            text.value = parseFloat(arr[0]) * parseFloat(arr[1]);
        } else if (t1.indexOf('÷') != -1 && t1.indexOf('÷') != t1.length - 1) {
            arr = t1.split('÷')

            text.value = parseFloat(arr[0]) / parseFloat(arr[1]);

        }
        return;
    }

    if (t1.indexOf('+') != -1 && t1.indexOf('+') != t1.length - 1) {
        arr = t1.split("+");
        text.value = parseFloat(arr[0]) + parseFloat(arr[1]);
    } else if (t1.indexOf('-') != -1 && t1.indexOf('-') != t1.length - 1) {
        //如果两个减的位置不相等

        if (t1.match(/-/g) != null && t1.match(/-/g).length == 2 && t1.substr(t1.length - 1, t1.length - 1) != "-") {
            // alert(1)
            arr = t1.split("-");
            // alert(parseInt("-"+arr[1]))
            // alert(parseInt("-"+arr[2]))

            text.value = parseFloat("-" + arr[1]) + parseFloat("-" + arr[2]);

            return;
        }
        arr = t1.split("-");
        //如果框中为-1- 把负号删除变成 -1 在按- 不让他去计算
        if (arr[0] == "") {
            text.value = t1;
            return;
        }
        text.value = parseFloat(arr[0]) - parseFloat(arr[1]);
    } else if (t1.indexOf('*') != -1 && t1.indexOf('*') != t1.length - 1) {

        arr = t1.split("*");
        text.value = parseFloat(arr[0]) * parseFloat(arr[1]);
    } else if (t1.indexOf('÷') != -1 && t1.indexOf('÷') != t1.length - 1) {
        arr = t1.split("÷");
        text.value = parseFloat(arr[0]) / parseFloat(arr[1]);

    }
}
