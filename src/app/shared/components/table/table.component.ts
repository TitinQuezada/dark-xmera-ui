import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../http-client/http-client.service';
import { TableHeader } from '../../interfaces/table-header.interface';
import { TableOperationButton } from '../../interfaces/table-operation-button.interface';
import { InputBaseModel } from '../../models/input-base-model';
import { CreateOrEditElementComponent } from '../create-or-edit-element/create-or-edit-element.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableOperationButtons: Array<TableOperationButton>;
  @Input() inputs: Array<InputBaseModel>;
  @Input() route: string;
  @Input() headers: Array<TableHeader>;

  data: Array<any> = [];
  noDisplayedColumns: Array<string> = [];
  firstElementPosition: number = 0;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(this.data);
  operationsColumnName = 'operations';
  identificationColumnName = 'id';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private readonly httpClientService: HttpClientService,
    private readonly spinnerService: NgxSpinnerService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  async ngAfterViewInit() {
    this.getData();
  }

  filter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setDisplayedColumns(): void {
    this.displayedColumns = [];
    this.noDisplayedColumns = [];

    this.headers.forEach((header) => {
      if (!header.view.table) {
        this.noDisplayedColumns.push(header.name);
      }

      if (header.view.table) {
        this.displayedColumns.push(header.name);
      }
    });

    this.displayedColumns.push(this.operationsColumnName);
  }

  getData() {
    this.spinnerService.show();

    this.httpClientService.get(this.route).then(({ data }) => {
      this.data = data;
      this.initializeTable();
      this.spinnerService.hide();
    });
  }

  initializeTable() {
    this.dataSource.data = this.data;
    this.setDisplayedColumns();

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateOrEditElementComponent, {
      width: '500px',
      data: {
        inputs: this.inputs,
        route: this.route,
      },
    });

    dialogRef.afterClosed().subscribe((isSave) => {
      if (isSave) {
        this.getData();
      }
    });
  }

  getHeaderByName(name: string): TableHeader {
    return this.headers.find((header) => header.name == name);
  }
}
