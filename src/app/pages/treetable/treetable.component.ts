import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { NodeService } from '../../service/node.service';
interface Column {
    field: string;
    header: string;
}
@Component({
  selector: 'app-treetable',
  imports: [TreeTableModule , NgFor , NgIf],
  templateUrl: './treetable.component.html',
  styleUrl: './treetable.component.css'
})
export class TreetableComponent {
    files!: TreeNode[];

    selectionKeys = {};

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getTreeTableNodes().then((files:any) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectionKeys = {
            '0': {
                partialChecked: true
            },
            '0-0': {
                partialChecked: false,
                checked: true
            },
            '0-0-0': {
                checked: true
            },
            '0-0-1': {
                checked: true
            },
            '0-0-2': {
                checked: true
            }
        };
    }

}
