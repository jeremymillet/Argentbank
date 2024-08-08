import { useDispatch, useSelector } from 'react-redux';
import './DashboardHero.css';
import { useState } from 'react';
import { setFirstName, setLastName } from '../../store';
import useFetchUpdateProfile from '../../hook/useFetchUpdateProfile';

function DashboardHero() {
    const { UpdateProfile, isloaging: isLoadingUpdate, error: errorUpdate } = useFetchUpdateProfile();
    const lastName = useSelector((state) => state.lastName);
    const firstName = useSelector((state) => state.firstName);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch()

    function toggleForm() {
        setEdit((state)=> !state);

    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        const firstNameForm = event.target.firstName.value
        const lastNameForm = event.target.lastName.value;
        const payload = { firstName:firstNameForm, lastName:lastNameForm };
        UpdateProfile(payload).then(() => {
            toggleForm()
            dispatch(setFirstName(firstNameForm))
            dispatch(setLastName(lastNameForm))
        });
    };
    
    return (
        <div className='dashboard-hero'>
            <h1>Welcome back { !edit && <><br /> {firstName} {lastName}</>} !</h1>
            {edit ? <>
                <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <input className='form-input' name='firstName' type="text" id="firstName" defaultValue={firstName}/>
                        <input className='form-input' type="text" name='lastName' id="lastName" defaultValue={lastName}/>
                    </div>
                    <div className='btn-container'>
                        <button type='submit' className="edit-button">Save</button>
                        <button onClick={toggleForm} className="edit-button">Cancel</button>
                    </div>
                    {errorUpdate && <div>error</div>}
                    {isLoadingUpdate && <div>chargement</div>}
                </form>
            </> :
                <button onClick={toggleForm} className="edit-button">Edit Name</button>
            }
        </div>
    )
}
export default DashboardHero