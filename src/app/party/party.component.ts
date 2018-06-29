import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
	friends = ['Anna', 'Bo', 'Cedric', 'David', 'Enya'];

  constructor() { }

  ngOnInit() {
  }

}
