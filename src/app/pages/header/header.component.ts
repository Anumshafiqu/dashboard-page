import { Component, EventEmitter, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  imports: [ MenubarModule, ButtonModule , AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // @Output() toggleSidebar = new EventEmitter<void>();

  onToggle() {
    this.toggleSidebar.emit();
  }
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

}
