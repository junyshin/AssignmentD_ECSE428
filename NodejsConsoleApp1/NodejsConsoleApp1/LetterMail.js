function calculatePostage(length, width, weight) {
    var postage = 0.0;

    if (length < 140 || length > 380) {
        window.alert("length should be from 140mm to 380mm");
        throw "length should be from 140mm to 380mm";
    }
    if (width < 90 || width > 270) {
        window.alert("width should be from 90m to 270mm");
        throw "width should be from 90m to 270mm";
    }
    if (weight < 3.0 || weight > 500.0) {
        window.alert("Weight should be from 3g to 500g");
        throw "Weight should be from 3g to 500g";
    }

    if ((length >= 140.0) && (length <= 245.0) && (width >= 90.0) && (width <= 156)) {
        if ((weight >= 3.0) && (weight <= 30.0)) {
            postage = 0.49;        // R1
        } else if ((weight > 30.0) && (weight <= 50.0)) {
            postage = 0.80;        // R2
        } else if ((weight > 50.0) && (weight <= 100.0)) {
            postage = 0.98;        // R3
        } else if ((weight > 100.0) && (weight <= 500.0)) {
            postage = 2.40;        // R4
        }
    }
    if ((length > 245.0) && (length <= 380.0) && (width >= 90.0) && (width <= 156)) {
        if ((weight >= 3.0) && (weight <= 100.0)) {
            postage = 0.98;        // R5
        } else if ((weight > 100.0) && (weight <= 500.0)) {
            postage = 2.40;        // R6
        }
    }
    if ((length >= 140.0) && (length <= 380.0) && (width > 156.0) && (width <= 270)) {
        if ((weight >= 3.0) && (weight <= 100)) {
            postage = 0.98;        // R7
        } else if ((weight > 100.0) && (weight <= 500)) {
            postage = 2.40;        // R8
        }
    }
    return postage;
}