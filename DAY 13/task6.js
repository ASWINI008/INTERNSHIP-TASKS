function BMI_Cal(weight,height){
    let BMI= weight/(height * height) ;
    if(BMI < 18.5)
    {
        console.log("You are underweight");
    }
    else if((BMI>=18.5) && (BMI <=24.9))
    {
        console.log("You are normal");

    }
    else
    {
        console.log("You are Overweight");
    }
}
BMI_Cal(65,1.7);