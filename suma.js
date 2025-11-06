function sumar()
{
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const suma = num1+num2+num3;
    document.getElementById("Resultado").innerText="La suma es"+suma;
}
