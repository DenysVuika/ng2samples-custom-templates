import {
    Component,
    ContentChild,
    Input,
    TemplateRef
} from '@angular/core';

@Component({
    selector: 'tlist',
    template: `
    <ul>
        <template ngFor [ngForOf]="items" [ngForTemplate]="template">
        </template>
    </ul>
  `
})
export class TListComponent {

    @ContentChild(TemplateRef)
    template: any;

    @Input()
    items: any[] = [];
}
