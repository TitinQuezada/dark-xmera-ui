import { InputTypes } from '../enums/input-types.enum';
import { InputBaseModel } from './input-base-model';

export class InputModel extends InputBaseModel {
  placeholder: string;

  constructor(labelKey: string, columns?: number, icon?: string) {
    super();

    this.type = InputTypes.Text;
    this.labelKey = labelKey;
    this.icon = icon;
    this.columns = columns;
  }
}
