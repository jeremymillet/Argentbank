import Header from '../../components/Header/index.jsx'
import headerLogo from "../../assets/argentBankLogo.png";
import DashboardHero from '../../components/DashboardHero/index.jsx';
import AccountCard from '../../components/AccountCard/index.jsx';



import './Dashboard.css';


function Dashboard() {
    
    return (
        
        <div className="page-container">
            <Header logo={headerLogo} />
            <main className="main bg-dark">
                <DashboardHero name={"test"} />
                <AccountCard title={"test"} amount={"test"} description={"test"} />
            </main>
        </div>
    )
}

export default Dashboard