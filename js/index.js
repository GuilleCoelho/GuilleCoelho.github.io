function logout() {
	localStorage.removeItem('userID');
	//window.location = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () {
	cargarUser();

	document.getElementById('autos').addEventListener('click', function () {
		localStorage.setItem('catID', 101);
		window.location = 'products.html';
	});
	document.getElementById('juguetes').addEventListener('click', function () {
		localStorage.setItem('catID', 102);
		window.location = 'products.html';
	});
	document.getElementById('muebles').addEventListener('click', function () {
		localStorage.setItem('catID', 103);
		window.location = 'products.html';
	});
});
