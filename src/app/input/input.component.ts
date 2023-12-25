import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';
  desc: string = '';
  addtitle: string = '';
  addDesc: string = '';

  constructor() { }

  ngOnInit(): void {
    this.addtitle = localStorage.getItem('addtitle');
    this.addtitle = localStorage.getItem('addDesc')

  }
  submit(){
    if (this.title || this.desc){
    localStorage.setItem('addtitle', this.title);
    localStorage.setItem('addDesc', this.desc);
    console.log('Submitted')
  }
  }

}
