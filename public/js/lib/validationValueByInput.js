const validationPhoneNumber = (phoneNumber) => {
	const reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

	return reg.test(phoneNumber);
};

const validationAuthNumber = (number) => {
	const reg = /[0-9]{4}/;

	return reg.test(number);
};

const validationEmail = (email) => {
	const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

	return reg.test(email);
};

const validationNickname = (nickname) => {
	return nickname.length >= 5;
};

const validationPassword = (password) => {
	if (password.length < 10) return false;

	let cnt = 0;

	if (password.search(/[0-9]/g) != -1) cnt++;
	if (password.search(/[a-z]/gi) != -1) cnt++;
	if (password.search(/[A-Z]/gi) != -1) cnt++;
	if (password.search(/[!@#$%^&*()?_~]/g) != -1) cnt++;

	return cnt >= 2 ? true : false;
};

const validationDate = (date) => {
	const reg = /^\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/;

	return reg.test(date);
};

export {
	validationAuthNumber,
	validationPassword,
	validationDate,
	validationEmail,
	validationNickname,
	validationPhoneNumber,
};
