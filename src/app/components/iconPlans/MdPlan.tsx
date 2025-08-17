import React from "react";
interface MdPlanProps {
  className?: string;
  width?: number;
  height?: number;
  marginTop1?: number;
  marginTop2?: number;
  color?: string;
}
const MdPlan: React.FC<MdPlanProps> = ({
  width = 35,
  height = 35,
  marginTop1 = 0,
  marginTop2 = 30,
  color = "#ffffff",
}) => {
  return (
    <div className="flex gap-1">
      {/* Primeiro SVG - Ícone da casa */}
      <div className="wixui-vector-image" style={{ marginTop: marginTop1 }}>
        <div data-testid="svgRoot" className="VDJedC l4CAhn">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="20 20 160 160"
            viewBox="20 20 160 160"
            height={height}
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            aria-label=""
          >
            <g>
              <path
                d="M54.286 119.048a3.81 3.81 0 0 1-3.81-3.81V84.762a3.81 3.81 0 1 1 7.62 0v30.476a3.81 3.81 0 0 1-3.81 3.81z"
                fill={color}
                data-color="1"
              ></path>
              <path
                d="M115.238 149.524H84.762a3.81 3.81 0 0 1-3.81-3.81v-26.667H54.286a3.81 3.81 0 0 1-3.81-3.81V84.762a3.81 3.81 0 0 1 3.81-3.81h26.667V54.286a3.81 3.81 0 0 1 3.81-3.81h30.476a3.81 3.81 0 0 1 3.81 3.81v26.667h26.667a3.81 3.81 0 0 1 3.81 3.81v30.476a3.81 3.81 0 0 1-3.81 3.81h-26.667v26.667a3.811 3.811 0 0 1-3.811 3.808zm-26.667-7.619h22.857v-26.667a3.81 3.81 0 0 1 3.81-3.81h26.667V88.571h-26.667a3.81 3.81 0 0 1-3.81-3.81V58.095H88.571v26.667a3.81 3.81 0 0 1-3.81 3.81H58.095v22.857h26.667a3.81 3.81 0 0 1 3.81 3.81v26.666z"
                fill={color}
                data-color="1"
              ></path>
              <path
                d="M166.032 180H33.968C26.266 180 20 173.734 20 166.032V33.968C20 26.266 26.266 20 33.968 20h132.064C173.734 20 180 26.266 180 33.968v132.064c0 7.702-6.266 13.968-13.968 13.968zM33.968 27.619a6.356 6.356 0 0 0-6.349 6.349v132.064a6.356 6.356 0 0 0 6.349 6.349h132.064a6.356 6.356 0 0 0 6.349-6.349V33.968a6.356 6.356 0 0 0-6.349-6.349H33.968z"
                fill={color}
                data-color="1"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      {/* Segundo SVG - Ícone abstrato */}
      <div className="wixui-vector-image" style={{ marginTop: marginTop2 }}>
        <div data-testid="svgRoot" className="VDJedC l4CAhn">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="34.5 28 130.999 144"
            viewBox="34.5 28 130.999 144"
            height={height}
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            aria-label=""
          >
            <defs>
              <style>{`#comp-m8dcsl3k svg [data-color="1"] {fill: #1E324A;}`}</style>
            </defs>
            <g>
              <path
                d="M197.2 183.3H180V73.8c0-4.9-4-8.9-9-8.9h-41.5v-45c0-4.9-4-8.9-9-8.9H53.6c-4.9 0-9 4-9 8.9v19H28.9c-4.9 0-9 4-9 8.9v135.4H2.8c-1.6 0-2.8 1.3-2.8 2.8 0 1.6 1.3 2.8 2.8 2.8h194.4c1.6 0 2.8-1.3 2.8-2.8 0-1.4-1.3-2.7-2.8-2.7zm-136.8 0H46.9v-24.9h13.5v24.9zm21.2 0H66v-27.8c0-1.6-1.3-2.8-2.8-2.8H44c-1.6 0-2.8 1.3-2.8 2.8v27.8H25.7V47.9c0-1.8 1.5-3.3 3.3-3.3h49.4c1.8 0 3.3 1.5 3.3 3.3v135.4zM78.3 38.9h-28v-19c0-1.8 1.5-3.3 3.3-3.3h66.9c1.8 0 3.3 1.5 3.3 3.3v21.8h-39c-1.6-1.7-4-2.8-6.5-2.8zm45.5 8.5v16.1H87.2V47.4h36.6zm-17 135.9H87.2v-70.6h19.6v70.6zm0-76.2H87.2V91h19.6v16.1zm0-33.3v11.5H87.2V69.2h20.9c-.8 1.3-1.3 2.9-1.3 4.6zm67.5 109.5h-61.8V73.8c0-1.8 1.5-3.3 3.3-3.3h55.3c1.8 0 3.3 1.5 3.3 3.3v109.5z"
                fill={color}
              ></path>
              <path
                d="M59.1 55.5H48.2c-.9 0-1.6.7-1.6 1.6V68c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6V57.2c0-.9-.7-1.7-1.6-1.7z"
                fill={color}
              ></path>
              <path
                d="M59.1 78.7H48.2c-.9 0-1.6.7-1.6 1.6v10.9c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6V80.3c0-.9-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
              <path
                d="M59.1 101.8H48.2c-.9 0-1.6.7-1.6 1.6v10.9c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6v-10.9c0-.8-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
              <path
                d="M59.1 125H48.2c-.9 0-1.6.7-1.6 1.6v10.9c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6v-10.9c0-.9-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
              <path
                d="M160.1 83.5h-10.9c-.9 0-1.6.7-1.6 1.6V96c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6V85.1c.1-.9-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
              <path
                d="M137.6 83.5h-10.9c-.9 0-1.6.7-1.6 1.6V96c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6V85.1c0-.9-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
              <path
                d="M160.1 107.6h-10.9c-.9 0-1.6.7-1.6 1.6v10.9c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6v-10.9c.1-.8-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
              <path
                d="M137.6 107.6h-10.9c-.9 0-1.6.7-1.6 1.6v10.9c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6v-10.9c0-.8-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
              <path
                d="M160.1 132.5h-10.9c-.9 0-1.6.7-1.6 1.6V145c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6v-10.9c.1-.9-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
              <path
                d="M137.6 132.5h-10.9c-.9 0-1.6.7-1.6 1.6V145c0 .9.7 1.6 1.6 1.6h10.9c.9 0 1.6-.7 1.6-1.6v-10.9c0-.9-.7-1.6-1.6-1.6z"
                fill={color}
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MdPlan;
