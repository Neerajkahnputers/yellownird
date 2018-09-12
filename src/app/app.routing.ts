import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalCabinetComponent } from './personal-cabinet/personal-cabinet.component';
import { LoginComponent } from './login/login.component';
import { FellowComponent } from './fellow-ship/fellow-ship.component';
import { RegisterComponent } from './register/register.component';
import { LibraryComponent } from './library/library.component';
import { CourseComponent } from './course/course.component';
import { AddnewcourseComponent } from './add-new-course/add-new-course.component';
import { ProfileComponent } from './profile/profile.component';
import { CourcesResolver } from './resolver/cources-resolver';
import { CourseNewComponent } from './course-new/course-new.component';
import { AddLessonComponent } from './lesson-new/add-lesson/add-lesson.component';
import { AddNewCourseemptyComponent } from './add-new-courseempty/add-new-courseempty.component';



const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,

  },
  {
    path: 'PersonalCabinet',
    component: PersonalCabinetComponent
  }
  ,
  {
    path: 'Login',  // otherwise route.
    component: LoginComponent
  },
  {
    path: 'Fellow',  // otherwise route.
    component: FellowComponent
  },
  {
    path: 'Register',  // otherwise route.
    component: RegisterComponent
  },
  //{
  //    path: 'CreditCard', //otherwise route
  //    component: CreditCard
  //},
  {
    path: 'Course', //otherwise route
    component: CourseComponent,

  },
  {
      path: 'Course-new/:id', //otherwise route
      component: CourseNewComponent

  },
  {
    path: 'add-newLesson/:Courseid', //otherwise route
    component: AddLessonComponent

  },
  {
    path: 'Profile1', //otherwise route
    component: ProfileComponent
  },


  {
    path: 'Library', //otherwise route
    component: LibraryComponent
  },
  {
    path: 'Addnewcourse/:id', //otherwise route
    component: AddNewCourseemptyComponent
  },
  //{
  //    path: 'Submission', //otherwise route
  //    component: Submission
  //},
  {
    path: '**',  // otherwise route.
    component: DashboardComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
