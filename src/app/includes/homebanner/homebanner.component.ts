import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from '../../shared/banner.service';

@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.scss']
})
export class HomebannerComponent implements OnInit {
  banners: [];
  constructor(public bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.getBanner().subscribe((data:any) => {
      this.banners = data.data;
      console.log(this.banners);
      });
  }

}
