import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'textfield',
	templateUrl: './textfield.component.html',
	styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() class: string;
	@Input() name: string;

	constructor() { }

	ngOnInit() {
	}

	onSearchChange(searchValue: string): void { 
		console.log(searchValue);
	}

}
