import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model'
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts: Post[] = []
  constructor(private router: Router, private post_service: PostService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.fetchPosts()
    console.log(" this.router :", this.router)
  }
  fetchPosts() {
    this.post_service.getPosts().subscribe((data: Post[]) => {
      console.log("posts :", data)
      this.posts = data
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthChange: false
      };
      this.spinner.hide();
    },
      (error) => {
        console.log("Error accessing Posts", error)
      })
  }

}
