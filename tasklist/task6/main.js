data = [
    {
        image: "img/ethereum.svg",
        name: "Ethereum",
        price: 1904
    },
    {
        image: "img/litecoin.png",
        name: "Litecoin",
        price: 90
    },
    {
        image: "img/bitcoincash.png",
        name: "Bitcoin Cash",
        price: 119
    },
    {
        image: "img/monero.png",
        name: "Monero",
        price: 154
    },
    {
        image: "img/dash.png",
        name: "Dash",
        price: 50
    }
]
function generateBody() {
    let tbody = document.createElement("tbody");
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        for (key in data[i]) {
            let td = document.createElement("td");
            if (key == "image") {
                let img = document.createElement("img");
                img.setAttribute("src", data[i][key]);
                td.appendChild(img);
            }
            else {
                td.innerHTML = data[i][key];
            }
            if (key == "price") {
                td.setAttribute("class", `td${i}`);
            }
            tr.appendChild(td);
        }
        let td = document.createElement("td");
        td.setAttribute("class", "relative");
        let tdinp = document.createElement("input");
        tdinp.setAttribute("type", "number");
        tdinp.setAttribute("min", "0");
        tdinp.setAttribute("value", "1");
        tdinp.setAttribute("class", `td${i}`);
        tdinp.setAttribute("id", `td${i}`);

        tdinp.oninput = function () {
            changeSumElement(`td${i}`);
        }





        tr.appendChild(td);
        let tdplus = document.createElement("button");
        tdplus.innerHTML = "+";
        tdplus.setAttribute("class", "plus absoulute");
        let tdminus = document.createElement("button");
        tdplus.onclick = function () {
            let inp = document.getElementById(`td${i}`);
            inp.value = Number(inp.value) + 1;
            changeSumElement(`td${i}`);
        }
        tdminus.innerHTML = "-";
        tdminus.setAttribute("class", "minus absoulute");
        tdminus.onclick = function () {
            let inp = document.getElementById(`td${i}`);
            inp.value = Math.max(0, inp.value - 1);
            changeSumElement(`td${i}`);
        }
        td.appendChild(tdminus);
        td.appendChild(tdinp);
        td.appendChild(tdplus);
        td = document.createElement("td");
        td.setAttribute("class", `td${i}`);
        td.innerHTML = data[i].price;
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    return tbody;
}



function changeSumElement(element){
    let info = document.getElementsByClassName(element);
    info[2].innerHTML = info[1].value * info[0].innerHTML;
    sumAll();
}

function sumAll(){
    Sum = 0;
    for (let i=0; i<data.length; i++){
        let element = document.getElementsByClassName(`td${i}`);
        Sum = Sum + Number(element[2].innerHTML);
    }
    let SumElement = document.getElementById("Sum");
    SumElement.innerHTML = `${Sum} $`;
}

