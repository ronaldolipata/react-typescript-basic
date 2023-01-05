import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  const personName = {
    first: 'Ronaldo',
    last: 'Lipata',
  };

  const nameList = [
    {
      id: 1,
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      id: 2,
      first: 'Clark',
      last: 'Kent',
    },
    {
      id: 3,
      first: 'Juan',
      last: 'Dela Cruz',
    },
  ];

  return (
    <div className='App'>
      <Status status='success' />
      <Greet name='Ron' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicarpio!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <Input
        value=''
        handleChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

export default App;
