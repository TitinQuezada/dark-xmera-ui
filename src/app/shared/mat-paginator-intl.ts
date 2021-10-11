import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

export class PaginatorIntlService extends MatPaginatorIntl {
  translateService: TranslateService;

  getRangeLabel = function (page, pageSize, length) {
    const of = this.translateService.instant('of');

    if (length === 0 || pageSize === 0) {
      return '0 ' + of + ' ' + length;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
  };

  injectTranslateService(translate: TranslateService) {
    this.translateService = translate;

    this.translateService.onLangChange.subscribe(() => {
      this.translateLabels();
    });

    this.translateLabels();
  }

  translateLabels() {
    super.itemsPerPageLabel = this.translateService.instant('items_per_page');
    super.nextPageLabel = this.translateService.instant('next_page');
    super.previousPageLabel = this.translateService.instant('previous_page');
    super.firstPageLabel = this.translateService.instant('first_page');
    super.lastPageLabel = this.translateService.instant('last_page');

    this.changes.next();
  }
}
