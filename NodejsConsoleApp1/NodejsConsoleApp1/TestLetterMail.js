QUnit.test("testRateCalc001", function (assert) {
    try {
        calculatePostage(90, 100, 30)
    } catch (e) {
        var errorCatched = e;
    }
    assert.ok("length should be from 140mm to 380mm" == errorCatched, "Passed!");
});
QUnit.test("testRateCalc002", function (assert) {
    try {
        calculatePostage(400, 100, 30);
    } catch (e) {
        var errorCatched = e;
    }
    assert.ok("length should be from 140mm to 380mm" == errorCatched, "Passed!");
});
QUnit.test("testRateCalc003", function (assert) {
    try {
        calculatePostage(140, 80, 30);
    } catch (e) {
        var errorCatched = e;
    }
    assert.ok("width should be from 90m to 270mm" == errorCatched, "Passed!");
});
QUnit.test("testRateCalc004", function (assert) {
    try {
        calculatePostage(140, 300, 30);
    } catch (e) {
        var errorCatched = e;
    }
    assert.ok("width should be from 90m to 270mm" == errorCatched, "Passed!");
});
QUnit.test("testRateCalc005", function (assert) {
    try {
        calculatePostage(140, 100, 1.0);
    } catch (e) {
        var errorCatched = e;
    }
    assert.ok("Weight should be from 3g to 500g" == errorCatched, "Passed!");
});
QUnit.test("testRateCalc006", function (assert) {
    try {
        calculatePostage(140, 100, 600.0);
    } catch (e) {
        var errorCatched = e;
    }
    assert.ok("Weight should be from 3g to 500g" == errorCatched, "Passed!");
});
QUnit.test("testRateCalc007", function (assert) {
    assert.ok(0.49 == calculatePostage(200, 100, 10), "Passed!");
});
QUnit.test("testRateCalc008", function (assert) {
    assert.ok(0.80 == calculatePostage(200, 100, 40), "Passed!");
});
QUnit.test("testRateCalc009", function (assert) {
    assert.ok(0.98 == calculatePostage(200, 100, 75), "Passed!");
});
QUnit.test("testRateCalc010", function (assert) {
    assert.ok(2.40 == calculatePostage(200, 100, 250), "Passed!");
});
QUnit.test("testRateCalc011", function (assert) {
    assert.ok(0.98 == calculatePostage(300, 100, 50), "Passed!");
});
QUnit.test("testRateCalc012", function (assert) {
    assert.ok(2.40 == calculatePostage(300, 100, 200), "Passed!");
});
QUnit.test("testRateCalc013", function (assert) {
    assert.ok(0.98 == calculatePostage(300, 200, 50), "Passed!");
});
QUnit.test("testRateCalc014", function (assert) {
    assert.ok(2.40 == calculatePostage(380, 270, 500), "Passed!");
});
QUnit.test("testRateCalc015", function (assert) {
    assert.ok(2.40 == calculatePostage(380, 270, 500), "Passed!");
});
