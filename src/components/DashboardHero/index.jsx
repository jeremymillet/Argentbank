import './DashboardHero.css';

function DashboardHero({name}) {
    return (
        <div className='dashboard-hero'>
            <h1>Welcome back<br />{name} !</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}
export default DashboardHero