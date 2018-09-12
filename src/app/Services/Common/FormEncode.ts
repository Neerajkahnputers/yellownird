
import { Injectable } from '@angular/core';
@Injectable()
export class FormEncode {
    constructor() { console.log('FormEncode'); }
    public EncodeData(data): string {
        const pairs = [];
        for (const name in data) {
            if (data.hasOwnProperty(name)) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
        }
        return pairs.join('&').replace(/%20/g, '+');
    }
}
