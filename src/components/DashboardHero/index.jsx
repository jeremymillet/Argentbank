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
        if (edit === false) {
            setEdit(true)
        }
        else if (edit === true) {
            setEdit(false)
        }
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
            {edit ? <div>
                <h1>Welcome back</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <input className='form-input' name='firstName' type="text" id="firstName" placeholder={firstName}/>
                        <input className='form-input' type="text" name='lastName' id="lastName" placeholder={lastName}/>
                    </div>
                    <div className='btn-container'>
                        <button type='submit' className="edit-button">Save</button>
                        <button onClick={toggleForm} className="edit-button">Cancel</button>
                    </div>
                    {errorUpdate && <div>error</div>}
                    {isLoadingUpdate && <div>chargement</div>}
                </form>
            </div> :
            <div>
                <h1>Welcome back<br /> {firstName} {lastName} !</h1>
                <button onClick={toggleForm} className="edit-button">Edit Name</button>
            </div>}
        </div>
    )
}
export default DashboardHero