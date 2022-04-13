
async function foo(){

    try {
      let  res = await fetch("https://www.anapioficeandfire.com/api/books");
      let res1 = await res.json();
      console.log(res1);
      var head=document.createElement("h2");
      head.innerHTML="MY FIRST HACKATHON";
      var container=document.createElement('div');
      container.className ="container";
      var row=document.createElement("div");
      row.className="row";
  
      for(i=0;i<res1.length;i++){
  
    
    
      var col=document.createElement("div");
      col.className='col col-md-4';
      
      var p = document.createElement('p');
         
        p.innerText=`Authors:${res1[i].authors}
        Name:${res1[i].name} 
        ISBN:${res1[i].isbn}
        Number Of Pages:${res1[i].numberOfPages}
        Publisger:${res1[i].publisher}  
       Released: ${res1[i].released}`;
      col.append(p);
      row.append(col);
       container.append(row);
   
       document.body.append(head);   
      }
   
   document.body.append(container);  
  
   } catch (error) {
      console.log(error);
    }
  
  }
  foo();