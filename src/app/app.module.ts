import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { ActiveUser } from './Services/Common/ActiveUser';
import { CustomeServerCallService } from './Services/Common/CustomeServerCallService';
import { CarriculamCourseService } from './Services/Common/course.service';
import { FormEncode } from './Services/Common/FormEncode';
import { LessonsService } from './Services/Common/lessons.service';
import { LocalStorage } from './services/common/localStorage';
import { CreditCardService } from './Services/creditcard.service';
import { UsefullLinkService } from './Services/usefullLink.service';
import { ProfileService } from './Services/profile.service';
import { PersonalCabinetComponent } from './personal-cabinet/personal-cabinet.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { FellowComponent } from './fellow-ship/fellow-ship.component';
import { RegisterComponent } from './register/register.component';
import { LibraryComponent } from './library/library.component';
import { CourseComponent } from './course/course.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AddnewcourseComponent } from './add-new-course/add-new-course.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationService } from './Services/Common/notification.service';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CourcesResolver } from './resolver/cources-resolver';
import { CourseNewComponent } from './course-new/course-new.component';
import { CourseServiceNew } from './Services/courses/course.service';
import { HttpModule, Http } from '@angular/http';
import { CustomeHttpService } from './Services/Common/custome-http.service';
import { AddLessonComponent } from './lesson-new/add-lesson/add-lesson.component';
import { DescriptionComponent } from './lesson-new/add-lesson/description/description.component';
import { LessonSharedService } from './Services/lesson/lesson-shared.service';
import { TemplateService } from './Services/lesson/template/template.service';
import { FreeFormComponent } from './lesson-new/add-lesson/free-form/free-form.component';
import { SegmentNewComponent } from './lesson-new/add-lesson/segment-new/segment-new.component';
import { TemplateNewComponent } from './lesson-new/add-lesson/template-new/template-new.component';
import { SafeImagePipe } from './Pipes/safe-image.pipe';
import { PreviewComponent } from './lesson-new/add-lesson/preview/preview.component';
import { AddNewCourseemptyComponent } from './add-new-courseempty/add-new-courseempty.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { AppComponentService } from './Services/shared-service/app-component.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ExtraQuestionInfoComponent } from './lesson-new/add-lesson/template-new/extra-question-info/extra-question-info.component';
import { LoadingService } from './Services/Common/loading.service';
@NgModule({
  declarations: [
    AppComponent,
    AddnewcourseComponent,
    DashboardComponent,
    SideBarComponent,
    LoginComponent,
    PersonalCabinetComponent,
    FellowComponent,
    RegisterComponent,
    LibraryComponent,
    CourseComponent,
    LessonsComponent,
    ProfileComponent,
    SafeHtmlPipe,
    CourseNewComponent,
    AddLessonComponent,
    DescriptionComponent,
    FreeFormComponent,
    SegmentNewComponent,
    TemplateNewComponent,
    SafeImagePipe,
    PreviewComponent,
    AddNewCourseemptyComponent,
    RequestAccessComponent,
    ExtraQuestionInfoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing, SidebarModule.forRoot()
  ],
  providers: [ActiveUser, CourcesResolver,LoadingService,
    CustomeServerCallService, CarriculamCourseService, NotificationService, TemplateService,
    CustomeHttpService, CourseServiceNew, LessonSharedService,
    FormEncode, LessonsService, LocalStorage, CreditCardService, ProfileService, UsefullLinkService, AppComponentService,

    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
