/// <reference path="../appmodels/link.ts" />
import {Injectable} from '@angular/core';
import { Link } from '../AppModels/link';

@Injectable()
export class UsefullLinkService {
    public GetLinks(): Link[] {
        return [
            { name: 'About', href: '#' },
            { name: 'Services', href: '#' },
            { name: 'Contact', href: '#' }

        ];
    }
}
