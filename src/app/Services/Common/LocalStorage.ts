import { Injectable } from '@angular/core';
@Injectable()
export class LocalStorage {
    public store: Storage = localStorage;
    constructor() {
        // console.log()'LocalStorage');
    }
    toJson(obj, pretty) {
        if (typeof obj === 'undefined') return undefined;
        return JSON.stringify(obj, this.toJsonReplacer, pretty);
    }
    isWindow(obj) {
        return obj && obj.window === obj;
    }
    toJsonReplacer(key, value) {
        let val = value;
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
            val = undefined;
        } else if (value && value.window === value) {
            val = '$WINDOW';
        } else if (value && document === value) {
            val = '$DOCUMENT';
        }
        return val;
    }
    add(key, value) {
        value = (this.toJson(value, ''));
        this.store.setItem(key, value);
    }
    isString(value) {
        return typeof value === 'string';
    }
    fromJson(json) {
        return this.isString(json)
            ? JSON.parse(json)
            : json;
    }
    get(key) {
        let value = this.store.getItem(key);
        if (value) {
            value = this.fromJson(value);
        }
        return value;
    }
    remove(key) {
        this.store.removeItem(key);
    }
}
