import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  counter: any;
  subscripcion: Subscription;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.subscripcion = this.itemsService.getItems()
                          .subscribe((data: any) => {
                            this.counter = data.counter;
                          },
                            (error: any) => {
                          });
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

}
