import { useState } from "react";
import { fetchLogin } from "../service";
import { useDispatch } from "react-redux";
import { setLogin } from "../store";


function useFetchLogin(payload) {
    const [isloaging, setIsloading] = useState(false);
    const [error,setError] = useState();
    const dispatch = useDispatch();
    

    async function Login() {
        setIsloading(true);
        setError(undefined);
        try {
            const response = await fetchLogin(payload);
            if (response.ok) {
                dispatch(setLogin(true));
                return true
            }
            return false;
        } catch (err) {
            console.error('Erreur lors de la récupération des données de l\'utilisateur:', err);
            setError(err);
            return false;
        } finally {
            setIsloading(false);
        }

    }
    return { Login, isloaging,error}
}


export default useFetchLogin