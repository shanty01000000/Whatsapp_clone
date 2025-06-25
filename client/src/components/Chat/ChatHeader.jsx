/*
import React, { useState } from "react";
import Avatar from "../common/Avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import ContextMenu from "../common/ContextMenu";

export default function ChatHeader() {
  const [{ userInfo, currentChatUser, onlineUsers }, dispatch] =
    useStateProvider();

  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCordinates({ x: e.pageX - 50, y: e.pageY + 20 });
    setIsContextMenuVisible(true);
  };

  const contextMenuOptions = [
    {
      name: "Exit",
      callBack: async () => {
        setIsContextMenuVisible(false);
        dispatch({ type: reducerCases.SET_EXIT_CHAT });
      },
    },
  ];

  const handleVideoCall = () => {
    dispatch({
      type: reducerCases.SET_VIDEO_CALL,
      videoCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "video",
        roomId: Date.now(),
      },
    });
  };

  const handleVoiceCall = () => {
    dispatch({
      type: reducerCases.SET_VOICE_CALL,
      voiceCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "audio",
        roomId: Date.now(),
      },
    });
  };

  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10">
      <div className="flex items-center justify-center gap-6">
        <Avatar type="sm" image={currentChatUser?.profilePicture} />
        <div className="flex flex-col">
          <span className="text-primary-strong">{currentChatUser?.name}</span>
          <span className="text-secondary text-sm">
            {onlineUsers.includes(currentChatUser.id) ? "online" : "offline"}
          </span>
        </div>
      </div>
      <div className="flex gap-6 ">
        <MdCall
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={handleVoiceCall}
        />
        <IoVideocam
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={handleVideoCall}
        />
        <BiSearchAlt2
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={() => dispatch({ type: reducerCases.SET_MESSAGES_SEARCH })}
        />
        <BsThreeDotsVertical
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={(e) => showContextMenu(e)}
          id="context-opener"
        />
        {isContextMenuVisible && (
          <ContextMenu
            options={contextMenuOptions}
            cordinates={contextMenuCordinates}
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
          />
        )}
      </div>
    </div>
  );
}
*/
/*
import React, { useState } from "react";
import Avatar from "../common/Avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import ContextMenu from "../common/ContextMenu";

export default function ChatHeader() {
  const [{ userInfo, currentChatUser, onlineUsers, blockedUsers }, dispatch] =
    useStateProvider();

  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCordinates({ x: e.pageX - 50, y: e.pageY + 20 });
    setIsContextMenuVisible(true);
  };

  const contextMenuOptions = [
    {
      name: "Block User",
      callBack: async () => {
        setIsContextMenuVisible(false);
        dispatch({ type: reducerCases.BLOCK_USER, userId: currentChatUser.id });
      },
    },
    {
      name: "Exit",
      callBack: async () => {
        setIsContextMenuVisible(false);
        dispatch({ type: reducerCases.SET_EXIT_CHAT });
      },
    },
  ];

  const handleVideoCall = () => {
    dispatch({
      type: reducerCases.SET_VIDEO_CALL,
      videoCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "video",
        roomId: Date.now(),
      },
    });
  };

  const handleVoiceCall = () => {
    dispatch({
      type: reducerCases.SET_VOICE_CALL,
      voiceCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "audio",
        roomId: Date.now(),
      },
    });
  };

  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10">
      <div className="flex items-center justify-center gap-6">
        <Avatar type="sm" image={currentChatUser?.profilePicture} />
        <div className="flex flex-col">
          <span className="text-primary-strong">{currentChatUser?.name}</span>
          <span className="text-secondary text-sm">
            {onlineUsers.includes(currentChatUser.id) ? "online" : "offline"}
          </span>
        </div>
      </div>
      <div className="flex gap-6 ">
        <MdCall
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={handleVoiceCall}
        />
        <IoVideocam
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={handleVideoCall}
        />
        <BiSearchAlt2
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={() => dispatch({ type: reducerCases.SET_MESSAGES_SEARCH })}
        />
        <BsThreeDotsVertical
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={(e) => showContextMenu(e)}
          id="context-opener"
        />
        {isContextMenuVisible && (
          <ContextMenu
            options={contextMenuOptions}
            cordinates={contextMenuCordinates}
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
          />
        )}
      </div>
    </div>
  );
}
*/
/*
import React, { useState } from "react";
import Avatar from "../common/Avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import ContextMenu from "../common/ContextMenu";

export default function ChatHeader() {
  const [{ userInfo, currentChatUser, onlineUsers, blockedUsers }, dispatch] =
    useStateProvider();

  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCordinates({ x: e.pageX - 50, y: e.pageY + 20 });
    setIsContextMenuVisible(true);
  };

  const contextMenuOptions = [
    {
      name: "Block User",
      callBack: async () => {
        setIsContextMenuVisible(false);
        dispatch({ type: reducerCases.BLOCK_USER, userId: currentChatUser.id });
      },
    },
    {
      name: "Exit",
      callBack: async () => {
        setIsContextMenuVisible(false);
        dispatch({ type: reducerCases.SET_EXIT_CHAT });
      },
    },
  ];

  const handleVideoCall = () => {
    dispatch({
      type: reducerCases.SET_VIDEO_CALL,
      videoCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "video",
        roomId: Date.now(),
      },
    });
  };

  const handleVoiceCall = () => {
    dispatch({
      type: reducerCases.SET_VOICE_CALL,
      voiceCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "audio",
        roomId: Date.now(),
      },
    });
  };

  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10">
      <div className="flex items-center justify-center gap-6">
        <Avatar type="sm" image={currentChatUser?.profilePicture} />
        <div className="flex flex-col">
          <span className="text-primary-strong">{currentChatUser?.name}</span>
          <span className="text-secondary text-sm">
            {onlineUsers.includes(currentChatUser.id) ? "online" : "offline"}
          </span>
        </div>
      </div>
      <div className="flex gap-6 ">
        <MdCall
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={handleVoiceCall}
        />
        <IoVideocam
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={handleVideoCall}
        />
        <BiSearchAlt2
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={() => dispatch({ type: reducerCases.SET_MESSAGES_SEARCH })}
        />
        <BsThreeDotsVertical
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={(e) => showContextMenu(e)}
          id="context-opener"
          style={{ zIndex: 1000 }} // Adjust the value as needed
        />
        {isContextMenuVisible && (
          <ContextMenu
            options={contextMenuOptions}
            cordinates={contextMenuCordinates}
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
            style={{ zIndex: 1001 }} // Adjust the value to be higher than the menu opener
          />
        )}
      </div>
    </div>
  );
}
*/

// import React, { useState } from "react";
// import Avatar from "../common/Avatar";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { BiSearchAlt2 } from "react-icons/bi";
// import { MdCall } from "react-icons/md";
// import { IoVideocam } from "react-icons/io5";
// import { useStateProvider } from "@/context/StateContext";
// import { reducerCases } from "@/context/constants";
// import ContextMenu from "../common/ContextMenu";

// const ChatHeader = () => {
//   const [
//     { userInfo, currentChatUser, onlineUsers, blockedUsers },
//     dispatch,
//   ] = useStateProvider();

//   const [contextMenuCordinates, setContextMenuCordinates] = useState({
//     x: 0,
//     y: 0,
//   });
//   const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

//   const showContextMenu = (e) => {
//     e.preventDefault();
//     setContextMenuCordinates({ x: e.pageX - 50, y: e.pageY + 20 });
//     setIsContextMenuVisible(true);
//   };

//   const blockUser = () => {
//     setIsContextMenuVisible(false);

//     dispatch({ type: reducerCases.BLOCK_USER, userId: currentChatUser.id });
//   };

//   const unblockUser = () => {
//     setIsContextMenuVisible(false);
//     dispatch({ type: reducerCases.UNBLOCK_USER, userId: currentChatUser.id });
//   };

//   const contextMenuOptions = [
//     {
//       name: blockedUsers.includes(currentChatUser.id) ? "Unblock User" : "Block User",
//       callBack: blockedUsers.includes(currentChatUser.id) ? unblockUser : blockUser,
//     },
//     {
//       name: "Exit",
//       callBack: () => {
//         setIsContextMenuVisible(false);
//         dispatch({ type: reducerCases.SET_EXIT_CHAT });
//       },
//     },
//   ];

//   const handleVideoCall = () => {
//     dispatch({
//       type: reducerCases.SET_VIDEO_CALL,
//       videoCall: {
//         ...currentChatUser,
//         type: "out-going",
//         callType: "video",
//         roomId: Date.now(),
//       },
//     });
//   };

//   const handleVoiceCall = () => {
//     dispatch({
//       type: reducerCases.SET_VOICE_CALL,
//       voiceCall: {
//         ...currentChatUser,
//         type: "out-going",
//         callType: "audio",
//         roomId: Date.now(),
//       },
//     });
//   };

//   return (
//     <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10">
//       <div className="flex items-center justify-center gap-6">
//         <Avatar type="sm" image={currentChatUser?.profilePicture} />
//         <div className="flex flex-col">
//           <span className="text-primary-strong">{currentChatUser?.name}</span>
//           <span className="text-secondary text-sm">
//             {onlineUsers.includes(currentChatUser.id) ? "online" : "offline"}
//           </span>
//         </div>
//       </div>
//       <div className="flex gap-6">
//         <MdCall
//           className="text-panel-header-icon cursor-pointer text-xl"
//           onClick={handleVoiceCall}
//         />
//         <IoVideocam
//           className="text-panel-header-icon cursor-pointer text-xl"
//           onClick={handleVideoCall}
//         />
//         <BiSearchAlt2
//           className="text-panel-header-icon cursor-pointer text-xl"
//           onClick={() => dispatch({ type: reducerCases.SET_MESSAGES_SEARCH })}
//         />
//         <BsThreeDotsVertical
//           className="text-panel-header-icon cursor-pointer text-xl"
//           onClick={(e) => showContextMenu(e)}
//           id="context-opener"
//         />
//         {isContextMenuVisible && (
//           <ContextMenu
//             options={contextMenuOptions}
//             cordinates={contextMenuCordinates}
//             contextMenu={isContextMenuVisible}
//             setContextMenu={setIsContextMenuVisible}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatHeader;


import React, { useState } from "react";
import Avatar from "../common/Avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import ContextMenu from "../common/ContextMenu";

const ChatHeader = () => {
  const [
    { userInfo, currentChatUser, onlineUsers },
    dispatch,
  ] = useStateProvider();

  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState([]);

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCoordinates({ x: e.pageX - 50, y: e.pageY + 20 });
    setIsContextMenuVisible(true);
  };

  // const blockUser = () => {
  //   setIsContextMenuVisible(false);
  //   setBlockedUsers([...blockedUsers, currentChatUser.id]);
  //   dispatch({ type: reducerCases.BLOCK_USER, userId: currentChatUser.id });
  // };

  // const blockUser = () => {
  //   setIsContextMenuVisible(false);
    
  //   // Dispatch the action to block the currentChatUser
  //   dispatch({ type: reducerCases.BLOCK_USER, userId: currentChatUser.id });
    
  //   // Check if the current user is also in the blocked users list of the other user
  //   const isReciprocalBlocked = blockedUsers.includes(currentChatUser.id);
  
  //   // If not, add the reciprocal blocking
  //   if (!isReciprocalBlocked) {
  //     dispatch({ type: reducerCases.BLOCK_USER, userId: currentChatUser.id });
  //   }
  // };
  


  const blockUser = () => {
    setIsContextMenuVisible(false);
    
    // Check if the current user is already blocked
    const isBlocked = blockedUsers.includes(currentChatUser.id);
  
    if (isBlocked) {
      // Unblock the user
      const updatedBlockedUsers = blockedUsers.filter(
        (userId) => userId !== currentChatUser.id
      );
      setBlockedUsers(updatedBlockedUsers);
      dispatch({ type: reducerCases.UNBLOCK_USER, userId: currentChatUser.id });
    } else {
      // Block the user
      dispatch({ type: reducerCases.BLOCK_USER, userId: currentChatUser.id });
      setBlockedUsers([...blockedUsers, currentChatUser.id]);
    }
  };
  
  const unblockUser = () => {
    setIsContextMenuVisible(false);
    
    // Check if the current user is already unblocked
    const isUnblocked = !blockedUsers.includes(currentChatUser.id);
  
    if (isUnblocked) {
      // Block the user
      dispatch({ type: reducerCases.BLOCK_USER, userId: currentChatUser.id });
      setBlockedUsers([...blockedUsers, currentChatUser.id]);
    } else {
      // Unblock the user
      const updatedBlockedUsers = blockedUsers.filter(
        (userId) => userId !== currentChatUser.id
      );
      setBlockedUsers(updatedBlockedUsers);
      dispatch({ type: reducerCases.UNBLOCK_USER, userId: currentChatUser.id });
    }
  };
  




  // const unblockUser = () => {
  //   setIsContextMenuVisible(false);
  //   const updatedBlockedUsers = blockedUsers.filter(
  //     (userId) => userId !== currentChatUser.id
  //   );
  //   setBlockedUsers(updatedBlockedUsers);
  //   dispatch({ type: reducerCases.UNBLOCK_USER, userId: currentChatUser.id });
  // };

  const contextMenuOptions = [
    {
      name: blockedUsers.includes(currentChatUser.id)
        ? "Unblock User"
        : "Block User",
      callBack: blockedUsers.includes(currentChatUser.id)
        ? unblockUser
        : blockUser,
    },
    {
      name: "Exit",
      callBack: () => {
        setIsContextMenuVisible(false);
        dispatch({ type: reducerCases.SET_EXIT_CHAT });
      },
    },
  ];

  const handleVideoCall = () => {
    dispatch({
      type: reducerCases.SET_VIDEO_CALL,
      videoCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "video",
        roomId: Date.now(),
      },
    });
  };

  const handleVoiceCall = () => {
    dispatch({
      type: reducerCases.SET_VOICE_CALL,
      voiceCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "audio",
        roomId: Date.now(),
      },
    });
  };

  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10">
      <div className="flex items-center justify-center gap-6">
        <Avatar type="sm" image={currentChatUser?.profilePicture} />
        <div className="flex flex-col">
          <span className="text-primary-strong">{currentChatUser?.name}</span>
          <span className="text-secondary text-sm">
            {onlineUsers.includes(currentChatUser.id) ? "online" : "offline"}
          </span>
        </div>
      </div>
      <div className="flex gap-6">
        <MdCall
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={handleVoiceCall}
        />
        <IoVideocam
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={handleVideoCall}
        />
        <BiSearchAlt2
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={() => dispatch({ type: reducerCases.SET_MESSAGES_SEARCH })}
        />
        <BsThreeDotsVertical
          className="text-panel-header-icon cursor-pointer text-xl"
          onClick={(e) => showContextMenu(e)}
          id="context-opener"
        />
        {isContextMenuVisible && (
          <ContextMenu
            options={contextMenuOptions}
            coordinates={contextMenuCoordinates} // corrected typo
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
          />
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
