import { Injectable } from '@angular/core';
import { ActiveModel, DraftModel } from '../AppModels/CreditCardComponent.Model/SingleModel';
@Injectable()
export class CreditCardService
{
    getNavImage(): string {
        return '/assets/images/nav.jpg';
    }

    getNotiImage(): string {
        return '/assets/images/noti.png';
    }

    getProfileImage(): string {
        return '/assets/images/profilpic3.jpg';
    }

    getArrowImage(): string
    {
        return '/assets/images/arrow.png';
    }

    getDotsImage(): string {
        return '/assets/images/dots.png';
    }

    activeLessonList: any[] = [];
    getactiveLessonList(): any[] {
        this.activeLessonList = [];
        for (let i = 0; i < 6; i++) {
            const activeModel = new ActiveModel();
            activeModel.CardType = 'Credit Card vs Debit Card';

            activeModel.author = 'Author';
            this.activeLessonList.push(activeModel);
        }
        return this.activeLessonList;
    }
    draftList: any[] = [];
    getdraftList(): any[]
    {
        for (let i = 0; i < 3; i++) {
            const draftModel = new DraftModel();
            draftModel.CardType = 'Credit Card vs Debit Card';
            draftModel.CardType2 = 'Draft';

            draftModel.author = 'Author';
            this.draftList.push(draftModel);
        }
        return this.draftList;
    }

}
