import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientService } from '../../http-client/http-client.service';

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.css'],
})
export class DeleteElementComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { element: any; route: string },
    private dialogRef: MatDialogRef<DeleteElementComponent>,
    private readonly httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }

  async delete() {
    const { success } = await this.httpClientService.delete(
      this.data.route,
      this.data.element.id
    );

    if (success) {
      this.dialogRef.close(true);
    }
  }
}
