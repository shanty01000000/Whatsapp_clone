// import { useStateProvider } from "@/context/StateContext";
// import { reducerCases } from "@/context/constants";
// import { firebaseAuth } from "@/utils/FirebaseConfig";
// import { signOut } from "firebase/auth";
// import { useRouter } from "next/router";
// import React, { useEffect } from "react";

// function logout() {
//   const [{ socket, userInfo }, dispatch] = useStateProvider();
//   const router = useRouter();
//   useEffect(() => {
//     socket.current.emit("signout", userInfo.id);
//     dispatch({
//       type: reducerCases.SET_USER_INFO,
//       userInfo: undefined,
//     });
//     signOut(firebaseAuth);
//     router.push("/login");
//   }, [socket]);
//   return <div className="bg-conversation-panel-background"></div>;
// }

// export default logout;
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Logout() {
  const [{ socket, userInfo }, dispatch] = useStateProvider();
  const router = useRouter();

  useEffect(() => {
    if (socket && userInfo) {
      socket.current.emit("signout", userInfo.id);
      dispatch({
        type: reducerCases.SET_USER_INFO,
        userInfo: undefined,
      });
      signOut(firebaseAuth)
        .then(() => {
          router.push("/login");
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        });
    }
  }, [socket, userInfo, dispatch, router]);

  return <div className="bg-conversation-panel-background"></div>;
}

export default Logout;
