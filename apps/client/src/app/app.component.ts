import { Component, OnInit } from '@angular/core'
import { Widget } from '@fem/api-interfaces'
import { WidgetsService } from '@fem/core-data'
import { Observable } from 'rxjs'

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgets$ = this.widgetsService.all()
  }
}
