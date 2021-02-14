const fs = require("fs");

const writeOutput = (file, text) => {
	fs.writeFile(file, text, function (err) {
		if (err) {
			return console.error(err);
		}
		console.log("Output file has been created successfully!");
	});
};

module.exports = { writeOutput };
