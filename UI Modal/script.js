'use strict';
 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModal = document.querySelector('.close-modal');
 const btnsOpenModal = document.querySelectorAll('.show-modal');

 for(let i=0;i<btnsOpenModal.length;i++){
     btnsOpenModal[i].addEventListener('click', function(){
         console.log('Button clicked')
         modal.classList.remove('hidden') //Not using the . in classList.remove('.hidden')
         overlay.classList.remove('hidden')
         document.addEventListener('keydown', function(e){

            if(e.key === 'Escape'){
                modal.classList.add('hidden');
                overlay.classList.add('hidden')
        
            }
        });
     });
 }
 btnCloseModal.addEventListener('click',function(){
     modal.classList.add('hidden');
     overlay.classList.add('hidden')

 })
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
})

