import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchfilter',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], filter: String, key: any = 'title'): any {
        // let properties = Object.keys(items[0]);
        if (!items || !filter) {
            return items;
        }

        // properties.some(property => {
        //     const value = property
        // })
        console.log("items :", items)
        let text = filter.toLowerCase()
        return items.filter(item => item[key].toLowerCase().indexOf(text) !== -1);

    }
}