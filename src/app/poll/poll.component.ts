import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  @Input() question : string;
  @Input() votes : number[];//[0,1,5,7]
  @Input() voted : boolean;
  @Input() pollimage : string;

  numberOfvotes : number;

  constructor() {}

  ngOnInit(): void {
    if (this.votes.length) {
      this.numberOfvotes = this.votes.reduce((acc , curr) => {
        return (acc += curr);
      });
    }
  }

}
