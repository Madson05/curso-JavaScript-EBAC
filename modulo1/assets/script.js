
function calculamedia(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
	let media = ((num1 + num2 + num3)/3);
    console.log(media)
    document.getElementById("resultado").innerHTML = "A média obtida foi:" + media;
};
