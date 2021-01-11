import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events: Array<any>;


  ngOnInit(): void {
    this.getEventList()
  }

  
  getEventList()
   {

    this.eventService.getEventList().subscribe(data => {
      console.log(data)
      this.events = data;

    })
  }



}
