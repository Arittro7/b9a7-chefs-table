import { useState } from "react";
import CurrentlyCook from "../CurrentlyCook/CurrentlyCook";
import WantToCook from "../WantToCook/WantToCook";
import PropTypes from "prop-types";

const Cooking = ({ cook }) => {

  const[nowCooking, setNowCooking] = useState([]);

  const handleAddToPrepare = recipe => {
    // console.log(recipe);
    const newNowCooking = [...nowCooking, recipe]
    setNowCooking(newNowCooking)
  }

  return (
    <div className="md: w-1/3 max-w-[514px] border-2 border-red-400">
      <div>
        <h2 className="text-2xl font-bold p-6 text-center">
          Want to Cook: {cook.length}
        </h2>
        <div className="max-w-md mx-auto py-2 px-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Time</th>
                <th className="text-left">Calories</th>
              </tr>
            </thead>
          </table>
        </div>
        {cook.map((wantToCook, idx) => (
          <WantToCook key={idx} handleAddToPrepare={handleAddToPrepare} wantToCook={wantToCook}></WantToCook>
        ))}
      </div>
      <div>
        <CurrentlyCook nowCooking={nowCooking}></CurrentlyCook>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  cook: PropTypes.object,
};

export default Cooking;
