import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

@Injectable({
  providedIn: 'root'
})
export class TreeViewService {

  constructor() { }

  getItems(): TreeviewItem[] {
    const user = new TreeviewItem(
      {
        text: 'Admin', value: 9, children: [
          {
            text: 'Assests', value: 91, children: [{
              text: 'CSS', value: 911, children: [
                { text: 'Css One', value: 9111 },
                { text: 'Css-two', value: 9112 },
              ]
            },
            {
              text: 'JS', value: 912, children: [
                { text: 'JS One', value: 9121 },
                { text: 'JS Two', value: 9122 },
              ]
            },
            {
              text: 'SCSS', value: 92, children: [
                {
                  text: 'Sub Child', value: 921, children: [
                    { text: 'Sub File', value: 9211 },
                    { text: 'Sub File', value: 9212 },
                  ]
                },
                { text: 'SCSS two', value: 922 }
              ]
            },]
          },
          {
            text: 'Default', value: 99, children: [
              { text: 'Dashboard', value: 991 },
              { text: 'Typography', value: 992 },
            ]
          },
        ]
      }
    );
    return [user];
  }


}
