import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostViewComponent } from './post-view/post-view.component'
const routes: Routes = [

  { path: '', component: PostComponent },
  { path: ':id', component: PostViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
