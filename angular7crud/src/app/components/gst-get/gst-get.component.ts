import { Component, OnInit } from '@angular/core';
import Business from '../../models/Business';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  businessess: Business[];

  constructor(private bs: BusinessService) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businessess = data;
      });
  }

}
