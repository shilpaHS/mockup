import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Photo } from './../photo/photo.model'
import { Post } from './../post/post.model'
import { Album } from './../album/album.model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  albums: Album[] = [];
  photos: Photo[] = [];
  posts: Post[] = [];

  constructor(private dashboard_service: DashboardService) { }

  ngOnInit(): void {
    this.fetchAlbum()
    this.fetchPhoto()
    this.fetchPosts()
  }
  fetchAlbum() {
    this.dashboard_service.getAlbum().subscribe((data: Album[]) => {
      this.albums = data
    },
      (error) => {
        console.log("Error accessing Album", error)
      })
  }
  fetchPhoto() {
    this.dashboard_service.getPhotos().subscribe((data: Photo[]) => {
      this.photos = data
    },
      (error) => {
        console.log("Error accessing Album", error)
      })
  } fetchPosts() {
    this.dashboard_service.getPosts().subscribe((data: Post[]) => {
      this.posts = data
    },
      (error) => {
        console.log("Error accessing Album", error)
      })
  }

}
