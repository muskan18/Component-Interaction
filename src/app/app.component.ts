import { Component } from '@angular/core';
// import {PtService} from '../pt.service';
// import {Pst} from './pt.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';
  storedPosts = [];      // ek array banaya jis mai hun post k elements dalengee

  onPostAdded(post) {
  this.storedPosts.push(post);
  }
}
