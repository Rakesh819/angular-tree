import { Component } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public selectedNode = null;

  public model: go.TreeModel = new go.TreeModel(
    [
      { 'key': 1, 'name': 'Sundar Pichai', 'title': 'CEO' },
      { 'key': 2, 'name': 'Vibin', 'title': 'VP Marketing/Sales', 'parent': 1 },
      { 'key': 3, 'name': 'Surendhar', 'title': 'Sales', 'parent': 2 },
      { 'key': 4, 'name': 'Reshma', 'title': 'VP Engineering', 'parent': 1 },
      { 'key': 5, 'name': 'Vinitha', 'title': 'Manufacturing', 'parent': 4 },
      { 'key': 6, 'name': 'puzhal', 'title': 'Marketing', 'parent': 2 },
      { 'key': 7, 'name': 'Palani', 'title': 'Sales Rep', 'parent': 3 },
      { 'key': 8, 'name': 'Murugan', 'title': 'Project Mgr', 'parent': 5 },
      { 'key': 9, 'name': 'Tamil Arasan', 'title': 'Events Mgr', 'parent': 6 },
      { 'key': 10, 'name': 'John Danial', 'title': 'Engineering', 'parent': 4 },
      { 'key': 11, 'name': 'Anitha', 'title': 'Process', 'parent': 5 },
      { 'key': 12, 'name': 'Abas', 'title': 'Software', 'parent': 10 },
      { 'key': 13, 'name': 'Vel Murugan', 'title': 'Testing', 'parent': 10 },
      { 'key': 14, 'name': 'Verti Maran', 'title': 'Hardware', 'parent': 10 },
      { 'key': 15, 'name': 'Hari Haran', 'title': 'Quality', 'parent': 5 },
      { 'key': 16, 'name': 'Andavar', 'title': 'Sales Rep', 'parent': 3 }
    ]
  );

  public setSelectedNode(node) {
    this.selectedNode = node;
  }

}