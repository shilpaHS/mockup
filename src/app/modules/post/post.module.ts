import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { DataTablesModule } from 'angular-datatables';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  declarations: [
    PostComponent,
    PostViewComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxSpinnerModule,
    DataTablesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostModule { }
