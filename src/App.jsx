import CardList from "./components/CardList";

const App = () => {
  return (
    <div className='flex flex-col m-8'>
      <h1 className='text-4xl font-bold text-green-800 flex justify-center'>Events</h1>
      <CardList />
    </div>
  );
};

export default App;
