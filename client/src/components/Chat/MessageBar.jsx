// import React, { useEffect, useRef, useState } from "react";
// import { BsEmojiSmile } from "react-icons/bs";
// import { ImAttachment } from "react-icons/im";
// import { FaMicrophone } from "react-icons/fa";
// import { MdSend } from "react-icons/md";
// import { useStateProvider } from "@/context/StateContext";
// import { reducerCases } from "@/context/constants";
// import axios from "axios";
// import { ADD_IMAGE_MESSAGE_ROUTE, ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
// import EmojiPicker from "emoji-picker-react";
// import dynamic from "next/dynamic";
// import PhotoPicker from "../common/PhotoPicker";

// const CaptureAudio = dynamic(() => import("@/components/common/CaptureAudio"), {
//   ssr: false,
// });

// export default function MessageBar() {
//   const [message, setMessage] = useState("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [showAudioRecorder, setShowAudioRecorder] = useState(false);
//   const [grabImage, setGrabImage] = useState(false);

//   const photoPickerOnChange = async (e) => {
//     const file = e.target.files[0];

//     try {
//       const formData = new FormData();
//       formData.append("image", file);
//       const response = await axios.post(ADD_IMAGE_MESSAGE_ROUTE, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         params: {
//           from: userInfo.id,
//           to: currentChatUser.id,
//         },
//       });
//       if (response.status === 201) {
//         socket.current.emit("send-msg", {
//           to: currentChatUser.id,
//           from: userInfo.id,
//           message: response.data.message,
//         });
//         dispatch({
//           type: reducerCases.ADD_MESSAGE,
//           newMessage: {
//             ...response.data.message,
//           },
//           fromSelf: true,
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const [{ socket, currentChatUser, userInfo }, dispatch] = useStateProvider();
//   const sendMessage = async () => {
//     try {
//       setMessage("");
//       const { data } = await axios.post(ADD_MESSAGE_ROUTE, {
//         to: currentChatUser.id,
//         from: userInfo.id,
//         message,
//       });
//       socket.current.emit("send-msg", {
//         to: currentChatUser.id,
//         from: userInfo.id,
//         message: data.message,
//       });
//       dispatch({
//         type: reducerCases.ADD_MESSAGE,
//         newMessage: {
//           ...data.message,
//         },
//         fromSelf: true,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleEmojiModal = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   const handleEmojiClick = (emoji, event) => {
//     setMessage((prevMessage) => (prevMessage += emoji.emoji));
//   };

//   const emojiPickerRef = useRef(null); // Create a ref for the emoji picker element

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (event.target.id !== "emoji-open") {
//         if (
//           emojiPickerRef.current && // Check if the emoji picker ref exists
//           !emojiPickerRef.current.contains(event.target) // Check if the click is outside of the emoji picker
//         ) {
//           setShowEmojiPicker(false); // Close the emoji picker
//         }
//       }
//     };

//     document.addEventListener("click", handleOutsideClick); // Add the event listener

//     return () => {
//       document.removeEventListener("click", handleOutsideClick); // Clean up the event listener on component unmount
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   useEffect(() => {
//     setMessage("");
//   }, [currentChatUser]);

//   useEffect(() => {
//     if (grabImage) {
//       const data = document.getElementById("photo-picker");
//       data.click();
//       document.body.onfocus = (e) => {
//         setTimeout(() => {
//           setGrabImage(false);
//         }, 1000);
//       };
//     }
//   }, [grabImage]);

//   return (
//     <div className="bg-panel-header-background  h-20 px-4 flex items-center gap-6  relative">
//       {!showAudioRecorder && (
//         <>
//           <div className="flex gap-6">
//             <BsEmojiSmile
//               className="text-panel-header-icon cursor-pointer text-xl"
//               title="Emoji"
//               onClick={handleEmojiModal}
//               id="emoji-open"
//             />
//             {showEmojiPicker && (
//               <div
//                 className="absolute bottom-24 left-16 z-40"
//                 ref={emojiPickerRef}
//               >
//                 <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
//               </div>
//             )}
//             <ImAttachment
//               className="text-panel-header-icon cursor-pointer text-xl"
//               title="Attach"
//               onClick={() => setGrabImage(true)}
//             />
//           </div>
//           <div className="w-full rounded-lg h-10 flex items-center">
//             <input
//               type="text"
//               placeholder="Type a message"
//               className="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg pl-5 pr-5 py-4 w-full"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <div className=" w-10 flex items-center justify-center">
//             {message.length ? (
//               <button onClick={sendMessage}>
//                 <MdSend
//                   className="text-panel-header-icon cursor-pointer text-xl"
//                   title="Send"
//                 />
//               </button>
//             ) : (
//               <FaMicrophone
//                 className="text-panel-header-icon cursor-pointer text-xl"
//                 title="Record"
//                 onClick={() => setShowAudioRecorder(true)}
//               />
//             )}
//           </div>
//         </>
//       )}
//       {showAudioRecorder && <CaptureAudio hide={setShowAudioRecorder} />}
//       {grabImage && <PhotoPicker onChange={photoPickerOnChange} />}
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import { BsEmojiSmile } from "react-icons/bs";
// import { ImAttachment } from "react-icons/im";
// import { FaMicrophone } from "react-icons/fa";
// import { MdSend } from "react-icons/md";
// import { useStateProvider } from "@/context/StateContext";
// import { reducerCases } from "@/context/constants";
// import axios from "axios";
// import { ADD_IMAGE_MESSAGE_ROUTE, ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
// import EmojiPicker from "emoji-picker-react";
// import dynamic from "next/dynamic";
// import PhotoPicker from "../common/PhotoPicker";

// const CaptureAudio = dynamic(() => import("@/components/common/CaptureAudio"), {
//   ssr: false,
// });

// export default function MessageBar() {
//   const [message, setMessage] = useState("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [showAudioRecorder, setShowAudioRecorder] = useState(false);
//   const [grabImage, setGrabImage] = useState(false);

//   const [{ socket, currentChatUser, userInfo, blockedUsers }, dispatch] = useStateProvider();

//   const isBlocked = currentChatUser && blockedUsers.includes(currentChatUser.id);

//   const photoPickerOnChange = async (e) => {
//     if (isBlocked) return; // Don't allow interaction if user is blocked

//     const file = e.target.files[0];

//     try {
//       const formData = new FormData();
//       formData.append("image", file);
//       const response = await axios.post(ADD_IMAGE_MESSAGE_ROUTE, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         params: {
//           from: userInfo.id,
//           to: currentChatUser.id,
//         },
//       });
//       if (response.status === 201) {
//         socket.current.emit("send-msg", {
//           to: currentChatUser.id,
//           from: userInfo.id,
//           message: response.data.message,
//         });
//         dispatch({
//           type: reducerCases.ADD_MESSAGE,
//           newMessage: {
//             ...response.data.message,
//           },
//           fromSelf: true,
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const sendMessage = async () => {
//     if (isBlocked) return; // Don't allow interaction if user is blocked

//     try {
//       setMessage("");
//       const { data } = await axios.post(ADD_MESSAGE_ROUTE, {
//         to: currentChatUser.id,
//         from: userInfo.id,
//         message,
//       });
//       socket.current.emit("send-msg", {
//         to: currentChatUser.id,
//         from: userInfo.id,
//         message: data.message,
//       });
//       dispatch({
//         type: reducerCases.ADD_MESSAGE,
//         newMessage: {
//           ...data.message,
//         },
//         fromSelf: true,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleEmojiModal = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   const handleEmojiClick = (emoji, event) => {
//     setMessage((prevMessage) => (prevMessage += emoji.emoji));
//   };

//   const emojiPickerRef = useRef(null); // Create a ref for the emoji picker element

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (event.target.id !== "emoji-open") {
//         if (
//           emojiPickerRef.current && // Check if the emoji picker ref exists
//           !emojiPickerRef.current.contains(event.target) // Check if the click is outside of the emoji picker
//         ) {
//           setShowEmojiPicker(false); // Close the emoji picker
//         }
//       }
//     };

//     document.addEventListener("click", handleOutsideClick); // Add the event listener

//     return () => {
//       document.removeEventListener("click", handleOutsideClick); // Clean up the event listener on component unmount
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   useEffect(() => {
//     setMessage("");
//   }, [currentChatUser]);

//   useEffect(() => {
//     if (grabImage) {
//       const data = document.getElementById("photo-picker");
//       data.click();
//       document.body.onfocus = (e) => {
//         setTimeout(() => {
//           setGrabImage(false);
//         }, 1000);
//       };
//     }
//   }, [grabImage]);

//   return (
//     <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
//       {!showAudioRecorder && !isBlocked && (
//         <>
//           <div className="flex gap-6">
//             <BsEmojiSmile
//               className="text-panel-header-icon cursor-pointer text-xl"
//               title="Emoji"
//               onClick={handleEmojiModal}
//               id="emoji-open"
//             />
//             {showEmojiPicker && (
//               <div
//                 className="absolute bottom-24 left-16 z-40"
//                 ref={emojiPickerRef}
//               >
//                 <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
//               </div>
//             )}
//             <ImAttachment
//               className="text-panel-header-icon cursor-pointer text-xl"
//               title="Attach"
//               onClick={() => setGrabImage(true)}
//             />
//           </div>
//           <div className="w-full rounded-lg h-10 flex items-center">
//             <input
//               type="text"
//               placeholder="Type a message"
//               className="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg pl-5 pr-5 py-4 w-full"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <div className="w-10 flex items-center justify-center">
//             {message.length ? (
//               <button onClick={sendMessage}>
//                 <MdSend
//                   className="text-panel-header-icon cursor-pointer text-xl"
//                   title="Send"
//                 />
//               </button>
//             ) : (
//               <FaMicrophone
//                 className="text-panel-header-icon cursor-pointer text-xl"
//                 title="Record"
//                 onClick={() => setShowAudioRecorder(true)}
//               />
//             )}
//           </div>
//         </>
//       )}
//       {showAudioRecorder && <CaptureAudio hide={setShowAudioRecorder} />}
//       {grabImage && <PhotoPicker onChange={photoPickerOnChange} />}
//     </div>
//   );
// }



import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import axios from "axios";
import { ADD_IMAGE_MESSAGE_ROUTE, ADD_MESSAGE_ROUTE,Block_Unblock } from "@/utils/ApiRoutes";
import EmojiPicker from "emoji-picker-react";
import dynamic from "next/dynamic";
import PhotoPicker from "../common/PhotoPicker";
//import {initialState} from "@/context/StateReducers";
import BlockedUsersList from "./blockedUsersList";

// import { checkIfBlocked } from "@/context/check_block_middle";

//const initialState=reducer(undefined,{});
//const {blockedUsers}=initialState;

const CaptureAudio = dynamic(() => import("@/components/common/CaptureAudio"), {
  ssr: false,
});

export default function MessageBar() {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAudioRecorder, setShowAudioRecorder] = useState(false);
  const [grabImage, setGrabImage] = useState(false);

  const [{ socket, currentChatUser, userInfo, blockedUsers }, dispatch] = useStateProvider();

  const isBlocked = currentChatUser && blockedUsers.includes(currentChatUser.id);

  const photoPickerOnChange = async (e) => {
    if (isBlocked) return; // Don't allow interaction if user is blocked

    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(ADD_IMAGE_MESSAGE_ROUTE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          from: userInfo.id,
          to: currentChatUser.id,
        },
      });
      if (response.status === 201) {
        socket.current.emit("send-msg", {
          to: currentChatUser.id,
          from: userInfo.id,
          message: response.data.message,
        });
        dispatch({
          type: reducerCases.ADD_MESSAGE,
          newMessage: {
            ...response.data.message,
          },
          fromSelf: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = async () => {
   
//     const Block_Unblock = "/api/block-unblock"
//     const response =  axios.post(Block_Unblock, {
//       senderId: userInfo.id,
//       recipientId: currentChatUser.id,
//     });

//     if (response.data.isBlocked) {
//       console.log("You are blocked by the recipient. Unblock the user to chat.");
//       return; // Don't allow interaction if user is blocked
//     }



//     const isBlocked = await checkIfBlocked(userInfo.id, currentChatUser.id);


// //    if (isBlocked) return; // Don't allow interaction if user is blocked
// if (isBlocked) {
//   alert("You are blocked by the recipient. Unblock the user to chat.");
//   return; // Don't allow interaction if user is blocked
//}
if (!blockedUsers.includes(currentChatUser.id)) {
  // Proceed with sending the message
  // Example: dispatch({ type: reducerCases.SEND_MESSAGE, message });




    try {
      setMessage("");
      const { data } = await axios.post(ADD_MESSAGE_ROUTE, {
        to: currentChatUser.id,
        from: userInfo.id,
        message,
      });
      socket.current.emit("send-msg", {
        to: currentChatUser.id,
        from: userInfo.id,
        message: data.message,
      });
      dispatch({
        type: reducerCases.ADD_MESSAGE,
        newMessage: {
          ...data.message,
        },
        fromSelf: true,
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    // Display a notification to the user that the recipient is blocked
    alert("You cannot send messages to a blocked user.");
  }
  
  };

  const handleEmojiModal = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji, event) => {
    setMessage((prevMessage) => (prevMessage += emoji.emoji));
  };

  const emojiPickerRef = useRef(null); // Create a ref for the emoji picker element

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id !== "emoji-open") {
        if (
          emojiPickerRef.current && // Check if the emoji picker ref exists
          !emojiPickerRef.current.contains(event.target) // Check if the click is outside of the emoji picker
        ) {
          setShowEmojiPicker(false); // Close the emoji picker
        }
      }
    };  

    document.addEventListener("click", handleOutsideClick); // Add the event listener

    return () => {
      document.removeEventListener("click", handleOutsideClick); // Clean up the event listener on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    setMessage("");
  }, [currentChatUser]);

  useEffect(() => {
    if (grabImage) {
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus = (e) => {
        setTimeout(() => {
          setGrabImage(false);
        }, 1000);
      };
    }
  }, [grabImage]);

  return (
    <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
      {isBlocked ? (
        <div className="text-red-500">You cannot chat with this user. Unblock the user to chat.</div>
      ) : (
        <>
          {!showAudioRecorder && (
            <>
              <div className="flex gap-6">
                <BsEmojiSmile
                  className="text-panel-header-icon cursor-pointer text-xl"
                  title="Emoji"
                  onClick={handleEmojiModal}
                  id="emoji-open"
                />
                {showEmojiPicker && (
                  <div
                    className="absolute bottom-24 left-16 z-40"
                    ref={emojiPickerRef}
                  >
                    <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
                  </div>
                )}
                <ImAttachment
                  className="text-panel-header-icon cursor-pointer text-xl"
                  title="Attach"
                  onClick={() => setGrabImage(true)}
                />
              </div>
              <div className="w-full rounded-lg h-10 flex items-center">
                <input
                  type="text"
                  placeholder="Type a message"
                  className="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg pl-5 pr-5 py-4 w-full"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="w-10 flex items-center justify-center">
                {message.length ? (
                  <button onClick={sendMessage}>
                    <MdSend
                      className="text-panel-header-icon cursor-pointer text-xl"
                      title="Send"
                    />
                  </button>
                ) : (
                  <FaMicrophone
                    className="text-panel-header-icon cursor-pointer text-xl"
                    title="Record"
                    onClick={() => setShowAudioRecorder(true)}
                  />
                )}
              </div>
            </>
          )}
          {showAudioRecorder && <CaptureAudio hide={setShowAudioRecorder} />}
          {grabImage && <PhotoPicker onChange={photoPickerOnChange} />}
        </>
      )}
    </div>
  );
}
