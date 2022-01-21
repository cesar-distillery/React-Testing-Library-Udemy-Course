import './App.css';
import Cards from './components/Cards/Cards';
import Filter from './components/Filter/Filter';
import Pets from './components/Pets/Pets';
import cats from './mocks/cats.json';


const App = () => {
  return (
    <Pets />
  )
};

// function App() {
//   return (
//     <div className="App p-5 flex">
//       <div className='p-10 -bg-green-600'>
//         <Filter />
//       </div>
//       <div className="py-8 px-8 -bg-slate-600">
//         <Cards cats={cats} />
//       </div>
//     </div>
//   );
// }

export default App;
