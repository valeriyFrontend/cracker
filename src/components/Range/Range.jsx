import { useState, useEffect } from "react";

function Range({
  icon,
  className,
  noResize = false,
  fullSize,
  changeFullValue,
}) {
  const [range, setRange] = useState(0);

  useEffect(() => {
    if (noResize && fullSize <= 100) {
      setRange(100 - fullSize);
      return;
    }
    if (noResize) {
      setRange(0);
    }
  }, [fullSize]);

  const changeValue = async (e) => {
    const targetElement = e.target;

    if (noResize) {
      targetElement.disabled = true;
      return;
    }

    if (fullSize <= 99) {
      changeFullValue(targetElement.value);
      setRange(targetElement.value);
    } else {
      changeFullValue(99);
    }
  };

  return (
    <div className="constructor__item">
      <img src={icon} alt="Soybean" />
      <input
        className={`constructor__range ${className}`}
        type="range"
        min="0"
        max="100"
        value={range}
        onChange={(e) => changeValue(e)}
      />
      <span>{range}%</span>
    </div>
  );
}
export default Range;
