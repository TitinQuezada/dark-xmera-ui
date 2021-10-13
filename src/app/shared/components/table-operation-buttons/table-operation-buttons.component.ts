import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableHeader } from '../../interfaces/table-header.interface';
import { TableOperationButton } from '../../interfaces/table-operation-button.interface';
import { ViewElementComponent } from '../view-element/view-element.component';

@Component({
  selector: 'app-table-operation-buttons',
  templateUrl: './table-operation-buttons.component.html',
  styleUrls: ['./table-operation-buttons.component.css'],
})
export class TableOperatioButtonsComponent implements OnInit {
  @Input() element;
  @Input() tableOperationButtons: Array<TableOperationButton>;
  @Input() headers: Array<TableHeader>;

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  view(): void {
    this.dialog.open(ViewElementComponent, {
      width: '400px',
      data: {
        element: this.element,
        headers: this.headers,
      },
    });
  }
}
