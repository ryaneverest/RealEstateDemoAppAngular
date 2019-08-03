import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('userInput', {static: false}) userInput:ElementRef;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(){
let input = this.userInput.nativeElement.value;
this.router.navigate(['list',input]);
  }
}
