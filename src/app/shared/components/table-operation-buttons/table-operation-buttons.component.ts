import { Component, Input, OnInit } from '@angular/core';
import { TableOperationButton } from '../../interfaces/table-operation-button.interface';

@Component({
  selector: 'app-table-operation-buttons',
  templateUrl: './table-operation-buttons.component.html',
  styleUrls: ['./table-operation-buttons.component.css'],
})
export class TableOperatioButtonsComponent implements OnInit {
  @Input() element;
  @Input() tableOperationButtons: Array<TableOperationButton>;

  constructor() {}

  ngOnInit(): void {}
}
