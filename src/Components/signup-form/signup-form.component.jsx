import {useState} from 'react'
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from "../../Utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../Button/button.component";

function SignupForm(){

   function resetFormFields(){
       setSignupFormFields(defaultFormFields);
   }

    async function onSignupFormSubmitHandler(event){
        event.preventDefault();
        if(signupFormFields.password === signupFormFields.confirmPassword){
            try{
                const response = await createAuthUserWithEmailAndPassword(signupFormFields.email,signupFormFields.password)
                console.log(response);
                if(response){
                    const {user} = response;
                    user.displayName = signupFormFields.displayName;
                    await createUserDocFromAuth(user);
                    resetFormFields();
                }
            }catch (error){
               console.log('An error occurred while signing up.',error);
            }
        }
    }
    const defaultFormFields = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    };
   const [signupFormFields,setSignupFormFields] = useState(defaultFormFields);
    function onChangeHandler(event){
       const {name,value} = event.target;
       setSignupFormFields({...signupFormFields,[name]:value});
    }
   return (
       <div>
           <h1>Sign up with your email and password</h1>
           <form onSubmit={onSignupFormSubmitHandler}>
               <FormInput label={'Display Name'} required type={'text'} name={'displayName'} onChange={onChangeHandler} value={signupFormFields.displayName}/>
               <FormInput label={'Email'} required type={'email'} name={'email'} onChange={onChangeHandler} value={signupFormFields.email}/>
               <FormInput label={'Password'} required type={'password'} name={'password'} onChange={onChangeHandler} value={signupFormFields.password}/>
               <FormInput label={'Confirm Password'} required type={'password'} name={'confirmPassword'} onChange={onChangeHandler} value={signupFormFields.confirmPassword}/>
               <Button buttonType={'google'} type={'submit'}>SIGN UP</Button>
           </form>
       </div>
   )
}
export default SignupForm;