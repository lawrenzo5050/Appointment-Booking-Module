var next_click=document.querySelectorAll(".next_button");
var main_form=document.querySelectorAll(".main");
var step_list = document.querySelectorAll(".progress-bar li");
var num = document.querySelector(".step-number");
let formnumber=0;

next_click.forEach(function(next_click_form){
    next_click_form.addEventListener('click',function(){
        if(!validateform()){
            return false
        }
       formnumber++;
       updateform();
       progress_forward();
       contentchange();
    });
}); 

var back_click=document.querySelectorAll(".back_button");
back_click.forEach(function(back_click_form){
    back_click_form.addEventListener('click',function(){
       formnumber--;
       updateform();
       progress_backward();
       contentchange();
    });
});

var username=document.querySelector("#user_name");
var shownname=document.querySelector(".shown_name");
 

var submit_click=document.querySelectorAll(".submit_button");
submit_click.forEach(function(submit_click_form){
    submit_click_form.addEventListener('click',function(){
       shownname.innerHTML= username.value;
       formnumber++;
       updateform(); 
    });
});

var heart=document.querySelector(".fa-heart");
heart.addEventListener('click',function(){
   heart.classList.toggle('heart');
});


var share=document.querySelector(".fa-share-alt");
share.addEventListener('click',function(){
   share.classList.toggle('share');
});

 

function updateform(){
    main_form.forEach(function(mainform_number){
        mainform_number.classList.remove('active');
    })
    main_form[formnumber].classList.add('active');
} 
 
function progress_forward(){
    // step_list.forEach(list => {
        
    //     list.classList.remove('active');
         
    // }); 
    
     
    num.innerHTML = formnumber+1;
    step_list[formnumber].classList.add('active');
}  

function progress_backward(){
    var form_num = formnumber+1;
    step_list[form_num].classList.remove('active');
    num.innerHTML = form_num;
} 
 
var step_num_content=document.querySelectorAll(".step-number-content");

 function contentchange(){
     step_num_content.forEach(function(content){
        content.classList.remove('active'); 
        content.classList.add('d-none');
     }); 
     step_num_content[formnumber].classList.add('active');
 } 
 
 
function validateform(){
    validate=true;
    var validate_inputs=document.querySelectorAll(".main.active input");
    validate_inputs.forEach(function(vaildate_input){
        vaildate_input.classList.remove('warning');
        if(vaildate_input.hasAttribute('require')){
            if(vaildate_input.value.length==0){
                validate=false;
                vaildate_input.classList.add('warning');
            }
        }
    });
    return validate;
    
}

function CountryChange() {
    var countryState = [
        [
            'NIGERIA', [
            ['', 'State/Province'],
            ['AL', 'Abuja'],
            ['AK', 'Lagos'],
            ['AZ', 'Ibadan'],
            ['AR', 'Kaduna'],
], ],
[
            'CA', [
            ['', 'State/Province'],
            ['AB', 'Alberta'],
            ['BC', 'British Columbia'],
            ['MB', 'Manitoba'],
            ['NB', 'New Brunswick'],
]]
];

    var countryElement = document.getElementById('countryId');
    var stateElement = document.getElementById('stateId');
    var stateLabelElement = document.getElementById('stateLabel');

if (countryElement && stateElement) {
        var listOfState = [
            ['XX', 'None']
        ];

        var currentCountry = countryElement.options[countryElement.selectedIndex].value;
        for (var i = 0; i < countryState.length; i++) {
            if (currentCountry == countryState[i][0]) {
                listOfState = countryState[i][1];
            }
        }
        if (listOfstate.length < 2) 
            {
            stateElement.style.display = 'none';
            stateLabelElement.style.display = 'none';
            }
    else 
        {
        stateElement.style.display = 'inline';
        stateLabelElement.style.display = 'inline';
        }
        var selectedState;
        for (var i = 0; i < stateElement.length; i++) {
            if (stateElement.options[i].selected === true) {
                selectedState = stateElement.options[i].value;
            }     
        }
        stateElement.options.length = 0;
        for (var i = 0; i < listOfState.length; i++) {
            stateElement.options[i] = new Option(listOfState[i][1], listOfState[i][0]);
            if (listOfState[i][0] == selectedState) {
                stateElement.options[i].selected = true;
            }    
        }      
    }
}
