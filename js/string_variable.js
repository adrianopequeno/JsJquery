var username;
var message;
username = 'Molly';
message = 'See our upcoming range';

var elName = document.getElementById('name'); // recebe o id que esta no HTML com essa identificação.
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;