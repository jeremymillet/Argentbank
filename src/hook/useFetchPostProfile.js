import { useState } from "react";
import { fetchPostProfile} from "../service";
import { useDispatch } from "react-redux";
import { setFirstName,setLastName} from "../store";

function useFetchPostProfile() {
  const [isloaging, setIsloading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  

  async function Profile(token) {
    setIsloading(true);
    setError(undefined);
    try {
      const response = await fetchPostProfile(token);
      dispatch(setFirstName(response.body.firstName));
      dispatch(setLastName(response.body.lastName));
      return true;
      
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
  return { Profile, isloaging, error };
}

export default useFetchPostProfile;
