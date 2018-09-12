import { Component, OnInit, Input } from '@angular/core';
import { LessonSharedService } from '../../../../Services/lesson/lesson-shared.service';

@Component({
  selector: 'app-extra-question-info',
  templateUrl: './extra-question-info.component.html',
  styleUrls: ['./extra-question-info.component.css']
})
export class ExtraQuestionInfoComponent implements OnInit {
  @Input() currentSegmentIndex: any = 0;
  Segments ;
  lesson = {
    Segments:[
      {
        SegmentDetails:[
          {
            Title:"",
            Description:"",
            Image:""
          }
        ]
      }
    ]

    }

  constructor(private lessonSharedService: LessonSharedService) {

  }
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
       //this.image = reader.result.split(',')[1];
       this.lesson.Segments[this.currentSegmentIndex].SegmentDetails[0].Image =  reader.result.split(',')[1];
       console.log("data" , this.lesson.Segments[this.currentSegmentIndex].SegmentDetails[0]);
      };
    }
  }
  ngOnInit() {
    this.lessonSharedService.lesson$.subscribe(a=>{
      this.lesson = a;
    })
  }

}
