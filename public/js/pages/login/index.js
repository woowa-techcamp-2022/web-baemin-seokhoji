import InputBox from '../../components/InputBox.js';
import { validationText } from '../../lib/validationValueByInput.js';

function LoginPage($target) {
	this.$inputFieldById = $target.querySelector('.input-id');
	this.$inputFieldByPassword = $target.querySelector('.input-password');
	this.$button = $target.querySelector('.current-button');
	this.$loginErrorMessage = $target.querySelector('.login-error');

	this.$inputBoxById = new InputBox(this.$inputFieldById, validationText);
	this.$inputBoxByPassword = new InputBox(this.$inputFieldByPassword, validationText);

	this.onClickButton = (e) => {
		e.preventDefault();
		const checkedId = this.$inputBoxById.validate();
		const checkedpassword = this.$inputBoxByPassword.validate();

		if (!checkedId || !checkedpassword) return;

		$target.submit();
	};

	this.toggle = () => {
		if (this.$loginErrorMessage) this.$loginErrorMessage.style.display = 'none';
	};

	this.init = () => {
		this.$button.addEventListener('click', this.onClickButton);
	};

	this.$inputBoxById.toggle = this.toggle;
	this.$inputBoxByPassword.toggle = this.toggle;

	this.$inputBoxById.init();
	this.$inputBoxByPassword.init();
}

const loginPageInstance = new LoginPage(document.querySelector('.login-container'));
loginPageInstance.init();
