import WantToCook from "../WantToCook/WantToCook";


const Cooking = () => {

  // const{recipe_name, preparing_time, calories} = cook

  return (
    <div className="md: w-1/3"> 
      <h2>Cooking Info will displayed here</h2>
      <h2>Added Cook: </h2>
      <p>Name:</p>
      <div>
        <h2 className="text-2xl p-6 text-center">Want to Cook: </h2>
       
      </div>
        {/* table start */}
        <div className="overflow-x-auto">
    <table className="table table-xs table-pin-rows table-pin-cols">
      <thead>
        <tr>
          <th></th> 
          <td>Name</td> 
          <td>Time</td> 
          <td>Calories</td>
          <th></th> 
        </tr>
      </thead> 
      <tbody>
        <tr>
          <th>1</th> 
          <td>recipe_name</td> 
          <td>preparing_time</td> 
          <td>calories</td> 
        </tr>
      </tbody> 
    </table>
  </div>
      {/* table end */}
    </div>
  );
};

export default Cooking;