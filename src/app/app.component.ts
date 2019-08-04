import { Component,OnInit ,} from '@angular/core';
import {Observable,interval} from 'rxjs';
import {map,takeWhile,finalize} from 'rxjs/operators';
import {DomSanitizer, SafeHtml, SafeScript, SafeStyle, SafeResourceUrl} from '@angular/platform-browser' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  countCompleted = false;
  countDown = 5;
  
  count:Observable<number>;
  message= "Happy Birthday!";
  htmlSnippet="<script>alert()</script>";
  url:SafeScript;
  html:SafeHtml;
  style:SafeStyle;
  resourceUrl:SafeResourceUrl;
  
  constructor(private  domSanitizer:DomSanitizer)
  {
    var unsafeUrl="javascript:alert()"; 
    this.html = this.domSanitizer.bypassSecurityTrustHtml(this.htmlSnippet);
    this.url = this.domSanitizer.bypassSecurityTrustUrl(unsafeUrl);
    this.style=this.domSanitizer.bypassSecurityTrustStyle("color:red");
    this.resourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js");
  }
  ngOnInit()
  {
    const timer = interval(1000);
    this.count = timer.pipe(map(i=>this.countDown-i),
    takeWhile(i=>i>0),
    finalize(() => (this.countCompleted = true))
    )
  }
}
