import { createThirdwebClient } from "thirdweb";

const clientID = process.env.CLIENT_ID;
if (!clientID) {
    throw new Error("CLIENT_ID is not set");}

export const client = createThirdwebClient({
    clientId: clientID,
});