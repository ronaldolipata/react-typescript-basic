type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  const { first, last } = props.name;

  return (
    <div>
      <p>
        {first} {last}
      </p>
    </div>
  );
};

export default Person;
