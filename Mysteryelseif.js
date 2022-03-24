const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
let cost;



function buyTicket() {
    const age = prompt('What is your age?'); // 13
    if ((age <= 12) || (age >= 65)) { // yes
        cost = CHILD_AND_SENIOR_TICKET_COST; 
    }  
    else {
        cost = GENERAL_ADMISSION_TICKET_COST;
    }

    alert('Your ticket will cost: $' + cost);
    
}