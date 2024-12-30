import { useEffect, useState } from "react";
import { PetCard } from "../../components/Pet/PetCard";
import { useRootDispatch, useRootSelector } from "../../store/store";
import { fetchPets } from "../../modules/volunteers/PetsSlice";

export default function HelpAnimalsPage() {
  const [isError, setIsError] = useState(false);

  const pets = useRootSelector((state) => state.pets.pets);
  const isLoading = useRootSelector((state) => state.pets.isPetsLoading);
  const dispatch = useRootDispatch();

  useEffect(() => {
    if (isLoading === "idle" || isLoading === "failed") {
      dispatch(fetchPets());
    }
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
