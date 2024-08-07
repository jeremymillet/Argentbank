import Header from '../../components/Header/index.jsx'
import headerLogo from "../../assets/argentBankLogo.png";
import DashboardHero from '../../components/DashboardHero/index.jsx';
import AccountCard from '../../components/AccountCard/index.jsx';
import { useSelector } from 'react-redux';
import './Dashboard.css';
import { useEffect } from 'react';
import Footer from '../../components/Footer/index.jsx';
import data from '../../data/data.json'
import useFetchPostProfile from '../../hook/useFetchPostProfile.js';


function Dashboard() {
    const { Profile, isloaging: isLoadingProfile, error: errorProfile } = useFetchPostProfile();
    const token = useSelector((state) => state.token);
    useEffect(() => {
        if (token) {
            Profile(token);
        }
    }, []);

    if (errorProfile) {
        return <p>erreur call APi</p>
    }
    if (isLoadingProfile) {
        return <p>chargement</p>
    }
    
    return (
        <div className="page-container">
            <Header logo={headerLogo} />
            <main className="main bg-dark">
                <DashboardHero />
                {data.map((acc,index) => {
                    return (
                        <AccountCard key={index} title={acc.title} amount={acc.amount} description={acc.balance} />
                    )
                    
                })}
            </main>
            <Footer />
        </div>
    )
}

export default Dashboard