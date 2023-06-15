import useBillboard from "@/hooks/useBilboard";
import React from "react";

const BillBoard = () => {
  const { data } = useBillboard();
  return <div>BillBoard</div>;
};

export default BillBoard;
