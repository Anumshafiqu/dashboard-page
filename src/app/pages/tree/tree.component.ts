import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { NodeService } from '../../service/node.service';
import { TreeTableModule, TreeTableToggler } from 'primeng/treetable';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TreetableComponent } from '../treetable/treetable.component';

interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-tree',
  imports: [TreeModule , TreeTableModule , FormsModule , ReactiveFormsModule , 
        TreeTableModule,
    CheckboxModule,
    ButtonModule,
    TreetableComponent
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})
export class TreeComponent {
    files!: TreeNode[];

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

       ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }



}
