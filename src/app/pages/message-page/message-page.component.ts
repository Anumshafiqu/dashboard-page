import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-message-page',
  imports: [MessageModule , CardModule , ToastModule , ButtonModule , InputTextModule , FormsModule , ReactiveFormsModule],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.css',
  standalone : true,
  providers: [MessageService],
})
export class MessagePageComponent {
    constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }

    showContrast() {
        this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
    }

    showSecondary() {
        this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
    }
}
