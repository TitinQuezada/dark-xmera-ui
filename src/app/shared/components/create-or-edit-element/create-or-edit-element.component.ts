import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-or-edit-element',
  templateUrl: './create-or-edit-element.component.html',
  styleUrls: ['./create-or-edit-element.component.css'],
})
export class CreateOrEditElementComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { inputs: Array<Input>; element: any }
  ) {}

  ngOnInit(): void {}
}
