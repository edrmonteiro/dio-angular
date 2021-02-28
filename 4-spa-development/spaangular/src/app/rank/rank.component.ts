import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Activity } from '../shared/model/activity';

interface MinutesRank {
  person: string;
  minutes: number;
}
@Component({
  selector: 'erm-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css'],
})
export class RankComponent implements OnChanges {
  @Input() listActivities: Activity[] = [];
  //rank: Array<string> = [];
  rank: Array<MinutesRank> = [];
  //rank: Array<any> = [];

  constructor() {}

  updateRank() {
    var dict = [];
    Array.from(new Set(this.listActivities.map((x) => x.person))).forEach(
      (x) => {
        dict.push(
          this.listActivities
            .filter((y) => y.person === x)
            .reduce((output, item) => {
              let val = output[x] === undefined ? 0 : output[x];
              output[x] = Number(item.durationMinutes) + Number(val);
              return output;
            }, {})
        );
      }
    );
    this.rank = [];
    for (var key in dict) {
      const list = Object.entries(dict[key]);
      this.rank.push({
        person: list[0][0].toString(),
        minutes: parseInt(list[0][1].toString()),
      });
    }
    this.rank.sort(function (a, b) {
      return b.minutes - a.minutes;
    });
  }

  ngOnChanges(): void {
    this.updateRank();
  }
}
