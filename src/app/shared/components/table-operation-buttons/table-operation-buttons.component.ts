import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableHeader } from '../../interfaces/table-header.interface';
import { TableOperationButton } from '../../interfaces/table-operation-button.interface';
import { InputBaseModel } from '../../models/input-base-model';
import { CreateOrEditElementComponent } from '../create-or-edit-element/create-or-edit-element.component';
import { DeleteElementComponent } from '../delete-element/delete-element.component';
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
  @Input() inputs: Array<InputBaseModel>;
  @Input() route: string;
  @Output() getData = new EventEmitter();

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

  edit() {
    const dialogRef = this.dialog.open(CreateOrEditElementComponent, {
      width: '500px',
      data: {
        element: this.element,
        inputs: this.inputs,
        route: this.route,
      },
    });

    dialogRef.afterClosed().subscribe((isSave) => {
      if (isSave) {
        this.getData.emit();
      }
    });
  }

  async delete() {
    const dialogRef = this.dialog.open(DeleteElementComponent, {
      width: '600px',
      data: {
        element: this.element,
        route: this.route,
      },
    });

    dialogRef.afterClosed().subscribe((isSave) => {
      if (isSave) {
        this.getData.emit();
      }
    });
  }
}
