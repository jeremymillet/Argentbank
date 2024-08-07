import { useState } from "react";
import { fetchUpdateProfile } from "../service";
import { useSelector } from "react-redux";

function useFetchUpdateProfile() {
  const [isloaging, setIsloading] = useState(false);
  const [error, setError] = useState();
  const token = useSelector((state) => state.token);
  

  async function UpdateProfile(payload) {
    setIsloading(true);
    setError(undefined);
    try {
      const response = await fetchUpdateProfile(payload, token);
      if (response.status === 200) {
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
  return { UpdateProfile, isloaging, error };
}

export default useFetchUpdateProfile;
