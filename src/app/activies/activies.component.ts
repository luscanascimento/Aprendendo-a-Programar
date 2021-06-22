import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activies',
  templateUrl: './activies.component.html',
  styleUrls: ['./activies.component.scss']
})
export class ActiviesComponent implements OnInit {

  create: boolean = false

  buttonOn (){
    this.create = !this.create;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
