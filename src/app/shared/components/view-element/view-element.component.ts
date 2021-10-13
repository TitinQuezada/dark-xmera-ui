import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableHeader } from '../../interfaces/table-header.interface';

@Component({
  selector: 'app-view-element',
  templateUrl: './view-element.component.html',
  styleUrls: ['./view-element.component.css'],
})
export class ViewElementComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { element: any; headers: Array<TableHeader> }
  ) {}

  ngOnInit(): void {}
}
