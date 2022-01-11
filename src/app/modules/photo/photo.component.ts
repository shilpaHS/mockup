import { Component, OnInit } from '@angular/core';
import { Photo } from "./photo.model"
import { NgxSpinnerService } from "ngx-spinner";
import { PhotoService } from './photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: Photo[] = [];
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];
  filterKeys = []
  currentIndex = 0
  filterValue: any;
  key: string = 'title';
  constructor(private spinner: NgxSpinnerService,
    private photo_service: PhotoService,
    private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinner.show()
    this.fetchPhotos()
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPhotos();
  }
  fetchPhotos() {
    this.photo_service.getPhotos().subscribe((data: Photo[]) => {
      console.log("album :", data)
      this.photos = data
      this.spinner.hide();
    },
      (error) => {
        console.log("Error accessing Album", error)
      })
  }

}
