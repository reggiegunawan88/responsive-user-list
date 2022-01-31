function Card(props) {
  const userData = props.user;
  return (
    <div style={{ width: "350px" }} className="border-default border-black p-3">
      <div className="flex flex-col gap-y-4 text-center">
        <div className="flex flex-row laptopM:flex-col gap-x-4 items-center">
          <img alt="user-pict" src={userData.picture.thumbnail} className=" w-20 h-20" />
          <div className="flex flex-col gap-y-3">
            <p>
              {userData.name.title} {userData.name.first} {userData.name.last}
            </p>
            <p>Age: {userData.dob.age}</p>
            <p>
              {userData.location.city}, {userData.location.state}, {userData.location.postcode}
            </p>
          </div>
        </div>
        <p>{userData.email}</p>
      </div>
    </div>
  );
}

export default Card;
