import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo.model'
import { NgxSpinnerService } from "ngx-spinner";
import { PhotoService } from '../photo.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent implements OnInit {
  photo: any;
  id: any;

  constructor(private spinner: NgxSpinnerService,
    private photo_service: PhotoService,
    private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinner.show();
    this._Activatedroute.paramMap.subscribe(params => {
      console.log("params:", params.get('id'));
      this.id = params.get('id')
      this.getAlbumById()
    })
  }
  getAlbumById() {
    this.photo_service.getPhotoById(this.id).subscribe((data: Photo) => {
      this.photo = data
      this.spinner.hide();

    })
  }

}
