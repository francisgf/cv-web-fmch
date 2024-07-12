import { Component } from '@angular/core';
import { ServiceAcviteComponentsService } from 'src/app/services/service-acvite-components.service';

@Component({
  selector: 'app-detail-skills',
  templateUrl: './detail-skills.component.html',
  styleUrls: ['./detail-skills.component.css']
})
export class DetailSkillsComponent {


constructor(private serviceFlagActiveComponents: ServiceAcviteComponentsService){


}

returnMenuSkills() {
  this.serviceFlagActiveComponents.sendFlagSkills(true);
}

}
