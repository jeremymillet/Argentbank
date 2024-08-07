import { useState } from "react";
import { fetchPostLogin } from "../service";
import { useDispatch } from "react-redux";
import { setToken } from "../store";


function useFetchPostLogin() {
    const [isloaging, setIsloading] = useState(false);
    const [error,setError] = useState();
    const dispatch = useDispatch();
    

    async function Login(payload) {
      setIsloading(true);
      setError(undefined);
      try {
          const response = await fetchPostLogin(payload);
          if (response.status === 200) {
            dispatch(setToken(response.body.token));
            return true;
        }
        return false;
      } catch (err) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur:",
          err
        );
        setError(err);
        return false;
      } finally {
        setIsloading(false);
      }
    }
    return { Login, isloaging,error}
}


export default useFetchPostLogin;