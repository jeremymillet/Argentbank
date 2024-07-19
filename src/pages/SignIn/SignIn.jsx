import Header from '../../components/Header';
import headerLogo from "../../assets/argentBankLogo.png";

import './SignIn.css';

import Footer from '../../components/Footer';
import SignInForm from '../../components/SignInForm';

function SignIn() {
    return (
        <div className='page-container'>
            <Header logo={headerLogo} />
            <main className="main bg-dark">
               <SignInForm/>
            </main>
            <Footer/>
        </div>
    )
}
export default SignIn