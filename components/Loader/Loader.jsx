import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  return (
    <>
      <div
        className={`flex items-center justify-center`}
        style={{
          position: "absolute",
          zIndex: 99999,
          height: "100%",
          width: "100%",
          background: "rgba(0, 0, 0, 1)",
        }}
      >
        <BounceLoader color={"#eee"} size={60} />
      </div>
    </>
  );
};
export default Loader;
