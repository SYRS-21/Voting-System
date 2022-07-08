import { PollVote } from './../types';
import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import ApexCharts from 'apexcharts';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss'],
})
export class PollVoteComponent implements AfterViewInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;
  @Input() id: number;

  @Output() pollVoted: EventEmitter<PollVote> = new EventEmitter();

  voteform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.voteform = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    if (this.voted) {
      this.genrateChart();
    }
  }

  submitForm() {
    const PollVoted: PollVote = {
      id: this.id,
      vote: this.voteform.get('selected').value,
    };

    this.pollVoted.emit(PollVoted);
  }
  genrateChart() {
    const options: ApexCharts.ApexOptions = {
      series: [
        {
          data: this.results,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: this.options,
      },
    };

    const chart = new ApexCharts(
      document.getElementById('poll-results'),
      options
    );
    chart.render();
  }
}
