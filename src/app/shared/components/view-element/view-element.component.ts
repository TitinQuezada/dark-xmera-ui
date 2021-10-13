import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-element',
  templateUrl: './view-element.component.html',
  styleUrls: ['./view-element.component.css'],
})
export class ViewElementComponent implements OnInit {
  elementKeys: Array<string>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { element: any }) {}

  ngOnInit(): void {
    this.elementKeys = Object.keys(this.data.element);
  }
}
