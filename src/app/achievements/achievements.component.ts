import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from '../shared/achievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  achievements = ACHIEVEMENTS;

  ngOnInit(): void {
  }

}
