QUnit.test("testRateCalc001", function (assert) {
    assert.throws(
        calculatePostage(90, 100, 30),
        'length should be from 140mm to 380mm',
        'Error thrown'
    );
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
