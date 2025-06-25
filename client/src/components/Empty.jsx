import Image from "next/image";
import React from "react";

function Empty() {
  return (
    <div className="border-conversation-border border-l w-full bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center">
      <Image src="/final_logo.gif" alt="whatsapp-gif" height={500} width={600} />
      
    </div>
  );
}

export default Empty;
