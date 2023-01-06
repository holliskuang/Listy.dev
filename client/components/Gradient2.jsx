export default function Gradient2() {

  const divStyle = {
    gradient_canvas: {
      width: "100%",
      height: "100%",
      "-gradientColor1": "#c3e4ff",
      "-gradientColor2": "#6ec3f4",
      "-gradientColor3": "#eae2ff",
      "-gradientColor4": "#b9beff",
    },
  };

  return (
    <canvas
      id="gradient-canvas"
      data-transition-in
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "-1",
        ...divStyle,
      }}
    />
  );
}
