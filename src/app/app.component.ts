import { Component, OnInit } from '@angular/core';
import { NgRecaptcha3Service } from 'ng-recaptcha3'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forms';
  private captchKey: string = '6LedAJEUAAAAAPttxeFNp6ZtAvKGI8D9gESE-hl3';

  constructor(private recaptcha3: NgRecaptcha3Service){}

  ngOnInit(): void {
    this.recaptcha3.init(this.captchKey).then( status => {
      console.log(status);
    });
  }
}
