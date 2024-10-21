import toast from "react-hot-toast";

const Inventory = () => {
  function handleShowToast() {
    toast.success("Successfully toasted!");
  }
  return (
    <div>
      <button onClick={handleShowToast}>show toast</button>
    </div>
  );
};

export default Inventory;
