// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import { myListFilesFunction } from 'backend/new-module.web.js';

$w.onReady(async function () {
	for(let i = 0; i < 3; i++) {
		$w("#fullWidthSlides1").slides[i].background.src = "";
	}

	const myFiles = await myListFilesFunction();

	console.log("frontend", myFiles.length);
	
	if(myFiles.length > 3) {
		const currentSlides = $w("#fullWidthSlides1").slides;
		for(let i = 3; i < myFiles.length; i++) {
			$w("#fullWidthSlides1").slides.push(currentSlides[0]);

			console.log("----");
		}
		console.log("----", $w("#fullWidthSlides1").slides.length);
	}

	for(let i = 0; i < myFiles.length; i++) {
		const originalFileName = myFiles[i].originalFileName;
		const fileUrl = myFiles[i].fileUrl;
		console.log(originalFileName, fileUrl);
		$w("#fullWidthSlides1").slides[i].background.src = fileUrl;
	}

});