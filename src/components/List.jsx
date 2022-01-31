import Card from "components/Card";

function List(props) {
  return (
    <div className="grid grid-cols-1 laptopM:grid-flow-row gap-x-4 gap-y-6 self-center">
      {props.userData.map((user, idx) => (
        <Card key={idx} user={user} />
      ))}
    </div>
  );
}

export default List;
