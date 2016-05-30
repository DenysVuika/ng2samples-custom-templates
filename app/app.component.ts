import { Component } from '@angular/core';
import { TListComponent } from './tlist.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Templated list</h1>
        <tlist [items]="items">
            <template let-item="$implicit" let-i="index">
                <li>
                    [{{i}}] Hello: {{item.title}}
                </li>
            </template>
        </tlist>
    `,
    directives: [TListComponent]
})
export class AppComponent {

    items: any[] = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' }
    ];

}
