function Card(props) {
  const userData = props.user;

  // conditional bg color based on user's age
  const bgColor = () => {
    const age = props.user.dob.age;
    if (age < 31) {
      return "lightcoral";
    }
    if (age >= 31 && age < 56) {
      return "lightgreen";
    }
    if (age >= 56) {
      return "skyblue";
    }
    return "";
  };

  return (
    <div style={{ width: "350px", backgroundColor: bgColor() }} className="border-default border-black p-3 rounded-md shadow-lg h-fit">
      <div className="flex flex-col gap-y-4 text-center">
        <div className="flex flex-row laptopM:flex-col gap-x-4 gap-y-4 items-center justify-evenly">
          <img alt="user-pict" src={userData.picture.thumbnail} className=" w-20 h-20" />
          <div className="flex flex-col gap-y-3">
            <p>
              Name: {userData.name.title} {userData.name.first} {userData.name.last}
            </p>
            <p>Age: {userData.dob.age}</p>
            <p>
              City: {userData.location.city}, {userData.location.state}, {userData.location.postcode}
            </p>
          </div>
        </div>
        <p className="font-bold">Email: {userData.email}</p>
      </div>
    </div>
  );
}

export default Card;
