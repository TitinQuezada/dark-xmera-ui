import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateOrEditElementComponent } from 'src/app/shared/components/create-or-edit-element/create-or-edit-element.component';
import { TableOperationButton } from 'src/app/shared/components/interfaces/table-operation-button.interface';
import { HttpClientService } from 'src/app/shared/http-client/http-client.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css'],
})
export class PositionsComponent implements OnInit {
  tableOperationButtons: Array<TableOperationButton>;
  data: Array<any> = [];
  noDisplayedColumns: Array<string>;

  constructor(
    private readonly httpClientService: HttpClientService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPositions();
    this.builTableOperationButtons();
    this.buildNoDisplayedColumns();
  }

  builTableOperationButtons(): void {
    this.tableOperationButtons = [
      {
        icon: 'pageview',
        labelKey: 'view',
        color: 'primary',
        action: (element) => console.log(element),
      },
      { icon: 'edit', labelKey: 'edit', color: 'accent', action: () => {} },
      { icon: 'delete', labelKey: 'delete', color: 'warn', action: () => {} },
    ];
  }

  addPosition(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateOrEditElementComponent, {
      width: '500px',
      data: {
        inputs: [
          { type: 'text', label: 'label', icon: 'android' },
          { type: 'text', label: 'prueba', placeholder: 'placeholder' },
        ],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  viewPositionDetails(element): void {
    console.log(element);
  }

  async getPositions() {
    const response = await this.httpClientService.get('positions');

    if (response.error) {
    } else {
      this.data = response.data;
    }
  }

  buildNoDisplayedColumns() {
    this.noDisplayedColumns = ['deparmentId'];
  }
}
