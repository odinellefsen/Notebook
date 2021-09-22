// Notebook (Death Note)
initiate = () => {
    const name = prompt('Enter Name');
 
     if(name === 'Óðin Andor Ellefsen' || 'Óðin A. Ellefsen' || 'Óðin Ellefsen' || 'Óðin A Ellefsen') {
        console.log('Death Note initiated');
        DeathNote = () => {
            console.log(prompt('Eliminate Evil, type name') + ' will be eliminated in 40 seconds');
            
            let q = 40;
 
     startTimer = () => {
 
         let countdownTimer = setInterval(() => {
 
             console.log(q);
             q = q - 1;
 
             if (q <= -1) {
                 clearInterval(countdownTimer);
                 console.log('Evil has been eliminated');
                 let more = prompt('Do you wish to rid the world of more evil now?');
                 if (more === 'Yes') {
                     DeathNote();
                 }
                 else if(more === 'Later') {
                     location.reload();
                 }
                 else {
                     console.log('Jeez');
                 }
             }
         }, 1000);
     }
     startTimer();
      }
        DeathNote();
        } 
        else {
        console.log('My Diary');
        console.log(Date());
        return 'Property of ÓAE'; 
        }    
        return 'Elimination Initiated';
 }