import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { AlbumViewComponent } from './album-view/album-view.component';


const routes: Routes = [{ path: '', component: AlbumComponent },
{ path: ':id', component: AlbumViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
