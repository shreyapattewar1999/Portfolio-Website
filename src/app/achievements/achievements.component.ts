import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from '../shared/achievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements:any;
  courses:any;
  academics:any;
  constructor() { 
    this.achievements = ACHIEVEMENTS;
  this.courses = ACHIEVEMENTS.filter((a) => a.type=="course");
  this.academics = ACHIEVEMENTS.filter((a) => a.type!="course");
  console.log(this.courses);
  console.log(this.academics);

  }

  


  ngOnInit(): void {
  }

}
