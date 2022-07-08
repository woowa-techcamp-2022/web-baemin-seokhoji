// node, 유효성 검사 함수, parser
function InputBox($inputField, validator, parser) {
	this.value = '';
	this.$input = $inputField.querySelector('input');
	this.$closeButton = $inputField.querySelector('.close-input');

	this.onChange = (e) => {
		const lastPos = e.target.value.length > e.target.selectionEnd && e.target.selectionEnd;

		this.setValue(parser ? parser(this.$input.value) : this.$input.value);

		if (lastPos) e.target.setSelectionRange(lastPos, lastPos);
	};

	this.setValue = (value) => {
		this.$input.value = value;
	};

	this.getValue = () => {
		return this.$input.value;
	};

	this.validate = () => {
		const validate = validator(this.$input.value);

		if (validate) {
			$inputField.classList.add('valid');
			$inputField.classList.remove('invalid');
			this.toggle();
		} else {
			$inputField.classList.add('invalid');
			$inputField.classList.remove('valid');
		}

		return validate;
	};

	this.onDisable = () => {
		this.$input.disabled = true;
	};

	this.clearInput = () => {
		this.$input.value = '';
	};

	this.toggle = () => {};

	this.init = () => {
		this.$input.addEventListener('input', this.onChange);
		this.$input.addEventListener('focus', () => $inputField.classList.add('focus'));
		window.addEventListener('click', (e) => {
			if (e.target === this.$input || e.target === this.$closeButton) return;
			if ($inputField.classList.contains('focus')) {
				this.validate();
				$inputField.classList.remove('focus');
			}
		});
		this.$closeButton?.addEventListener('click', this.clearInput);
	};
}

export default InputBox;
