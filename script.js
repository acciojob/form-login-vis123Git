function getFormvalue(e) {
	e.preventDefault();
	const inputs = document.getElementsByTagName("input");
	const val1 = inputs[0].value;
	const val2 = inputs[1].value;
	alert(`${val1} ${val2}`)

}