// import React, { useState } from "react";
// import Avatar from "../common/Avatar";
// import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
// import { useStateProvider } from "@/context/StateContext";
// import { reducerCases } from "@/context/constants";
// import { useRouter } from "next/router";
// import ContextMenu from "../common/ContextMenu";

// export default function ChatListHeader() {
//   const [{ userInfo }, dispatch] = useStateProvider();
//   const router = useRouter();
//   const [contextMenuCordinates, setContextMenuCordinates] = useState({
//     x: 0,
//     y: 0,
//   });
//   const [isContextMenuVisible, setIsContextMenuVisible] = useState(true);

//   const showContextMenu = (e) => {
     
//     e.preventDefault();
//     setContextMenuCordinates({ x: e.pageX, y: e.pageY });
//     setIsContextMenuVisible(!isContextMenuVisible);
//   };
  

//   const contextMenuOptions = [
//     {
//       name: "Logout",
//       callBack: async () => {
//         setIsContextMenuVisible(false);
//         router.push("/logout");
//       },
//     },
//   ];

//   const handleAllContactsPage = () => {
//     dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE });
//   };

//   return (
//     <div className="h-16 px-4 py-3 flex justify-between items-center">
//       <div className="cursor-pointer">
        
//         <Avatar type="sm" image={userInfo?.profileImage}  />
        
//       </div>
//       <span className="ml-2 text-white">{userInfo?.name}</span>
      
//       <div className="flex gap-6 ">
//         <BsFillChatLeftTextFill
//           className="text-panel-header-icon cursor-pointer text-xl"
//           title="New chat"
//           onClick={handleAllContactsPage}
//         />
//         <>
//           <BsThreeDotsVertical
//             className="text-panel-header-icon cursor-pointer text-xl"
//             title="Menu"
//             onClick={(e) =>showContextMenu(e)}
//             id="context-opener"
//           />
//           {isContextMenuVisible && (
//             <ContextMenu
//               options={contextMenuOptions}
//               cordinates={contextMenuCordinates}
//               contextMenu={isContextMenuVisible}
//               setContextMenu={setIsContextMenuVisible}
//             />
//           )}
//         </>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Avatar from "../common/Avatar";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { useRouter } from "next/router";
import ContextMenu from "../common/ContextMenu";

export default function ChatListHeader() {
  const [{ userInfo }, dispatch] = useStateProvider();
  const router = useRouter();
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCoordinates({ x: e.pageX, y: e.pageY });
    setIsContextMenuVisible(true);
  };

  const hideContextMenu = () => {
    setIsContextMenuVisible(false);
  };

  const handleLogout = () => {
    setIsContextMenuVisible(false); // Close the context menu
    dispatch({ type: reducerCases.SET_USER_INFO, userInfo: undefined }); // Clear user info
    router.push("/logout"); // Redirect to logout page
  };

  const contextMenuOptions = [
    {
      name: "Logout",
      callBack: handleLogout, // Call the handleLogout function when logout option is clicked
    },
  ];

  const handleAllContactsPage = () => {
    dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE });
  };

  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center">
      <div className="cursor-pointer">
        <Avatar type="sm" image={userInfo?.profileImage} />
      </div>
      <span className="ml-2 text-white">{userInfo?.name}</span>
      <div className="flex gap-6 relative">
        <BsFillChatLeftTextFill
          className="text-panel-header-icon cursor-pointer text-xl"
          title="New chat"
          onClick={handleAllContactsPage}
        />
        <div>
          <BsThreeDotsVertical
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Menu"
            onClick={showContextMenu}
            id="context-opener"
          />
          {isContextMenuVisible && (
            <ContextMenu
              options={contextMenuOptions}
              coordinates={contextMenuCoordinates}
              setVisible={setIsContextMenuVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
}

