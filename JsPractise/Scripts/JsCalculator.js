document.addEventListener('keypress', event => {
    let x = event.keyCode;
    if (x >= 48 && x <= 57)
    {
        display(String.fromCharCode(x));
    }
    else if (event.key === '/' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '.')
    {
        display(event.key);
    }
    else if (x === 13)
    {
        calculate();
    }
    else if (event.key === 'c')
    {
        clr();
    }
});

function display(val)
{
    document.getElementById("textval").value += val;
}

function calculate()
{
    let x = document.getElementById("textval").value;
    let y = eval(x);
    document.getElementById("textval").value = y;
}

function clr()
{
    document.getElementById("textval").value = "";
}