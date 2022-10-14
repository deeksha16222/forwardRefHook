import React, { forwardRef } from "react";

function User(props, custom) {
  return (
    <div>
      <input type="text" ref={custom} />
    </div>
  );
}

export default forwardRef(User);
