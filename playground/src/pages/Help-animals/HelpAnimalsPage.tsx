import { useEffect, useState } from "react";
import { PetCard } from "../../components/Pet/PetCard";
import { useRootDispatch, useRootSelector } from "../../store/store";
import { axiosInstance } from "../../services/axiosInstance";
import { setPets } from "../../modules/volunteers/PetsSlice";
import {
  setPetsIsPending,
  setPetsLoadingIsFailed,
  setPetsLoadingIsSucceded,
} from "../../modules/volunteers/PetsSlice";

export default function HelpAnimalsPage() {
  const [isError, setIsError] = useState(false);

  const pets = useRootSelector((state) => state.pets.pets);
  const isLoading = useRootSelector((state) => state.pets.isPetsLoading);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(setPetsIsPending());

    axiosInstance
      .get("Species?Page=1&PageSize=10")
      .then((res) => res.data)
      .then((data) => dispatch(setPets(data.result.items)))
      .catch((error) => {
        console.log(error);
        dispatch(setPetsLoadingIsFailed());
      });

    dispatch(setPetsLoadingIsSucceded());
  }, [dispatch]);

  if (isLoading == "pending") {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Help animals!</h1>
      <div>
        <ul>
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </ul>
      </div>
    </>
  );
}
