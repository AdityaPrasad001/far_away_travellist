import React from "react";

const Stats = ({ items }) => {
  if (!items)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentagePacked = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? `You got everything! Ready to go ✈️`
          : `👜 You have ${totalItems} items on your lilst, and you already packed ${packedItems} (${percentagePacked}%)`}
      </em>
    </footer>
  );
};

export default Stats;
