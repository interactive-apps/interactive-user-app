import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/app/modules/users/components/user/user.component';
import { UserPaginationComponent } from 'src/app/modules/users/components/user-pagination/user-pagination.component';
import { UserFormComponent } from 'src/app/modules/users/components/user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatOptionModule } from '@angular/material';



@NgModule({
  declarations: [
    UserComponent,
    UserPaginationComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatOptionModule,
    MatButtonModule, MatCheckboxModule, MatSelectModule,
    MatFormFieldModule,
    MatInputModule, 
    RouterModule.forChild([
      { path: '', component: UserComponent }
    ])
  ]
})
export class UsersModule { 
  
}
