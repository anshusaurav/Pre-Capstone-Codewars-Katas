function sortAnimal(animal) {
  console.log(animal)
  if(animal=== null)
    return null;
  if(!animal)
    return [];
  animal.sort((a,b) =>{
    if( a.numberOfLegs-b.numberOfLegs == 0){
      return a.name.localeCompare(b.name);
    }
    return a.numberOfLegs-b.numberOfLegs;
  })
  return animal;
}