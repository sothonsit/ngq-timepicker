import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngq-timepicker';
  fg: FormGroup;

  opts = {
    defaultTime: false,
    showMeridian: false,
    explicitMode: false
  };

  ngOnInit() {
    this.fg = new FormGroup({
      time: new FormControl('', [Validators.required]),
    });
  }
}
