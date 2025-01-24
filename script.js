
//step1: capture the form for submit event
document.getElementById('akan-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    //step2: get user input
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

    //step3 validate input

    if (day<= 0 || day > 31){
        alert('Invalid day! Please enter a day between 1 and 31.');
        return;
    }

    if (month <= 0 || month >12){
        alert('Invalid month! Please enter a month between 1 and 12');
        return;
    }

    if (year <=0){
        alert('Invalid year! Please enter a positive year.');
        return;
    }

    if (!gender){
        alert('Please select your gender.');
        return;
    }

    //step4 break the year into century CC and year YY (year within century)
    const CC = Math.floor(year/100);  //century part
    const YY = year % 100;  //year part with century

    //step5: calculate the day of the week using the formula
    const dayOfweek = Math.floor(
        (((CC/4)-(2*CC)-1)+((5*YY/4))+((26*(month+1)/10))+day) % 7
    );
   

    //step6: map the day of the week to Akan name
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


    let akaName;
    if (gender === 'male'){
        akaName = maleNames[dayOfweek];
    } else if (gender === 'female'){
        akaName = femaleNames[dayOfweek];
    }

    //step7 display the results
    document.getElementById('result').innerText = `folk! Your Akan name is ${akaName}`;

});