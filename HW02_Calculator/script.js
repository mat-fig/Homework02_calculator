//Elements
const options = {'NUM': 0, 'FUNC': 1, 'MISC': 2}
let n_f = document.getElementById("numbers-functions")
let dis = document.getElementById('display_panel')
let acc = []

//Main function
function main() { begin_listening() }

//Logic functions
function begin_listening() {
    n_f.addEventListener('click', button_pressed)
}

function button_pressed(event){
    //only respond to numbers or functions
    if (event.target.className === 'number') {
        display_values(event.target.innerHTML,0)
    }
    else if (event.target.id === 'misc') {
        display_values(event.target.innerHTML,2)
    }
    else if (event.target.className === 'function') {
        display_values(event.target.innerHTML,1)
    }
}

function display_values(data, op) {
    if (op == options.NUM){
        switch(data){
            case '0':
                dis.textContent = '0'
                acc.push('0')
                break;
            case '1':
                dis.textContent = '1'
                acc.push('1')
                break;
            case '2':
                dis.textContent = '2'
                acc.push('2')
                break;
            case '3':
                dis.textContent = '3'
                acc.push('3')
                break;
            case '4':
                dis.textContent = '4'
                acc.push('4')
                break;
            case '5':
                dis.textContent = '5'
                acc.push('5')
                break;
            case '6':
                dis.textContent = '6'
                acc.push('6')
                break;
            case '7':
                dis.textContent = '7'
                acc.push('7')
                break;
            case '8':
                dis.textContent = '8'
                acc.push('8')
                break;
            case '9':
                dis.textContent = '9'
                acc.push('9')
                break;
        }
    }
    else if (op === options.FUNC){
        val = createNumber(acc)
        switch(data){
            case 'x!':
                acc.push(factorial(val))
                dis.textContent = '0'
                break;
            case 'sin':
                acc.push(Math.sin(degrees_to_radians(val)))
                dis.textContent = '1'
                break;
            case 'cos':
                acc.push(Math.cos(degrees_to_radians(val)))
                dis.textContent = '2'
                break;
            case 'ln':
                acc.push(Math.log(val))
                dis.textContent = '3'
                break;
            case 'log':
                acc.push(Math.log(val))
                dis.textContent = '4'
                break;
            case 'tan':
                acc.push(Math.tan(degrees_to_radians(val)))
                dis.textContent = '5'
                break;
            case 'sqrt':
                acc.push(Math.sqrt(val))
                dis.textContent = '6'
                break;
            case 'EXP':
                acc.push('0')
                dis.textContent = '7'
                break;
            case 'x^y':
                acc.push('0')
                dis.textContent = '8'
                break;
            case '/':
                acc.push(div(val))
                dis.textContent = '9'
                break;
            case '*':
                acc.push(mul(val))
                dis.textContent = '9'
                break;
            case '-':
                acc.push(sub(val))
                dis.textContent = '9'
                break;
            case '+':
                acc.push(add(val))
                dis.textContent = '9'
                break;
        }
    }
    else if (op === options.MISC){
        switch(data){
            case '(':
                m = evalute(acc.push('('))
                dis.textContent = m
                break;
            case ')':
                m = evalute(acc.push(')'))
                dis.textContent = m
                break;
            case '%':
                m = evalute(acc.push('%'))
                dis.textContent = m
                break;
            case '.':
                m = evalute(acc.push('.'))
                dis.textContent = m
                break;
            case 'AC':
                m = evalute(acc.push('AC'))
                dis.textContent = m
                break;
            case '=':
                m = evalute(acc.push('='))
                dis.textContent = m
                break;
            case 'DEG':
                m = evalute(acc.push('DEG'))
                dis.textContent = m
                break;
        }
    }
}

function createNumber (val){
    //join all values and set the acc back to empty to append more values
    num = parseFloat(acc.join(''))
    acc = []
    return num
}

function evalute(data) {
    console.log(data)
    return acc.join('')
}

//Basic arithmetic functions
function add (x,y) {return x + y}
function sub (x,y) {return x - y}
function mul (x,y) {return x * x}
function div (x,y) {return x / y}
function percent (x) {return x + '%'}
const degrees_to_radians = deg => (deg * Math.PI) / 180.0;


main()