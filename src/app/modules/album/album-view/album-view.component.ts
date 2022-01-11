import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model'
import { NgxSpinnerService } from "ngx-spinner";
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {
  album: any
  id: any;
  Photos: any;
  constructor(private spinner: NgxSpinnerService,
    private album_service: AlbumService,
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
    this.album_service.getPhotoById(this.id).subscribe((data: Album) => {
      this.album = data
      this.album_service.getPhotos().subscribe((user_photo: any[]) => {
        this.Photos = user_photo.filter(item => {
          return item.albumId === this.album.id
        })
        this.spinner.hide();
        console.log("album :", this.Photos)
      })

    })
  }

}
