import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { PhotoViewComponent } from './photo-view/photo-view.component'

const routes: Routes = [{ path: '', component: PhotoComponent },
{ path: ':id', component: PhotoViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
