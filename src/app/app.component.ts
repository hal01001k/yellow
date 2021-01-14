import {Component} from '@angular/core';
import {HelloComponent} from './hello/hello.component';
import {RecordsService} from './records.service';

// tslint:disable-next-line:class-name
interface myData {
  // tslint:disable-next-line:ban-types
  obj: Object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yellow';
  records = [];
  text: any;

  constructor(private myFirstService: RecordsService) {
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.myFirstService.getData().subscribe(data => {
      this.records = data.obj;
    });
  }

  // tslint:disable-next-line:typedef
  callMyFunction() {
    console.log('Function Called');
  }
}
