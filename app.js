let cantCuotas = [
    {
        cant: 6,
        interes: 1.08
    },
    {
        cant: 12,
        interes: 1.2
    },
    {
        cant: 18,
        interes: 1.4
    },
    {
        cant: 24,
        interes: 1.8
    },
    {
        cant: 36,
        interes: 2
    }
];

function llamar() {
    let pedido = document.getElementById("montoPedido").value;
    sessionStorage.setItem('pedido', pedido);
    console.log('Monto Pedido ', sessionStorage.getItem('pedido'));
    let input = document.getElementById("input-div");
    input.style.display = "none";
    let selectDiv = document.getElementById("select-div");
    selectDiv.style.display = "block";
    let response;
    let select = document.createElement("select");
    let option = document.createElement("option");
    option.setAttribute("value","");
    option.setAttribute("disabled","");
    option.setAttribute("selected","");
    let optionText = document.createTextNode("--Seleccione--");
    option.appendChild(optionText);
    select.appendChild(option);
    document.getElementById("selectLabel").appendChild(select);
        for(let i = 0; i< cantCuotas.length; i++){
            let cuota = pedido/cantCuotas[i].cant;
            let interes = cantCuotas[i].interes * cuota;
            let porcentaje = cantCuotas[i].interes*100-100;
            let li = document.createElement("li");
            let p = document.createElement("p");
            response = "En "+ cantCuotas[i].cant+ " cuotas, el interes es del "+ porcentaje+ "%. Pagarias $"+ Math.round((interes + Number.EPSILON) * 100) / 100+ " por cuota.";
            p.appendChild(document.createTextNode(response));
            document.querySelector("#cuotasAnswer").appendChild(li).appendChild(p);
            let option = document.createElement("option");
            option.setAttribute("value", cantCuotas[i].cant);
            let optionText = document.createTextNode(cantCuotas[i].cant+ " Cuotas("+porcentaje+ "% de interes)");
            option.appendChild(optionText);
            select.appendChild(option);
        }
}

function paso2(){
    let cuotas = document.querySelector("div#select-div select").value;
    sessionStorage.setItem('cuotas', cuotas);
    console.log('Cuotas seleccionadas ', sessionStorage.getItem('cuotas'));
    let prueba = cantCuotas.filter(function (cantCuotas) { return cantCuotas.cant == sessionStorage.getItem('cuotas'); });
    if(prueba[0].cant == sessionStorage.getItem('cuotas')){
        function calcFinal(){
            let pedido = sessionStorage.getItem('pedido');
            let cuota = pedido/prueba[0].cant;
            let cuotaFinal = prueba[0].interes * cuota;
            let final = cuotaFinal * prueba[0].cant;
            let response = "".concat("Terminas pagando $", Math.round((final + Number.EPSILON) * 100) / 100, " en ", cuotas," cuotas de $ ", Math.round((cuotaFinal + Number.EPSILON) * 100) / 100, " a cambio de $", pedido);
            let select = document.getElementById("select-div");
            select.style.display = "none";
            let answer = document.getElementById("answer-span");
            answer.style.display = "block";
            answer.innerHTML = response;
        }
        calcFinal();
        

    }
}

