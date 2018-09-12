import { Component, OnInit, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
import { LessonSharedService } from '../../../Services/lesson/lesson-shared.service';
declare var $: any;

@Component({
  selector: 'app-segment-new',
  templateUrl: './segment-new.component.html',
  styleUrls: ['./segment-new.component.css']
})
export class SegmentNewComponent implements OnInit, DoCheck {
 
  constructor(private lessonSharedService: LessonSharedService) { }
  public lesson: any = {};
  startScreenId = 1;
  initialstageOfleeson = false;
 public currentscreen: any;
 public segment:any;
public newtext:any="hello";

  ngOnInit() {
    this.lessonSharedService.lesson$.subscribe(
      a => {
        this.lesson = a;

      });
      $('#seg').append("hello");
  }

 
  
  ngDoCheck(): void {

      this.lessonSharedService.saveCurrentLesson(this.lesson);

     
  }
  OpenAutoSegmentModal() {

  }
  setCurrentScreen(segment){
    this.currentscreen = segment ;    
  }
  removeSegment(){
    this.lesson.Segments = this.lesson.Segments.filter(obj => obj !== this.currentscreen);
  }
  addNewSegment() {
    this.lesson.Segments.push({
      TemplateId: 0, LessonId: this.lesson.Id, ScreenId: this.lesson.Segments.length + 1,
      SegmentImages: [{Image: ''}],
      QuestionAnswers: [{Question: '', SuggestedAnswers: '', CorrectAnswer: '', QuestionTypeId: '', mcOptions : {
        McOption1: '',
        McOption2: '',
        McOption3: '',
        McOption4: '',
      },
      mSelect: [
        {mSelectOption: '', value: false},
        {mSelectOption: '', value: false},
        {mSelectOption: '', value: false},
        {mSelectOption: '', value: false},
        {mSelectOption: '', value: false},
  
      ]}]
    });
    
    $('#seg').append("hello");
   
  }


}
