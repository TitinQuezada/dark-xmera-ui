import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import components from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, HttpClientModule, TranslateModule, MaterialModule],
  exports: [HttpClientModule, TranslateModule, MaterialModule, ...components],
})
export class SharedModule {}
