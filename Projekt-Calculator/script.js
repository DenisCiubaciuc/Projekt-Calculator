let a = ''; // first number
let b = ''; // second number
let sign = ''; // action sign
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9']
const action = ['-','+','/','*']

const out = document.querySelector('.output') // visible output

function clearAll(){
    a = ''; // first number
    b = ''; // second number
    sign = ''; // action sign
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.calculator-grid').onclick = (event) => {
    // if(event.target.classList.contains('ac')) return;
    out.textContent = '0';
    let key = event.target.textContent; 
    if(digit.includes(key)){
        if(b ==='' && sign ===''){
        a += key;
        console.log(a,b, sign)
        out.textContent = a;
        }
        else if(a !== '' && b !== '' && finish){
            b = key
            finish = false;
            out.content = b
        }
        else{
            b += key;
        console.log(a,b, sign)
        out.textContent = b;
        }
        
    }

    if(action.includes(key)){
        sign = key;
        console.log(a,b, sign)
        out.textContent = sign;
        return
    }

    if(key === '='){
        switch(sign){
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = (+a) - (+b)
                break;
            case '*':
                a = a * b
                break;
            case '/':
                a = a / b
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a,b, sign)

    }
}

