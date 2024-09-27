// set inital value to zeroclick
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");                 //[button.btn.decrease, button.btn.reset, button.btn.increase]
btns.forEach(function(btn){                                     //DOMTokenList(2) ['btn', 'increase', value: 'btn increase']
                                                                //function button each btn for list
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;       //currentTarget will from the list of btn it will select utton whch is clicked
        if(styles.contains("decrease")){
            count--;
        }          
        else if(styles.contains("increase")){
            count++;
        }          
        else{
            count=0;
        } 
        
        if(count>0){
            value.style.color ="#379777";
        }
        else if(count<0){
            value.style.color ="#B43F3F";
        }
        else{
            value.style.color ="#2F3645";
        }
        value.textContent=count;
    });
});
