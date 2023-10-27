import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent {
  @Input() imagePath: string = "";
  @Input() title: string = "";
  @Input() frameworks: string = "";
  @Input() description: string = "";
  @Input() testLink: string = "";
  @Input() githubLink: string = "";
  @Input() isFlexRowReversed: boolean = false;

  
}
