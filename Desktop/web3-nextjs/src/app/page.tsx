
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { darkTheme } from "thirdweb/react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen 
    p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ConnectButton client={client} theme={darkTheme({
        colors: { modalBg: "hsl(62, 47%, 43%)" },
      })}
      connectModal={{ size: "wide" }}
       connectButton={{ label: "Connect Wallet"}}/>
    </div>
  );
}
