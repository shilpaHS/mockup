import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumViewComponent } from './album-view/album-view.component';
import { SharedModule } from './../../shared/shared.module'



@NgModule({
  declarations: [
    AlbumComponent,
    AlbumViewComponent,
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ]
})
export class AlbumModule { }
