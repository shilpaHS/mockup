import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'post', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },
  { path: 'album', loadChildren: () => import('./modules/album/album.module').then(m => m.AlbumModule) },
  { path: 'photo', loadChildren: () => import('./modules/photo/photo.module').then(m => m.PhotoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
