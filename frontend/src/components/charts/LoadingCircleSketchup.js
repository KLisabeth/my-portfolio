import React from "react";
import {PieChart} from "react-minimal-pie-chart";

function LoadingCircleSketchup() {
  return (
    <div>
      <PieChart
        data={[{ value: 1, key: 1, color: '#4bd6e9'}]}
        reveal={30}
        lineWidth={15}
        background="#3c3c3c"
        lengthAngle={270}
        rounded
        animate
        radius={30}
      />
    </div>
  );
}

export default LoadingCircleSketchup;
