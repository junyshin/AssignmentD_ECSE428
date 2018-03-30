var SmallCount;
var BigCount;

var DATE = "2018-03-20";

QUnit.test("confirmLineCount", function (assert) {
    assert.ok(7 == countLineNumber(), "Passed!");
});