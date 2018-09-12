import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Link } from '../AppModels/link';
import { UsefullLinkService } from '../Services/usefulllink.service';

@Component({
  selector: 'app-fellow-ship',
  templateUrl: './fellow-ship.component.html',

  providers: [UsefullLinkService]
})
export class FellowComponent implements OnInit {

    private usefullLinkService: UsefullLinkService;

    private linkList: Link[];
    private get LinkList() {
        return this.linkList;
    }

    constructor(private linkService: UsefullLinkService) {
        this.usefullLinkService = linkService;
    }

    ngOnInit(): void {
        this.linkList = this.usefullLinkService.GetLinks();
    }

    goTo(location: string): void {

        window.location.hash = location;

    }

    private set LinkList(value) { }

    public keyupHandler($event) {
    }
}
