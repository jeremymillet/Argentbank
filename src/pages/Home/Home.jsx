import FeatureItem from "../../components/FeatureItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";
import headerLogo from "../../assets/argentBankLogo.png";

import './Home.css'

function Home() {
    return (
        <div className="page-container">
            <Header logo={headerLogo}/>
            <main>
                <Hero />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem img={iconChat} title={"You are our #1 priority"} text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."} />
                    <FeatureItem img={iconMoney} title={"More savings means higher rates"} text={"The more you save with us, the higher your interest rate will be!"} />
                    <FeatureItem img={iconSecurity} title={"Security you can trust"} text={"We use top of the line encryption to make sure your data and money is always safe."}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;