import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from './../post.service';
import { Post } from './../post.model'
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  id: any;
  post: any;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private post_service: PostService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this._Activatedroute.paramMap.subscribe(params => {
      console.log("params:", params.get('id'));
      this.id = params.get('id')
      this.getPostById()
    })
  }
  getPostById() {
    this.post_service.getPostById(this.id).subscribe((data: Post) => {
      this.post = data
      console.log("this.post :", this.post)
      this.spinner.hide();

    })
  }
}
