import { Pet } from "../../modules/volunteers/PetsSlice";

type Props = {
  pet: Pet;
};
export function PetCard({ pet }: Props) {
  return (
    <>
      <h1>{pet.name}</h1>
      <p>{pet.id}</p>
    </>
  );
}
