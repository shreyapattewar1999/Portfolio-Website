import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../shared/skills';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  constructor() { }

  skillset = SKILLS;
  ngOnInit(): void {
  }

}
