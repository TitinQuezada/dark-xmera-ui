import { Component, Input, OnInit } from '@angular/core';
import { FormatTypes } from '../../enums/format-types.enum';
import { TableHeader } from '../../interfaces/table-header.interface';

@Component({
  selector: 'app-format-property',
  templateUrl: './format-property.component.html',
  styleUrls: ['./format-property.component.css'],
})
export class FormatPropertyComponent implements OnInit {
  @Input() header: TableHeader;
  @Input() element: any;
  formatTypes = FormatTypes;

  constructor() {}

  ngOnInit(): void {
    console.log(this.header);
    console.log(this.element);
  }
}
