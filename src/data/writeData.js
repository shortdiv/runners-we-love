var csv2json = require('csv2json');
var fs = require('fs');

fs.createReadStream('./src/data/marathon_results_2017.csv')
  .pipe(csv2json({
    // Defaults to comma.
    // separator: ';'
  }))
  .pipe(fs.createWriteStream('./src/data/data.json'));