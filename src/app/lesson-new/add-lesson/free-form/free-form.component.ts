import { Component, OnInit, DoCheck } from '@angular/core';
import { LessonSharedService } from '../../../Services/lesson/lesson-shared.service';

@Component({
  selector: 'app-free-form',
  templateUrl: './free-form.component.html',
  styleUrls: ['./free-form.component.css']
})
export class FreeFormComponent implements OnInit, DoCheck {

  constructor(private lessonSharedService: LessonSharedService) { }
  public lesson: any = {};
  ngOnInit() {
    this.lessonSharedService.lesson$.subscribe(
      a => {
        this.lesson = a;
      });
  }
  ngDoCheck(): void {
    this.lessonSharedService.saveCurrentLesson(this.lesson);
  }
}
