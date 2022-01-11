import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from './album.model'
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];
  filterKeys = []
  currentIndex = 0
  filterValue: any;
  key: string = 'title';
  constructor(private album_service: AlbumService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.fetchAlbum()
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchAlbum();
  }
  fetchAlbum() {
    this.album_service.getAlbum().subscribe((data: Album[]) => {
      console.log("album :", data)
      this.albums = data
      this.spinner.hide();
    },
      (error) => {
        console.log("Error accessing Album", error)
      })
  }

}
