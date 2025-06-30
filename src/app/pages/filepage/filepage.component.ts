import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-filepage',
  imports: [FileUploadModule , HttpClientModule , CommonModule , FormsModule , ReactiveFormsModule , CardModule , ToastModule],
  templateUrl: './filepage.component.html',
  styleUrl: './filepage.component.css' , 
  standalone : true,
  providers: [MessageService]
})
export class FilepageComponent {
 uploadedFiles: any[] = [];

constructor(private messageService: MessageService) {}

onUpload(event: any) {
  for (let file of event.files) {
    this.uploadedFiles.push(file);
  }

  this.messageService.add({
    severity: 'info',
    summary: 'File Uploaded',
    detail: ''
  });
}
 

}
