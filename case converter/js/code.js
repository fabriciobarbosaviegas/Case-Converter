var lang = 0;

function Translate(){

	document.body.innerHTML = `<form>
		<fieldset align="center" id="field">
			<h1>Case Converter</h1>
			<input type="button" value="English, please!" onclick="Traduzir()">
			<br><br>
			<textarea placeholder="Seu texto aqui!" id="text" class="text" oninput="counters()"></textarea>
			<br><br>
			<input type="button" value="Formato frase" onclick="Phrase()">
			<input type="button" value="MAIUSCULAS" onclick="UpperCase()">
			<input type="button" value="minusculas" onclick="LowerCase()">
			<input type="button" value="Texto Capitular" onclick="Captalized()">
			<input type="button" value="Copiar para area de transferência" onclick="Copiar()">
			<input type="button" value="Limpar" onclick="Clear()">
			<div id="counters">
				<p>
					<span>| Numero de caracteres: <span id="letters">0 </span> |</span>
				</p>
			</div>
		</fieldset>
	</form>`;

	var lang = 1;

}

function Traduzir(){

	document.body.innerHTML = `<form>
		<fieldset align="center" id="field">
			<h1>Case Converter</h1>
			<input type="button" value="I dont't speak english (português)" onclick="Translate()">
			<br><br>
			<textarea placeholder="Your text here" id="text" class="text" oninput="counters()"></textarea>
			<br><br>
			<input type="button" value="Format phrase" onclick="Phrase()">
			<input type="button" value="UPPER CASE" onclick="UpperCase()">
			<input type="button" value="lower case" onclick="LowerCase()">
			<input type="button" value="Captalized Text" onclick="Captalized()">
			<input type="button" value="Copy to Clipboard" onclick="Copy()">
			<input type="button" value="Clear" onclick="Clear()">
			<div id="counters">
				<p>
					<span>| Number of characters: <span id="letters">0 </span> |</span>
				</p>
			</div>
		</fieldset>
	</form>`;

	var lang = 0;

}

function Phrase() {

	var str = document.getElementById('text').value;
	var str = str.charAt(0).toUpperCase() + str.slice(1);
	var str = document.getElementById('text').value = `${str}`;

}

function UpperCase() {

	var str = document.getElementById('text').value.toUpperCase();
	var str = document.getElementById('text').value = `${str}`;

}

function LowerCase() {

	var str = document.getElementById('text').value.toLowerCase();
	var str = document.getElementById('text').value = `${str}`;

}

function Captalized() {

	var str = document.getElementById('text').value.replace(/\b\w/g, l => l.toUpperCase())
	var str = document.getElementById('text').value = `${str}`

}

function Copy(){

	var str = document.getElementById('text');
	str.select();
  	str.setSelectionRange(0, 99999);
  	document.execCommand("copy");
  	alert(`Copied the text: ${str.value}`);

}

function Copiar(){

	var str = document.getElementById('text');
	str.select();
  	str.setSelectionRange(0, 99999);
  	document.execCommand("copy");
  	alert(`Seu texto foi copiado: ${str.value}`);

}

function Clear() {

	var str = document.getElementById('text').value = '';
	var counters = document.getElementById('letters');
	counters.innerHTML = `${str.length}`;


}

function counters() {

	var str = document.getElementById('text').value;
	var counters = document.getElementById('letters');
	counters.innerHTML = `${str.length}`;

}
