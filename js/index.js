console.log('running js');
const headEl = document.querySelectorAll('.divider');

headEl.forEach(function (e) {
	e.addEventListener('click', function () {
		e.classList.toggle('open');
		e.getElementsByTagName('img')[0].classList.toggle('arrow-up');
	});
});
