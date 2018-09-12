import { Injectable } from '@angular/core';
import { CustomeServerCallService } from './CustomeServerCallService';
@Injectable()
export class LessonsService {
    saveLessons(obj, customeServerCallService) {
        alert(JSON.stringify(obj));
        return customeServerCallService.createGeneralRequest(obj, 'api/Lessons/PostLesson');
    }
    AddToStaging(obj, customeServerCallService) {
        alert(JSON.stringify(obj));
        return customeServerCallService.createGeneralRequest(obj, 'api/Lessons/PostLesson');
    }
}
