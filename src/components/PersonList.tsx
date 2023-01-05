type PersonListProps = {
  names: {
    id: number;
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <p>
        {props.names.map(({ id, first, last }) => {
          return (
            <h2 key={id}>
              {first} {last}
            </h2>
          );
        })}
      </p>
    </div>
  );
};

export default PersonList;
