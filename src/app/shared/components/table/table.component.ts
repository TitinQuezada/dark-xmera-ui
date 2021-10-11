import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableOperationButton } from '../interfaces/table-operation-button.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: Array<any> = [];
  @Input() viewElement: Function = () => {};
  @Output() add = new EventEmitter();
  @Input() tableOperationButtons: Array<TableOperationButton>;
  @Input() noDisplayedColumns: Array<string> = [];

  private hiddenDataProperties = ['createdDate', 'updatedDate'];
  firstElementPosition: number = 0;
  displayedColumns: string[];
  dataSource = new MatTableDataSource(this.data);
  operationsColumnName = 'operations';
  identificationColumnName = 'id';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = changes.data.currentValue;
    this.setDisplayedColumns();
  }

  filter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setDisplayedColumns(): void {
    if (this.data?.length) {
      this.hiddenDataProperties.forEach((hiddenDataProperty) => {
        this.noDisplayedColumns.push(hiddenDataProperty);
      });

      this.noDisplayedColumns.push(this.identificationColumnName);

      this.displayedColumns = Object.keys(this.data[this.firstElementPosition]);

      this.tableOperationButtons?.length &&
        this.displayedColumns.push(this.operationsColumnName);

      this.displayedColumns = this.displayedColumns.filter(
        (displayedColumn) => !this.noDisplayedColumns.includes(displayedColumn)
      );
    }
  }
}
