// Lets build 4 Javascript projects for beginners

// project no: 2 => BMI Calculator

const form= document.querySelector('form')
// const height= parseInt(document.querySelector('#height').value)
// Note: if we write this then it will give you empty value

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results')

    if( height===''|| height<0 || isNaN(height) ){
        results.innerHTML= `please give me a valid height ${height}`;
    }

    else if( weight===''|| weight<0 || isNaN(weight) ){
        results.innerHTML= `please give me a valid weight ${weight}`;
    }

    else{
        const bmi= (weight/((height*height)/10000).toFixed(2))

        // to show the bmi in results
        
        if(bmi<18.6){
            results.innerHTML= `<span>${bmi}</span> and You are Underweight`
        }
        else if(bmi>18.6 && bmi<25){
            results.innerHTML= `<span>${bmi}</span> and Your weight is Normal`
        }
        else if(bmi>24.9){
            results.innerHTML= `<span>${bmi}</span> and You are Overweight`
        }
    }
})