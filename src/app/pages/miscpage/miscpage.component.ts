import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-miscpage',
  imports: [CardModule , TagModule , SkeletonModule , ProgressBarModule , BadgeModule , ButtonModule , AvatarGroupModule ,
    AvatarModule , ChipModule , AvatarGroupModule , 
  ],
  templateUrl: './miscpage.component.html',
  styleUrl: './miscpage.component.css' , 
  standalone : true ,
})
export class MiscpageComponent {

}
