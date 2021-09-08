import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { AchievementsComponent } from './achievements/achievements.component';


const routes: Routes = [
  { path:'about', component: AboutComponent },
  { path:'projects', component: ProjectsComponent },
  { path:'contact', component: ContactComponent },
  { path:'skills', component: SkillsetComponent },
  { path:'achievements', component: AchievementsComponent },
  { path:'', redirectTo:'about', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
