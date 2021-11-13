import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import components from './components';
import { HttpClientInterceptor } from './http-client/http-client-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFieldComponent } from './components/search-field/search-field.component';

@NgModule({
  declarations: [...components, SearchFieldComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    TranslateModule,
    MaterialModule,
    ...components,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
