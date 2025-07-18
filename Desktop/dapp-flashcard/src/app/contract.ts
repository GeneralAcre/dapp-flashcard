import { ethers } from "ethers";
import FlashCardNFTQuizABI from "./contracts/flashcardABI.json";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const CONTRACT_ADDRESS = "0x9695E192B5c15d3F922909f6Edaa1366a5a6EAc5";

let provider: ethers.providers.Web3Provider | null = null;
let signer: ethers.Signer | null = null;
let contract: ethers.Contract | null = null;

export function getContract() {
  if (!window.ethereum) throw new Error("Please install MetaMask");

  if (!provider) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, FlashCardNFTQuizABI, signer);
  }
  return contract;
}
