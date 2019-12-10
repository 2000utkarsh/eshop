import { AngularFireDatabase } from 'angularfire2/database';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { Router, ActivatedRoute } from '@angular/router';
import  'rxjs/add/operator/take'; 
import { ɵBrowserDomAdapter } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  

  


  categories$;
  dataExtract;
  product = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private af: AngularFireDatabase)
    {
      this.categories$ = categoryService.getCategories();
      this.categories$.subscribe(data =>{
        this.dataExtract = data;
    })
    
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log("hey bro",id);
    // if (id) this.productService.get(id).take(1).subscribe( p=>this.product = p);


    
  }

  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
