import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { LessonSharedService } from '../../../Services/lesson/lesson-shared.service';
declare var $: any;
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy, DoCheck {
  constructor(
    private lessonSharedService: LessonSharedService) { }
  public lesson: any = {};
  ngOnInit() {

    this.lessonSharedService.lesson$.subscribe(
      a => {
        this.lesson = a;
      });
    $(document).ready(function () {
      $('.js-example-basic-single').select2();
    });
  }
  ngDoCheck(): void {
    this.lessonSharedService.saveCurrentLesson(this.lesson);
  }
  ngOnDestroy(): void {
    alert();
    this.lessonSharedService.saveCurrentLesson(this.lesson);
  }
}
