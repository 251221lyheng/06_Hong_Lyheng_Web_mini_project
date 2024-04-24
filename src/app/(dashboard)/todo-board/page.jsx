
import React from "react";

const TodoBoard = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div>
              <h3 className="text-lg"> TODO </h3>
              <hr className="border-yellow-600 rounded-md border-2 " />
              
            </div>


          </div>

          <div>
            <div>
              <h3 className="text-lg"> WORKING ON  </h3>
              <hr className="border-blue-600 rounded-md border-2 " />
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-lg"> CHECKING  </h3>
              <hr className="border-orange-600 rounded-md border-2 " />
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-lg"> COMPLETED  </h3>
              <hr className="border-green-600 rounded-md border-2 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoBoard;
