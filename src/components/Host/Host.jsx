const Host = ({ hostName, hostPic }) => {
  return (
    <div className="host">
      <p className="host__name">{hostName.split(" ").join("\n")}</p>
      <img src={hostPic} alt="Host" className="host__picture" />
    </div>
  );
};

export default Host;
