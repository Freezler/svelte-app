function handleFileInput(event) {
  const file = event.target.files[0];

  if (file) {
	file.text().then(content => {
	  if (content.trim() !== '') {
		fileContent = content;
		isSuccess = true;
		gemiddeldeCijfer = calculateGemiddeldeCijfer(fileContent);
	  }
	});
  }
}