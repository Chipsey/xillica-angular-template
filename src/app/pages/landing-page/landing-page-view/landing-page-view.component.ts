import { Component, OnInit } from '@angular/core';
import { Nft } from 'src/app/models/nft';

@Component({
  selector: 'app-landing-page-view',
  templateUrl: './landing-page-view.component.html',
  styleUrls: ['./landing-page-view.component.scss'],
})
export class LandingPageViewComponent implements OnInit {
  nfts: Array<Nft> = [
    {
      id: 34356771,
      title: 'Girls of the Cartoon Universe',
      creator: 'Jhon Doe',
      instant_price: 4.2,
      price: 187.47,
      ending_in: '06h 52m 47s',
      last_bid: 0.12,
      image: './assets/images/img-01.jpg',
      avatar: './assets/avatars/avt-01.jpg',
    },
    {
      id: 34356772,
      title: 'Pupaks',
      price: 548.79,
      last_bid: 0.35,
      image: './assets/images/img-02.jpg',
    },
    {
      id: 34356773,
      title: 'Seeing Green',
      price: 234.88,
      last_bid: 0.15,
      image: './assets/images/img-03.jpg',
    },
    {
      id: 34356771,
      title: 'Girls of the Cartoon Universe',
      creator: 'Jhon Doe',
      instant_price: 4.2,
      price: 187.47,
      ending_in: '06h 52m 47s',
      last_bid: 0.12,
      image: './assets/images/img-01.jpg',
      avatar: './assets/avatars/avt-01.jpg',
    },
    {
      id: 34356772,
      title: 'Pupaks',
      price: 548.79,
      last_bid: 0.35,
      image: './assets/images/img-02.jpg',
    },
    {
      id: 34356773,
      title: 'Seeing Green',
      price: 234.88,
      last_bid: 0.15,
      image: './assets/images/img-03.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
