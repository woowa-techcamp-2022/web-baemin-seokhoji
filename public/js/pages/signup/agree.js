function AgreePage($target) {
	this.$mustSelectedNodes = $target.querySelectorAll('.must-selected');
	this.$checkInputNodes = $target.querySelectorAll('.agree');
	this.$inputForm = $target.querySelector('.input-form');
	this.$formItemByAllAgreeInput = $target.querySelector('.all-check');
	this.$agreeAllBtn = $target.querySelector('.agree-all');
	this.$nextPagebtn = $target.querySelector('.current-button');

	this.$ageBox = $target.querySelector('.age-box');

	this.mustSelectedNodsArray = Array.from(this.$mustSelectedNodes);
	this.checkInputNodesArray = Array.from(this.$checkInputNodes);

	this.onClickInputForm = (e) => {
		const $item = e.target.closest('.input-box');

		if (!$item) return;

		const $input = $item.querySelector('input');
		$input.checked = !$input.checked;
		this.checkAllByInput();
		this.checkNextPageBtn();
	};

	this.onClickAllAgreeBtn = () => {
		this.$agreeAllBtn.checked = !this.$agreeAllBtn.checked;
		this.toggleCheckInput();
		this.checkNextPageBtn();
	};

	this.checkAllByInput = () => {
		const checked = this.checkInputNodesArray.every(($input) => $input.checked);

		this.$agreeAllBtn.checked = checked;
	};

	this.toggleCheckInput = () => {
		this.checkInputNodesArray.forEach(($input) => ($input.checked = this.$agreeAllBtn.checked));
	};

	this.checkNextPageBtn = () => {
		const checked = this.mustSelectedNodsArray.every(($input) => $input.checked);

		if (checked) {
			this.$nextPagebtn.disabled = false;
			this.$nextPagebtn.classList.add('active');
		} else {
			this.$nextPagebtn.disabled = true;
			this.$nextPagebtn.classList.remove('active');
		}
	};

	this.onClickRadioBox = (e) => {
		const $item = e.target.closest('.age-item');

		if (!$item) return;

		const $input = $item.querySelector('input');
		$input.checked = true;
	};

	this.onClickNextPageBtn = () => {
		window.location.href = '/signup/phone';
	};

	this.init = () => {
		this.$inputForm.addEventListener('click', this.onClickInputForm);
		this.$formItemByAllAgreeInput.addEventListener('click', this.onClickAllAgreeBtn);
		this.$ageBox.addEventListener('click', this.onClickRadioBox);
		this.$nextPagebtn.addEventListener('click', this.onClickNextPageBtn);
	};
}

const agreePageInstance = new AgreePage(document.querySelector('.agree-container'));
agreePageInstance.init();
