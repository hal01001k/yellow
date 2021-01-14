import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myvariable = 'Daksh';
  i = 0;

  constructor() { }

  // tslint:disable-next-line:typedef
  doSomeHeavyTask(){
    console.log(`Called ${this.i++} times`);
  }
  ngOnInit(): void {
  }

}
