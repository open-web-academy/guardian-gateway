import { useAccount, useApi } from "@gear-js/react-hooks";

export const VaraAccounts = () => {
    const varaAcc = useAccount()
    return varaAcc
}