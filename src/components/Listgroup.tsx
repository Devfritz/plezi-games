interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  return (
    <>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.length === 0 && <p>VILLE NOT FOUND</p>}
        {items.map((ville, k) => {
          return (
            <li key={k} className="list-group-item">
              {ville}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
