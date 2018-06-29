import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.css']
}) 
export class CounterComponent implements OnInit {
	count = 7;
	constructor() {
	}

	increaseClick(event) {
		this.count++;
	}
	decreaseClick(event) {
		this.count--;
	}
	ngOnInit() {}

}
