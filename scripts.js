function newNum(num){
    const element = document.getElementById("screen");
    let text = element.innerHTML
    if (text[1]==undefined){
        element.innerHTML=num;
    }
    else if(text[2]==undefined){
        element.innerHTML+=num;
    }
    else if (text[4] ==undefined){
        text = text.substring(0, text.length - 1);
        text+=num
        element.innerHTML=text
    }
}
function newOperation(operation){
    const element = document.getElementById("screen");
    let text = element.innerHTML
    if(text[1]==undefined && text[0]!=undefined){
        element.innerHTML+=operation;
        console.log(operation)
    }
    else if (text[0]!=undefined && text[2]==undefined){
        text = text.substring(0, text.length - 1);
        text+=operation
        element.innerHTML=text
    }
}
function removeAll(){
    const element = document.getElementById("screen");
    element.innerHTML="";
}

function math(){
    const element = document.getElementById("screen");
    let text = element.innerHTML;
    firstNum = Number(text[0]);
    secondNum = Number(text[2]);
    
    if (firstNum && secondNum && text[4]==undefined){
        switch(text[1]){
            case '+':
                result = firstNum+secondNum;
                text+=" = "+result
                element.innerHTML=text
                break;
            case '-':
                result = firstNum-secondNum;
                text+=" = "+result
                element.innerHTML=text
                break;
            case '/':
                result = firstNum/secondNum;
                text+=" = "+result
                element.innerHTML=text
                break;
            case '*':
                result = firstNum*secondNum;
                text+=" = "+result
                element.innerHTML=text
                break;
            
        }
    }
}