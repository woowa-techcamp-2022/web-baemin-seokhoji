const parsingPhoneNumber = (num) =>
	num
		.replace(/[^0-9]/g, '')
		.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
		.replace(/\-{1,2}$/g, '');

const parsingAuthNumber = (num) => num.replace(/[^0-9]/g, '');

const parsingDateTime = (date) =>
	date
		.replace(/[^0-9]/g, '')
		.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1.$2.$3')
		.replace(/\.{1,2}$/g, '');

export { parsingAuthNumber, parsingDateTime, parsingPhoneNumber };
