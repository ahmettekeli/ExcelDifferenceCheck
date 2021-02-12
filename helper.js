const fs = require("fs");

const writeOutput = (file, text) => {
		fs.writeFile(file, text, function (err) {
			if (err) {
				return console.error(err);
			}
			console.log("Output file has been created successfully!");
		});
	},
	getRange = (column, row) => {
		let columnLetters = [
			"A",
			"B",
			"C",
			"D",
			"E",
			"D",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
		];
		return {
			columns: columnLetters.slice(0, columnLetters.indexOf(column) + 1),
			row,
		};
	};

module.exports = { writeOutput, getRange };
