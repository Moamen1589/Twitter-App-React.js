import '../Styles/Signin.css'
import image from '../Images/x.png'
import SignInForm from './SignInForm';
import X_icon from '../Images/x.png'
function SignIn() {
    return (
        <>
            <img className='icon w-7 mt-6 ml-6' src={X_icon} alt='/' />
            <div className='signin'>
                <SignInForm />
                <div className='image max-tablet:hidden'>
                    < img src={image} alt='' />
                </div>
            </div>
        </>
    )
}

export default SignIn; 