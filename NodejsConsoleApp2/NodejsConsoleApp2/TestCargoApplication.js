QUnit.test("testTruthTableAllTrue", function (assert) {
    var expected = "P1P2P4P5P6P7";
    var actual = getGlobalDataCargoForm(true, true, true, true);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC4False", function (assert) {
    var expected = "P1P2P4P5P6";
    var actual = getGlobalDataCargoForm(true, true, true, false);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC3False", function (assert) {
    var expected = "P1P2P4P6P7";
    var actual = getGlobalDataCargoForm(true, true, false, true);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC3C4False", function (assert) {
    var expected = "P1P2P4P6";
    var actual = getGlobalDataCargoForm(true, true, false, false);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC2False", function (assert) {
    var expected = "P1P3P4P5P6P7";
    var actual = getGlobalDataCargoForm(true, false, true, true);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC2C4False", function (assert) {
    var expected = "P1P3P4P5P6";
    var actual = getGlobalDataCargoForm(true, false, true, false);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC2C3false", function (assert) {
    var expected = "P1P3P4P6P7";
    var actual = getGlobalDataCargoForm(true, false, false, true);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC1false", function (assert) {
    var expected = "P1P3P4P5P6P7";
    var actual = getGlobalDataCargoForm(false, true, true, true);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC1C4false", function (assert) {
    var expected = "P1P3P4P5P6";
    var actual = getGlobalDataCargoForm(false, true, true, false);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC1C3C4false", function (assert) {
    var expected = "P1P3P4P6";
    var actual = getGlobalDataCargoForm(false, true, false, false);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC1C2C4false", function (assert) {
    var expected = "P1P3P4P5P6";
    var actual = getGlobalDataCargoForm(false, false, true, false);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC1C2C3false", function (assert) {
    var expected = "P1P3P4P6P7";
    var actual = getGlobalDataCargoForm(false, false, false, true);
    assert.ok(actual == expected, "Passed!");
});
QUnit.test("testTruthTableC1C2C3C4false", function (assert) {
    var expected = "P1P3P4P6";
    var actual = getGlobalDataCargoForm(false, false, false, false);
    assert.ok(actual == expected, "Passed!");
});