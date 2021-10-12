import { InputTypes } from '../enums/input-types.enum';
import { InputBaseModel } from './input-base-model';
import { Option } from '../interfaces/option.interface';

export class InputSelectModel extends InputBaseModel {
  options: Array<Option>;
  optionsUrl: string;

  constructor(
    label: string,
    optionsUrl: string,
    columns?: number,
    icon?: string
  ) {
    super();

    this.type = InputTypes.Select;
    this.labelKey = label;
    this.icon = icon;
    this.columns = columns;
    this.optionsUrl = optionsUrl;
  }
}
