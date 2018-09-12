import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Link } from '../AppModels/link';
import { UsefullLinkService } from '../Services/usefulllink.service';
@Component({
    selector: 'personal-cabinet',
    templateUrl: './personal-cabinet.component.html',
    providers: [UsefullLinkService]
})
export class PersonalCabinetComponent implements OnInit {
    private _usefullLinkService: UsefullLinkService;
    private _linkList: Link[];
    get LinkList() { return this._linkList; }
    constructor(private linkService: UsefullLinkService) {
        this._usefullLinkService = linkService;
    }
    public ngOnInit(): void {
        this._linkList = this._usefullLinkService.GetLinks();
    }
}
