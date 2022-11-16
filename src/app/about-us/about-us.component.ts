import { Component, OnInit } from '@angular/core';

export interface Employee{
  id: string;
  name: string;
  email: string;
  password:string
}


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit {

  employees: Employee[] = [
    { id: "1", name: "lakshitha", email: "lakshitha@gmail.com", password: "123" },
    { id: "2", name: "kamal", email: "kamal@gmail.com", password: "456" },
    { id: "3", name: "nimal", email: "nimal@gmail.com", password: "789" },
  ];


  constructor() { }

  ngOnInit(): void {
  }



}
