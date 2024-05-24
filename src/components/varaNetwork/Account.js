import React from "react";
import Identicon from "@polkadot/react-identicon";
import { useStore } from "./state";

export function Account(props) {
  const { account } = useStore();
  return (
    <>
      <div className="d-flex flex-row gap-2 align-items-center">
        <Identicon value={account.address} size={24} theme={"polkadot"} />
        <p className="fw-semibold m-0">{account.meta.name}</p>
      </div>
    </>
  );
}
