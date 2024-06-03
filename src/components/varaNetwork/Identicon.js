import React from "react";
import Identicon from "@polkadot/react-identicon";
import { useStore } from "./state";

export function IdenticonVara(props) {
  const { account } = useStore();
  const { size } = props;
  return (
    <>
      <div className="d-flex flex-row gap-2 align-items-center">
        <Identicon value={account.address} size={size} theme={"polkadot"} />
      </div>
    </>
  );
}