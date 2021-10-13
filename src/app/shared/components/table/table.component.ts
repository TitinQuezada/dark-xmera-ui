import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../http-client/http-client.service';
import { TableOperationButton } from '../../interfaces/table-operation-button.interface';
import { InputBaseModel } from '../../models/input-base-model';
import { CreateOrEditElementComponent } from '../create-or-edit-element/create-or-edit-element.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data: Array<any> = [];
  @Input() dataUrl: string;
  @Input() viewElement: Function = () => {};
  @Input() tableOperationButtons: Array<TableOperationButton>;
  @Input() noDisplayedColumns: Array<string> = [];
  @Input() inputs: Array<InputBaseModel>;
  @Input() route: string;

  private hiddenDataProperties = ['createdDate', 'updatedDate'];
  firstElementPosition: number = 0;
  displayedColumns: string[];
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
    if (this.data?.length) {
      this.hiddenDataProperties.forEach((hiddenDataProperty) => {
        this.noDisplayedColumns.push(hiddenDataProperty);
      });

      this.noDisplayedColumns.push(this.identificationColumnName);

      this.displayedColumns = Object.keys(this.data[this.firstElementPosition]);

      this.displayedColumns.push(this.operationsColumnName);

      this.displayedColumns = this.displayedColumns.filter(
        (displayedColumn) => !this.noDisplayedColumns.includes(displayedColumn)
      );
    }
  }

  getData() {
    this.spinnerService.show();

    this.httpClientService.get(this.dataUrl).then(({ data }) => {
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
      width: '8rem',
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
}
