import React from "react";
import classnames from 'classnames';

export default function TimeButtons(AppProps: { select: any; onSelect: any }) {
  const lengths = ["long_term", "medium_term", "short_term"];
  const labels: { [key: string]: string } = {
    long_term: "All time",
    medium_term: "Last 6 months",
    short_term: "Last month",
  };

  return (
    <div className="timeButtonSelector">
      {lengths.map((length) => (
        <button
          onClick={() => AppProps.onSelect(length)}
          className={classnames("time-option", {
            "time--active": length === AppProps.select,
          })}
        >
          {labels[length]}
        </button>
      ))}
    </div>
  );
}
