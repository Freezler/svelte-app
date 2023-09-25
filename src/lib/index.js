// place files you want to import through the `$lib` alias in this folder.




function sendEmail() {
	const email = 'rldevries79@hotmail.com';
	const subject = 'Interesse in jouw website';
	const body = `Beste Randy,

Ik ben geintresseerd in jouw website en wil graag meer (weten/verstrekken) over het volgende.

namelijk: [informatie verzoek] 

met vriendelijke groet,
[uw naam]`;

	const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	window.location.href = mailtoLink;
}

export { sendEmail };
