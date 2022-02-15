import { forwardRef } from "react";

const inputForward = forwardRef((props, ref) => {
  return (
    <div>
      name: <input ref={ref} />
    </div>
  );
})

export default inputForward;