function restar()
{
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const restar = num1-num2;
    document.getElementById("Resultado").innerText="La resta es"+restar;
}