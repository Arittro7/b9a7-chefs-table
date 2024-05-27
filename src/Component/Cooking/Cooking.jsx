import WantToCook from "../WantToCook/WantToCook";
import PropTypes from "prop-types";

const Cooking = ({ cook }) => {
  // const{recipe_name, preparing_time, calories} = cook

  return (
    <div className="md: w-1/3 max-w-[514px] border-2 border-red-400">
      <div>
        <h2 className="text-2xl p-6 text-center">Want to Cook: </h2>
        {/* table heading */}
        {/* <div className="flex gap-16 ml-16">
        <h2>Name</h2>
        <h2>Time</h2>
        <h2>Calories</h2>
      </div> */}
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
          <WantToCook key={idx} wantToCook={wantToCook}></WantToCook>
        ))}
      </div>
    </div>
  );
};

Cooking.propTypes = {
  cook: PropTypes.object,
};

export default Cooking;
