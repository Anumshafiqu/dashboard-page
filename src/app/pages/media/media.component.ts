import { Component, model, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { Product } from '../domain/product';
import { ProductService } from '../service/product.service';
import { ButtonModule } from 'primeng/button';
import { ProserviceService } from '../../service/proservice.service';
import { PhotoService } from '../../service/photo.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-media',
  imports: [GalleriaModule , ImageModule , CarouselModule ,  TagModule , ButtonModule , CardModule  ] ,
  templateUrl: './media.component.html',
  styleUrl: './media.component.css' , 
  standalone:true,
    providers: [PhotoService]
})
export class MediaComponent {
    
products: Product[] = [];
responsiveOptions: any[] = [];

constructor(private productService: ProserviceService , private photoService: PhotoService) {}

ngOnInit() {
  // this.photoService.getImages().then((images) => this.images.set(images));
    this.productService.getProductsSmall().then((products) => {
        this.products = products;
    });

    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        }
    ];



  //   this.images = [
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
  //       alt: 'Image 1'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
  //       alt: 'Image 2'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
  //       alt: 'Image 3'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
  //       alt: 'Image 4'
  //     }
  //   ];

  // this.responsiveOptions = [
  //   {
  //     breakpoint: '1024px',
  //     numVisible: 1
  //   },
  //   {
  //     breakpoint: '768px',
  //     numVisible: 1
  //   },
  //   {
  //     breakpoint: '560px',
  //     numVisible: 1
  //   }
  // ];





}

getSeverity(status: string): 'success' | 'warning' | 'danger' | undefined {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return undefined;
    }
}

  images = model([]);
  // images: any[] = [];
  // responsiveOptions: any[] = [];

  // ngOnInit(): void {
  //   this.images = [
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
  //       alt: 'Image 1'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
  //       alt: 'Image 2'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
  //       alt: 'Image 3'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
  //       alt: 'Image 4'
  //     }
  //   ];

  //   this.responsiveOptions = [
  //     {
  //       breakpoint: '1024px',
  //       numVisible: 3
  //     },
  //     {
  //       breakpoint: '768px',
  //       numVisible: 2
  //     },
  //     {
  //       breakpoint: '560px',
  //       numVisible: 1
  //     }
  //   ];
  // }


  galleriaImages = [
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10s.jpg'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg'
  },
  {
    itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg'
  }
];

  galleriaResponsive = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];





}
