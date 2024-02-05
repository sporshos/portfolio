let listA = document.querySelectorAll('a');
let zIndex = 2;

listA.forEach(a => {
    a.addEventListener('click', function (event) {
        let valueTab = a.dataset.tab;
        let activeOld = document.querySelector('.tab.active');
        if (activeOld) activeOld.classList.remove('active');
        
        if (valueTab) {
            let tabActive = document.getElementById(valueTab);
            zIndex++;

            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.style.zIndex = zIndex;
            tabActive.classList.add('active');

            // Update the active variable
            active = valueTab;
        }
    });
});


// let ListA = document.querySelectorAll('a');
// let zIndex=2;

// ListA.forEach(
//     a =>{
//         a.addEventListener("click",
//         function(evet){
//             let valueTab = a.dataset.tab;
            
//             if(valueTab){
//                 let tabActive = document.getElementById(valueTab)
//                 zIndex ++ 
//                 tabActive.style.zIndex = zIndex


//                 tabActive.style.setProperty('--x', evet.clientX + 'px')
//                 tabActive.style.setProperty('--y', evet.clientY + 'px')
//                 tabActive.classList.add("active")
//                 setInterval(() => {
//                     tabActive.classList.remove('active')

//                 }, 1000);
//             }

//         }
//         )
//     }
    
// )