import { Helmet } from "react-helmet-async";
import AddClass from "../../../components/Form/AddClass";

const AddPlant = () => {
  return (
    <div>
      <Helmet>
        <title>Add Class | Dashboard</title>
      </Helmet>

      {/* Form */}
      {/* <AddPlantForm /> */}
      <AddClass></AddClass>
    </div>
  );
};

export default AddPlant;
