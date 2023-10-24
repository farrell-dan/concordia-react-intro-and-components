import DaffyDuck from  "./Daffy_Duck.svg.png"

const Images = () => {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img src="/assests/Bugs_Bunny.svg.png" alt="Bugs Bunny" />
        <img src={DaffyDuck} alt="Daffy Duck" />
        <img src="/assests/ElmerFudd.png" alt="Elmer Fudd" />
      </div>
    );
}

export default Images;