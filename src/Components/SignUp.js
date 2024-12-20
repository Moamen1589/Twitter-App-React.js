import SignUPForm from "./SignUpForm"
import image from '../Images/x.png'
import '../Styles/Signin.css'
import X_icon from '../Images/x.png'
function SignUp() {
    return (
        <>
            <img className='icon w-7 mt-6 ml-6' src={X_icon} alt='/' />
            <div className='signin'>
                <SignUPForm />
                <div className='image max-tablet:hidden'>
                    < img src={image} alt='' />
                </div>
            </div>
        </>
    )
}
export default SignUp 