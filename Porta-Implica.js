var int1 = {
    P: false,
    Q: false,
    H: function () {
        return (!this.P) || this.Q;
    }
};

var int2 = {
    P: false,
    Q: true,
    H: function () {
        return (!this.P) || this.Q;
    }
};

var int3 = {
    P: true,
    Q: false,
    H: function () {
        return (!this.P) || this.Q;
    }
};

var int4 = {
    P: true,
    Q: true,
    H: function () {
        return (!this.P) || this.Q;
    }
};

function Checkbox1() {
    int1.P = !int1.P;
    int2.P = !int2.P;
    int3.P = !int3.P;
    int4.P = !int4.P;

    document.getElementById("linha1P").innerHTML = int1.P;
    document.getElementById("linha2P").innerHTML = int2.P;
    document.getElementById("linha3P").innerHTML = int3.P;
    document.getElementById("linha4P").innerHTML = int4.P;

    let negar = document.getElementsByClassName("classcheckbox");

    if (negar[0].checked) {
        document.getElementById("negacaoP").innerHTML = "¬";
    }
    else if (!negar[0].checked) {
        document.getElementById("negacaoP").innerHTML = "";
    }

    Resultado();
}

function Checkbox2() {
    int1.Q = !int1.Q;
    int2.Q = !int2.Q;
    int3.Q = !int3.Q;
    int4.Q = !int4.Q;

    document.getElementById("linha1Q").innerHTML = int1.Q;
    document.getElementById("linha2Q").innerHTML = int2.Q;
    document.getElementById("linha3Q").innerHTML = int3.Q;
    document.getElementById("linha4Q").innerHTML = int4.Q;

    let negar = document.getElementsByClassName("classcheckbox");

    if (negar[1].checked) {
        document.getElementById("negacaoQ").innerHTML = "¬";
    }
    else if (!negar[1].checked) {
        document.getElementById("negacaoQ").innerHTML = "";
    }

    Resultado();
}

function Resultado() {

    document.getElementById("linha1P").innerHTML = int1.P;
    document.getElementById("linha1Q").innerHTML = int1.Q;
    let resultado1 = !this.int1.P || this.int1.Q;

    if (resultado1 == true) {
        document.getElementById("resultadolinha1").innerHTML = resultado1;
    }
    else {
        document.getElementById("resultadolinha1").innerHTML = resultado1;
    }

    document.getElementById("linha2P").innerHTML = int2.P;
    document.getElementById("linha2Q").innerHTML = int2.Q;
    let resultado2 = !this.int2.P || this.int2.Q;

    if (resultado2 == true) {
        document.getElementById("resultadolinha2").innerHTML = resultado2;
    }
    else {
        document.getElementById("resultadolinha2").innerHTML = resultado2;
    }

    document.getElementById("linha3P").innerHTML = int3.P;
    document.getElementById("linha3Q").innerHTML = int3.Q;
    let resultado3 = !this.int3.P || this.int3.Q;

    if (resultado3 == true) {
        document.getElementById("resultadolinha3").innerHTML = resultado3;
    }
    else {
        document.getElementById("resultadolinha3").innerHTML = resultado3;
    }

    document.getElementById("linha4P").innerHTML = int4.P;
    document.getElementById("linha4Q").innerHTML = int4.Q;
    let resultado4 = !this.int4.P || this.int4.Q;

    if (resultado4 == true) {
        document.getElementById("resultadolinha4").innerHTML = resultado4;
    }
    else {
        document.getElementById("resultadolinha4").innerHTML = resultado4;
    }
}

var lista = new Array();
lista.push(int1);
lista.push(int2);
lista.push(int3);
lista.push(int4);
