// const path = require("path");
const xlsx = require("xlsx");
const helper = require("./helper");

// const inputFile = "updated_zipcodes.xlsx",
// 	compareFile = "outdated_zipcodes.xlsx",
// 	outFile = "differences.xlsx",
// 	outTxt = "differences.txt";

const checkForDifferences = ({ inputFile, compareFile, outputFile, rangeColumn, rangeRow }) => {
	const inputData = xlsx.readFile(inputFile),
		inputSheet1 = inputData.SheetNames[0],
		inputDataSheet = inputData.Sheets[inputSheet1],
		compareData = xlsx.readFile(compareFile),
		compareSheet1 = compareData.SheetNames[0],
		compareDataSheet = compareData.Sheets[compareSheet1];

	const range = helper.getRange(rangeColumn, rangeRow);
	for (let columnIndex = 0; columnIndex < range.columns.length; columnIndex++) {
		for (let rowIndex = 2; rowIndex <= range.row; rowIndex++) {
			if (
				inputDataSheet[range.columns[columnIndex] + rowIndex].w !=
				compareDataSheet[range.columns[columnIndex] + rowIndex].w
			) {
				console.log(
					`${range.columns[columnIndex]}${rowIndex} cell has different values in the given excel files.`
				);
				console.log("input file -> " + inputDataSheet[range.columns[columnIndex] + rowIndex].w);
				console.log("comparing file -> " + compareDataSheet[range.columns[columnIndex] + rowIndex].w);
				console.log("--------------");
			}
		}
	}
	//print to the output file here
	// helper.writeOutput()
};

modile.exports = { checkForDifferences };
