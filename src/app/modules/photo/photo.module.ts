import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoComponent } from './photo.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from './../../shared/shared.module'



@NgModule({
  declarations: [
    PhotoComponent,
    PhotoViewComponent,
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule,
    NgxSpinnerModule,
    SharedModule
  ]
})
export class PhotoModule { }
