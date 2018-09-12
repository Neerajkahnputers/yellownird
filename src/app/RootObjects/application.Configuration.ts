import { Injectable } from '@angular/core';
@Injectable()

export class ApplicationConfiguration
{
    public APPLICATIONURL = '';
    public WEBAPIURL = '';
    public LessonAutoSegmentSize = 0;

    constructor()
    {
        this.APPLICATIONURL = 'http://www.yellowbird.tk';
        this.WEBAPIURL = 'http://yellowbirdapi.azurewebsites.net/';
        this.LessonAutoSegmentSize = 500;
    }
}
