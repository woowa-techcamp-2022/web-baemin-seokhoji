import InputBox from '../../components/InputBox.js';
import { parsingDateTime } from '../../lib/parsingTextByInput.js';
import {
	validationEmail,
	validationNickname,
	validationDate,
	validationPassword,
} from '../../lib/validationValueByInput.js';

function DetailPage($target) {
	this.$prevPageBtn = $target.querySelector('.prev');
	this.$nextPageBtn = $target.querySelector('.next');
	this.$inputFieldByEmail = $target.querySelector('.email-field');
	this.$inputFieldByNickname = $target.querySelector('.nickname-field');
	this.$inputFieldByPassword = $target.querySelector('.password-field');
	this.$inputFieldByDate = $target.querySelector('.date-field');
	this.$detailForm = $target.querySelector('.detail-container');
	this.$DetailSection = $target.querySelector('.detail-container-section');
	this.$checkBtn = $target.querySelector('.check-btn');

	this.inputList = Array.from($target.querySelectorAll('.input-box'));

	this.$inputBoxByEmail = new InputBox(this.$inputFieldByEmail, validationEmail);
	this.$inputBoxByNickname = new InputBox(this.$inputFieldByNickname, validationNickname);
	this.$inputBoxByPassword = new InputBox(this.$inputFieldByPassword, validationPassword);
	this.$inputBoxByDate = new InputBox(this.$inputFieldByDate, validationDate, parsingDateTime);

	this.validateEmail = () => {
		this.$inputBoxByEmail.validate();
	};

	this.checkValidateByInput = () => {
		const validate = this.inputList.every(($input) => $input.classList.contains('valid'));

		if (validate) this.$nextPageBtn.classList.remove('disabled-text');
		else this.$nextPageBtn.classList.add('disabled-text');
	};

	this.onClickNextPageBtn = () => {
		if (this.$nextPageBtn.classList.contains('disabled-text')) return;

		this.$inputBoxByEmail.validate();
		this.$inputBoxByNickname.validate();
		this.$inputBoxByPassword.validate();
		this.$inputBoxByDate.validate();

		const validate = this.inputList.every(($input) => $input.classList.contains('valid'));

		if (!validate) return;

		this.$detailForm.submit();
	};

	this.init = () => {
		this.$detailForm.addEventListener('submit', (e) => e.preventDefault());
		this.$checkBtn.addEventListener('click', this.validateEmail);
		this.$prevPageBtn.addEventListener('click', () => window.history.back());
		this.$nextPageBtn.addEventListener('click', this.onClickNextPageBtn);
	};

	this.$inputBoxByEmail.toggle = () => {
		this.$DetailSection.style.display = 'flex';
		this.checkValidateByInput();
	};

	this.$inputBoxByDate.toggle = this.checkValidateByInput;
	this.$inputBoxByNickname.toggle = this.checkValidateByInput;
	this.$inputBoxByPassword.toggle = this.checkValidateByInput;

	this.$inputBoxByEmail.init();
	this.$inputBoxByNickname.init();
	this.$inputBoxByPassword.init();
	this.$inputBoxByDate.init();
}

const detailPageInstance = new DetailPage(document.querySelector('#app'));
detailPageInstance.init();
