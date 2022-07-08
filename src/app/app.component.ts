import { PollForm, PollVote } from './types';
import { PollService } from './poll-service/poll.service';
import { Component } from '@angular/core';
import { Poll } from './Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showform = false;
  activePoll: Poll = null;

  polls = this.ps.getPolls();

  constructor(private ps: PollService) {}

  ngOnInit(){
    this.ps.onEvent('PollCreated').subscribe(() => {
      this.polls = this.ps.getPolls();
    })
  }
  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }

  handlePollCreate(poll: PollForm) {
    this.ps.createPoll(poll);
  }

  handlePollVote(pollVoted: PollVote) {
    this.ps.vote(pollVoted.id, pollVoted.vote);
  }
}
