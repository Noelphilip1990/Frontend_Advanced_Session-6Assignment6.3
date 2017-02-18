import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h2>Header</h2>`,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public header: string = "This is a head";
  constructor() {
	  
	}

  ngOnInit() {
  }

}
