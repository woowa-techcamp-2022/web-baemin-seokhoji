import InputBox from '../../components/InputBox.js';
import { validationPhoneNumber, validationAuthNumber } from '../../lib/validationValueByInput.js';
import { parsingAuthNumber, parsingPhoneNumber } from '../../lib/parsingTextByInput.js';

function PhonePage($target) {
	this.$prevPageBtn = $target.querySelector('.prev');
	this.$nextPageBtn = $target.querySelector('.next');
	this.$inputForm = $target.querySelector('.phone-container-item');
	this.$inputFieldByPhone = $target.querySelector('.phone');
	this.$inputFieldByAuth = $target.querySelector('.auth');
	this.$refreshBtn = $target.querySelector('.refresh-num');
	this.$sendNumberBtn = $target.querySelector('.send-num');
	this.$formByAuthContainer = $target.querySelector('.phone-container .auth-form');
	this.inputList = Array.from($target.querySelectorAll('.input-box'));

	this.$InputBoxByPhone = new InputBox(this.$inputFieldByPhone, validationPhoneNumber, parsingPhoneNumber);
	this.$InputBoxByAuth = new InputBox(this.$inputFieldByAuth, validationAuthNumber, parsingAuthNumber);

	this.getRandomNumber = () => {
		const random = Math.floor(1000 + Math.random() * 9000);
		setTimeout(() => {
			this.$InputBoxByAuth.setValue(random);
			this.$InputBoxByAuth.validate();
		}, 2000);
	};

	this.onClickNextPageBtn = () => {
		if (this.$nextPageBtn.classList.contains('disabled-text')) return;

		window.location.href = '/signup/detail';
	};

	this.onSubmitForm = (e) => {
		e.preventDefault();

		if (!this.$inputFieldByPhone.classList.contains('valid')) return;

		this.$formByAuthContainer.style.display = 'block';
		this.$InputBoxByPhone.onDisable();
		this.getRandomNumber();

		this.$inputForm.removeEventListener('submit', this.onSubmitForm);
		this.$inputForm.classList.add('valid-email');
	};

	this.init = () => {
		this.$inputForm.addEventListener('submit', this.onSubmitForm);
		this.$prevPageBtn.addEventListener('click', () => window.history.back());
		this.$nextPageBtn.addEventListener('click', this.onClickNextPageBtn);
		this.$refreshBtn.addEventListener('click', () => this.getRandomNumber());
	};

	this.$InputBoxByAuth.toggle = () => {
		this.$nextPageBtn.classList.remove('disabled-text');
	};

	this.$InputBoxByPhone.init();
	this.$InputBoxByAuth.init();
}

const phonePageInstance = new PhonePage(document.querySelector('#app'));
phonePageInstance.init();
