import { PetCard } from "../../components/Pet/PetCard";
import { useFetchPetsQuery } from "../../modules/volunteers/volunteersApi";

export default function HelpAnimalsPage() {
  const { data: pets, isLoading } = useFetchPetsQuery({
    page: 1,
    pageSize: 10,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Help animals!</h1>
      <div>
        <ul>
          {pets?.map((pet) => (
            <li key={pet.id}>
              <PetCard pet={pet} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
