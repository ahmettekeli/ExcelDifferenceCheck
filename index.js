// const path = require("path");
const xlsx = require("node-xlsx");
const helper = require("./helper");

// const workSheetsFromFile = xlsx.parse(`${__dirname}/plans.xlsx`);
// console.log({ data0: workSheetsFromFile[0].data[0] }); //header
// console.log("worksheet1:", workSheetsFromFile[0].name); //sheets

const checkForDifferences = ({
	inputFile,
	inputSheets, //array
	compareFile,
	compareSheets, //array
	outputFile,
	rangeColumn,
	rangeRow,
}) => {
	const inputExcelData = xlsx.parse(`${__dirname}/${inputFile}`).slice(0, inputSheets.length),
		inputSheetHeaders = inputExcelData.map((sheet) => sheet.data[0]),
		compareExcelData = xlsx.parse(`${__dirname}/${compareFile}`).slice(0, compareSheets.length),
		compareSheetHeaders = compareExcelData.map((sheet) => sheet.data[0]);
	let tempRowVal = [],
		dataDifference = [];

	for (let sheetIndex = 0; sheetIndex < inputExcelData.length; sheetIndex++) {
		// per sheet
		console.log("sheets:", inputExcelData[sheetIndex].name);
		for (let rowIndex = 1; rowIndex < inputExcelData[sheetIndex].data.length; rowIndex++) {
			//per row
			//TODO:make sure it has the last row
			if (compareExcelData[sheetIndex].data[rowIndex][0]) {
				compareExcelData[sheetIndex].data[rowIndex].forEach((cell, cellIndex) => {
					if (cell && cell !== inputExcelData[sheetIndex].data[rowIndex][cellIndex]) {
						// console.log(`-------- Diff in cell -> Row:${rowIndex} , Column:${cellIndex} --------`);
						if (inputExcelData[sheetIndex].data[rowIndex][cellIndex]) {
							tempRowVal.push(inputExcelData[sheetIndex].data[rowIndex][cellIndex]);
						} else {
							tempRowVal.push(null);
						}
					}
				});
				dataDifference.push(tempRowVal);
				tempRowVal = [];
			}
		}
		console.log(dataDifference);
	}

	// const range = helper.getRange(rangeColumn, rangeRow),
	// const dataDifference = [],
	// 	sheetsToBuild = inputExcelData.map((sheet, index) => {
	// 		return {
	// 			name: sheet.name,
	// 			data: dataDifference[index],
	// 		};
	// 	}),
	// 	buffer = xlsx.build(sheetsToBuild);
};

checkForDifferences({
	inputFile: "plans.xlsx",
	inputSheets: ["sheet1"], //array
	compareFile: "plans copy.xlsx",
	compareSheets: ["sheet1"], //array
	outputFile: "some output.xlsx",
	rangeColumn: "C",
	rangeRow: 4,
});

module.exports = { checkForDifferences };
