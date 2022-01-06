import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.scss'],
})
export class TemplateformsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: { value: any }) {
    console.log(f.value);
  }
}
