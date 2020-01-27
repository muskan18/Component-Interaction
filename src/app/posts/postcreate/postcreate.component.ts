import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  @Output() postCreated = new EventEmitter();        // postCreated is an event
  constructor() { }

  onAddPost() {
    const post = {title: this.enteredTitle, content: this.enteredContent} ;     // package create kr rhe hai
    // console.log(post);
    this.postCreated.emit(post);               // post emit ho rha hai
  }

  ngOnInit() {

  }

}
