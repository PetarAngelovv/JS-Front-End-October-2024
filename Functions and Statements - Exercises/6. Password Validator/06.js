function PasswordValidator(password){
  let patternFullpass = new RegExp(/^(?=.*\d.*\d)[a-zA-Z\d]{6,10}$/);
 
  let patternOnlyLetAndDigit = new RegExp(/^[a-zA-Z\d]+$/);
  let patternAtLeast2Digits= new RegExp(/(.*\d){2}/);
 
 
  let isPassLongEnough = password.length < 6 || password.length > 10;
  let isOnlyletAndDigits =  patternOnlyLetAndDigit.test(password);
  let isAtLeast2Digits =   patternAtLeast2Digits.test(password);
 
  if(patternFullpass.test(password)) console.log('Password is valid')
       else{
         if(isPassLongEnough) console.log("Password must be between 6 and 10 characters");
         if(! isOnlyletAndDigits) console.log("Password must consist only of letters and digits");
         if(! isAtLeast2Digits)console.log("Password must have at least 2 digits");
           }
}
 