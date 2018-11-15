import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database'
import { Observable, range } from 'rxjs';
import {map, tap} from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myAngularFire1';
  mytext:string = ""
  items: Observable<any[]>;

  myarray:any
  constructor(private db: AngularFireDatabase) {
   
    
  }
  ngOnInit(){
    this.items = this.db.list('users/user3/user4').valueChanges();


   /*  const itemRef = this.db.list('users2');
    range(1,7).subscribe( index => {
      const newPost = itemRef.push({});
      let post = {id:newPost.key, text:'user' + index};
      newPost.set(post);
    }
    )
    */

    this.db.list('users2/').valueChanges().subscribe(items => {console.log(items);this.myarray = items});
    
  }

  save(){

    console.log('xxxx');
    

    this.myarray.forEach(element => {

      console.log('rrrr');
      
      if (element['id'] == "-LRLJ4euv02pI07cbOZr"){
        const itemRef = this.db.list('users2/' + element['id']);

        const newPost = itemRef.push({});
        let post = {id:newPost.key, text:this.mytext};
        newPost.set(post);
      }
     
      
    });

    //this.db.list('users2').valueChanges().subscribe(item =>)

    /* console.log('save...');
    const itemRef = this.db.list('users/user3/user4');

    const newPost = itemRef.push({});
    let post = {id:newPost.key, text:this.mytext};
    newPost.set(post);

    const itemRef2 = this.db.list('users').snapshotChanges().pipe(
      map(ret => ret.map( a => {
        const data = a.payload.val();
        const id = a.payload.key;
        return {id,talks:{...data}}
      })),
      tap (item => console.log(item, "...."))
      
      ).subscribe() */
    

    //var x = this.db.object('posts/-LRJ3cEhJ5pSMnkDYQiC')
    //x.set({xxx:1, zzz:2})
    //x.remove()
   
   
    
  }
  
}
