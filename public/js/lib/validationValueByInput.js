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
	if (password.search(/[a-z]/g) != -1) cnt++;
	if (password.search(/[A-Z]/g) != -1) cnt++;
	if (password.search(/[!@#$%^&*()?_~]/g) != -1) cnt++;

	if (cnt < 2) return false;

	const repeatNumbers = password.match(/([0-9])\1+/g);

	if (repeatNumbers?.find((num) => num.length >= 3)) return false;
	if (password.search(/(012|123|234|345|456|567|678|789)/) != -1) return false;
	if (password.search(/(987|876|765|654|543|432|321|210)/) != -1) return false;

	return true;
};

const validationDate = (date) => {
	const reg = /^\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/;

	return reg.test(date);
};

const validationText = (text) => text.length > 0;

export {
	validationAuthNumber,
	validationPassword,
	validationDate,
	validationEmail,
	validationNickname,
	validationPhoneNumber,
	validationText,
};
