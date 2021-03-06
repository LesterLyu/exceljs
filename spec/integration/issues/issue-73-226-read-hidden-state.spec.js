'use strict';

var chai = require('chai');

var verquire = require('../../utils/verquire');

var Excel = verquire('excel');

var expect = chai.expect;

describe('github issues', function() {
  it('issue 73 and 226 - Read worksheet hidden state', function() {
    var wb = new Excel.Workbook();
    return wb.xlsx.readFile('./spec/integration/data/test-issue-73-226.xlsx')
      .then(function() {
        var expected = {1: 'visible', 2: 'hidden', 3: 'visible'};
        wb.eachSheet(function(ws, sheetId) {
          expect(ws.state).to.equal(expected[sheetId]);
        });
      });
  });
});
