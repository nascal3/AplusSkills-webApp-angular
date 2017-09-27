import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalServiceService } from '../../services/modal-service.service';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css']
})
export class UploadModalComponent implements OnInit {
  @Output() modalValue = new EventEmitter();

  showUpTab: boolean;
  showSelTab: boolean;
  active = 'tabActive';
  active2 = 'tabInactive';

  constructor(
    public modalService: ModalServiceService
  ) { }

  ngOnInit() {
  }

  showUploadTab() {
      this.showUpTab = false;
      this.showSelTab = false;
      this.active = 'tabActive';
      this.active2 = 'tabInactive';
  }

  showSelectTab() {
      this.showSelTab = true;
      this.showUpTab = true;
      this.active = 'tabInactive';
      this.active2 = 'tabActive';
  }

  closeModal() {
    this.modalValue.emit(false);
  }
}
