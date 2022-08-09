import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  public screenwidth: any = window.innerWidth;
  public customizer: string = '';
  public layoutType: string = 'ltr';
  public sidebarType: string = 'compact-wrapper';
  public sidebarSetting: string = 'default-sidebar';
  public MIXLayout: string = 'default';

  public primary_color: string = '#7366ff';
  public secondary_color: string = '#f73164';

  constructor(private modalService: NgbModal,
    public layout: LayoutService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenwidth = event.target.innerWidth;
  }

  ngOnInit() { }
    
  // Open Modal
  openModal(popup) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }

  // Open customizer
  Customizer(val) {
    this.customizer = val;
  }

  // Customize Layout Type
  customizeLayoutType(val) {
    this.layoutType = val;
    this.layout.config.settings.layout_type = val;
    if(val == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
    }
  }

  // Customize Sidebar Type
  customizeSidebarType(val) {
    this.sidebarType = val;
  }

  // Customize Sidebar Setting
  customizeSidebarSetting(val) {
    this.sidebarSetting = val;
    this.layout.config.settings.sidebar_type = val;
  }

  // Customize Mix Layout
  customizeMixLayout(val) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
  }

  applyColor() {
    document.documentElement.style.setProperty('--theme-deafult', this.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
  }

  resetColor() {
    document.documentElement.style.setProperty('--theme-deafult', '#7366ff');
    document.documentElement.style.setProperty('--theme-secondary', '#f73164');
    (<HTMLInputElement>document.getElementById('ColorPicker1')).value = '#7366ff';
    (<HTMLInputElement>document.getElementById('ColorPicker2')).value = '#f73164';
    this.layout.config.color.primary_color = '#7366ff';
    this.layout.config.color.secondary_color = '#f73164';
  }

}
