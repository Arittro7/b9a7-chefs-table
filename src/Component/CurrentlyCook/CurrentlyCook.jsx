import PropTypes from "prop-types";


const CurrentlyCook = ({nowCooking}) => {

  



  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-4">Currently Cook: {nowCooking.length}</h2>
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
    </div>
  );
};

CurrentlyCook.propTypes ={
  nowCooking: PropTypes.object
}

export default CurrentlyCook;