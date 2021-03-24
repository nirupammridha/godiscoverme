import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
check:boolean=false;
	myfunction(){
		if(this.check==false){
		this.check=true;	
		}	
		else{
		this.check=false;	
		}
}
	

}
