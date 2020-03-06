import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/Form';

function AuditLabel(props) {
	return <Form.Label>
		Nr zgłoszenia: {props.INC}<br/>
		Imię i nazwisko Klienta: {props.clientName}<br/>
		Nr telefonu: {props.clientPhone}<br/>
	</Form.Label>
}

function showFile() {
	var preview = document.getElementById('show_contents');
	var reader = new FileReader();
	var file = document.getElementById('audit_list').files[0];
	var fileType = /text.*/;

	if (file.type.match(fileType)) {
		reader.onload = function (event) {
			var output = event.target.result.replace(/\r/g, "\n");
			preview.innerHTML = "<pre>" + output + "</pre>";
			alert(output);
			var cases = output.split(/\r\n|\r|\n/);
			alert(cases[0]);
			alert(cases[1]);
			alert(cases[2]);
			alert(cases[3]);
		}
	 } else {
		preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
	 }
	 reader.readAsText(file);
}

function App() {
	return (
		<div className="App">
			<input
				accept="text/plain"
				id="audit_list"
				type="file"
				onChange={showFile}
			/>
			<p id="show_contents">Wybierz plik.</p>
			<Form>
				<FormGroup>
					<AuditLabel
						INC="INC0000123456"
						clientName="Michał Szulecki"
						clientPhone="515424974"
					></AuditLabel>
					<Form.Label></Form.Label>
					<Form.Control
						as="select"
						multiple
					>
						<option>TAK</option>
						<option>NIE</option>
					</Form.Control>
				</FormGroup>
			</Form>
		</div>
	);
}

export default App;
