import Navbar from './component/Navbar.jsx'
import GenderCard from './component/GenderCard.jsx'

function App() {
  const genders = [
    {
      id: 1,
      person: 'Male',
      age: 17
    },
    {
      id: 2,
      person: 'Famale',
      age: 21
    },
    {
      id: 3,
      person: 'Famale',
      age: 15
    },
    {
      id: 4,
      person: 'Male',
      age: 20
    },
  ]

  const genderCardList = genders.map(
    (gender) => <GenderCard key={gender.id} person={gender.person} age={gender.age}/>
    );
  console.log(genderCardList);
  return (
    <>
     <Navbar />
     
     { genderCardList }
    </>
  )
}

export default App
