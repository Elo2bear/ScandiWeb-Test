function enable(){
    let  productCheck = document.getElementById('checkA');
    let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }
   
   
   function enableB(){
       let  productCheck = document.getElementById('checkB');
       let  addButton = document.getElementById('addDel')
          if(productCheck.checked == true){
              addButton.style.display = 'block'
          } else {
              addButton.style.display = 'none'
      
          }
      }
   
      function enableC(){
       let  productCheck = document.getElementById('checkC');
       let  addButton = document.getElementById('addDel')
          if(productCheck.checked == true){
              addButton.style.display = 'block'
          } else {
              addButton.style.display = 'none'
      
          }
      }
   
   
      function enableD(){
       let productCheck = document.getElementById('checkD');
       let  addButton = document.getElementById('addDel')
          if(productCheck.checked == true){
              addButton.style.display = 'block'
          } else {
              addButton.style.display = 'none'
      
          }
      }
   

   
       function enableSecA(){
       let  productCheck = document.getElementById('checkSec1');
       let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }
   
   function enableSecB(){
       let  productCheck = document.getElementById('checkSec2');
       let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }
   
   
   function enableSecC(){
       let  productCheck = document.getElementById('checkSec3');
       let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }
   
   function enableSecD(){
       let  productCheck = document.getElementById('checkSec4');
       let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }
   
   
   function enablethrA(){
       let  productCheck = document.getElementById('checkthr1');
       let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }   
   
   
   function enablethrB(){
       let  productCheck = document.getElementById('checkthr2');
       let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }   
   
   
   
   function enablethrC(){
       let  productCheck = document.getElementById('checkthr3');
       let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }   
   
   
   
   function enablethrD(){
       let  productCheck = document.getElementById('checkthr4');
       let  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }   
   
   
     function getDVDList(){
      let x = document.getElementById('list').value;
      if(x == "DVD"){
         document.getElementById('dvdFun').style.display = 'block'
         document.getElementById('bookFun').style.display = 'none'
         document.getElementById('furnitureFun').style.display = 'none'
       } else 
           if(x == "Book"){
              document.getElementById('dvdFun').style.display = 'none'
              document.getElementById('bookFun').style.display = 'block'
               document.getElementById('furnitureFun').style.display = 'none'
       } else 
       if(x == "Furniture"){
           document.getElementById('dvdFun').style.display = 'none'
           document.getElementById('bookFun').style.display = 'none'
            document.getElementById('furnitureFun').style.display = 'block'
          }
       else
       if(x == "select"){
           document.getElementById('dvdFun').style.display = 'none'
           document.getElementById('bookFun').style.display = 'none'
            document.getElementById('furnitureFun').style.display = 'none'
          }
   
     
     }
   
      function save(){
     let saveBt = document.getElementById('savePr')
     let sectionDv = document.getElementById('section')
       if(saveBt.checked == true){
           sectionDv.style.display = 'none'
       }   else {
   
       }
   
   
   }
    