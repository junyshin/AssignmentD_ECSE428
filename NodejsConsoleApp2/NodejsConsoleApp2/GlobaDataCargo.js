var CARGO_LABEL = "C";

const Product = {
    P1: "P1",
    P2: "P2" ,
    P3: "P3" ,
    P4: "P4",
    P5: "P5" ,
    P6: "P6" ,
    P7: "P7" 
};

function getGlobalDataCargoForm(cargo1, cargo2, cargo3, cargo4) {
    var result = [];

    result.push(Product.P1);

    if (cargo1 && cargo2) {
        result.push(Product.P2);
    } else {
        result.push(Product.P3);
    }

    result.push(Product.P4);

    if (cargo3) {
        result.push(Product.P5);
    }

    result.push(Product.P6);

    if (cargo4) {
        result.push(Product.P7);
    }

    var output  = "";

    for (var i = 0; i < result.length; i++) {
        output += result[i];
    }

    return output;
}

function getGlobalDataCargoHeaders(cargos) {
    if (cargos === null) {
        return "";
    }

    var header = "";
    for (var i = 1; i <= cargos.length; i++) {
        header.concat(CARGO_LABEL + i + "\t");
    }

    return header;
}

function getGlobalDataCargoInput(cargos) {
    if (cargos === null) {
        return "";
    }

   var input = "";
    for (var i = 0; i < cargos.length; i++) {
        input.concat(cargos[i] + "\t");
    }
    return input;
}