import PropTypes from "prop-types";

const WantToCook = ({ wantToCook }) => {
  const { recipe_name, preparing_time, calories } = wantToCook;

  

  return (
      <div className="flex items-center text-base p-4">
        <div className="mx-auto">
        <table className="min-w-full bg-white ">
        <tbody>
                <tr>
                    <td className=""></td>
                    <td className="py-2 px-4 border-b">{recipe_name}</td>
                    <td className="py-2 px-4 border-b">{preparing_time}</td>
                    <td className="py-2 px-4 border-b">{calories}</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div className="justify-end ml-"> <button className="bg-green-400 py-2 px-3 rounded-full">Preparing</button></div>
      </div>
    
  );
};

WantToCook.propTypes = {
  wantToCook: PropTypes.object,
};

export default WantToCook;
