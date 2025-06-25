/*
import React, { useEffect, useState } from "react";
import Avatar from "../components/common/Avatar";
import Input from "../components/common/Input";
import axios from "axios";
import { onBoardUserRoute } from "../utils/ApiRoutes";

import Resizer from "react-image-file-resizer";

import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/router";
import { reducerCases } from "@/context/constants";

export default function OnBoarding() {
  const maxLength = 20; 
  const router = useRouter();

  const [{ userInfo, newUser }, dispatch] = useStateProvider();

  const [image, setImage] = useState("/default_avatar.png");
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (!newUser && !userInfo?.email) router.push("/login");
    else if (!newUser && userInfo?.email) router.push("/");
  }, [newUser, userInfo, router]);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "PNG",
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const onBoardUser = async () => {
    if (validateDetails()) {
      const email = userInfo?.email;
      try {
        const base64Response = await fetch(`${image}`);
        const blob = await base64Response.blob();
        setImage(await resizeFile(blob));
        const { data } = await axios.post(onBoardUserRoute, {
          email,
          name,
          about,
          image,
        });
        if (data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profileImage: image,
              status: about,
            },
          });

          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateDetails = () => {
    if (name.length < 3) {
      // Toast Notification
      return false;
    }
    return true;
  };

  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/final_logo.gif"
          alt="whatsapp-gif"
          height={300}
          width={300}
        />
        <span className="text-7xl"> HeyBuddy </span>
      </div>
      <div></div>
      <h2 className="text-2xl ">Create your profile</h2>
      <div className="flex gap-6 mt-6 ">
        <div className="flex flex-col items-center justify-between mt-5 gap-6">
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} maxLength={maxLength} label />
          <div className="flex items-center justify-center">
            <button
              className="bg-search-input-container-background p-5 rounded-lg"
              onClick={onBoardUser}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}
*/
/*
import React, { useEffect, useState } from "react";
import Avatar from "../components/common/Avatar";
import Input from "../components/common/Input";
import axios from "axios";
import { onBoardUserRoute } from "../utils/ApiRoutes";

import Resizer from "react-image-file-resizer";

import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/router";
import { reducerCases } from "@/context/constants";

export default function OnBoarding() {
  const router = useRouter();

  const [{ userInfo, newUser }, dispatch] = useStateProvider();

  const [image, setImage] = useState("/default_avatar.png");
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("Hey, I am using HeyBuddy ");

  useEffect(() => {
    if (!newUser && !userInfo?.email) router.push("/login");
    else if (!newUser && userInfo?.email) router.push("/");
  }, [newUser, userInfo, router]);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "PNG",
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const onBoardUser = async () => {
    if (validateDetails()) {
      const email = userInfo?.email;
      try {
        const base64Response = await fetch(`${image}`);
        const blob = await base64Response.blob();
        setImage(await resizeFile(blob));
        const { data } = await axios.post(onBoardUserRoute, {
          email,
          name,
          about,
          image,
        });
        if (data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profileImage: image,
              status: about,
            },
          });

          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
    
  };

  const validateDetails = () => {
    // Check if the name is a valid name (at least 3 characters and no special characters)
    const validNameRegex = /^[a-zA-Z]{3,}$/;
  
    if (!validNameRegex.test(name)) {
      alert("Username should be Valid !!!!!")
      // Toast Notification or any other form of error handling
      // console.error("Invalid name. Please enter a valid name with at least 3 characters and no special characters.");
      return false;
    }
    if (about.length > 30) {
      
     alert("About should be less than 30 characters.");
      return false;
    }
  
    return true;
  };
  // const validateDetails = () => {
  //   if (name.length < 3) {
  //     // Toast Notification
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/final_logo.gif"
          alt="whatsapp-gif"
          height={300}
          width={300}
        />
        <span className="text-7xl">HeyBuddy</span>
      </div>
      <div></div>
      <h2 className="text-2xl ">Create your profile</h2>
      <div className="flex gap-6 mt-6 ">
        <div className="flex flex-col items-center justify-between mt-5 gap-6">
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div className="flex items-center justify-center">
            <button
              className="bg-search-input-container-background p-5 rounded-lg"
              onClick={onBoardUser}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}
*/

import React, { useEffect, useState } from "react";
import Avatar from "../components/common/Avatar";
import Input from "../components/common/Input";
import axios from "axios";
import { onBoardUserRoute } from "../utils/ApiRoutes";

import Resizer from "react-image-file-resizer";

import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/router";
import { reducerCases } from "@/context/constants";

export default function OnBoarding() {
  const router = useRouter();

  const [{ userInfo, newUser }, dispatch] = useStateProvider();

  const [image, setImage] = useState("/default_avatar.png");
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("Hey, I am using HeyBuddy ");

  useEffect(() => {
    if (!newUser && !userInfo?.email) router.push("/login");
    else if (!newUser && userInfo?.email) router.push("/");
  }, [newUser, userInfo, router]);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "PNG",
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const onBoardUser = async () => {
    if (validateDetails()) {
      const email = userInfo?.email;
      try {
        const base64Response = await fetch(`${image}`);
        const blob = await base64Response.blob();
        setImage(await resizeFile(blob));
        const { data } = await axios.post(onBoardUserRoute, {
          email,
          name,
          about,
          image,
        });
        if (data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profileImage: image,
              status: about,
            },
          });

          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
    
  };

  const validateDetails = () => {
    // Check if the name is a valid name (at least 3 characters and no special characters)
    const validNameRegex = /^[a-zA-Z]{3,15}$/;
  
    if (!validNameRegex.test(name)) {
      alert("Username should be Valid !!!!!");
      // Toast Notification or any other form of error handling
      // console.error("Invalid name. Please enter a valid name with at least 3 characters and no special characters.");
      return false;
    }
    if (about.length > 30) {
      
     alert("About should be less than 30 characters.");
      return false;
    }
  
    return true;
  };

  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/final_logo.gif"
          alt="whatsapp-gif"
          height={300}
          width={300}
        />
        <span className="text-7xl">HeyBuddy</span>
      </div>
      <div></div>
      <h2 className="text-2xl ">Create your profile</h2>
      <div className="flex gap-6 mt-6 ">
        <div className="flex flex-col items-center justify-between mt-5 gap-6">
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div className="flex items-center justify-center">
            <button
              className="bg-search-input-container-background p-5 rounded-lg"
              onClick={onBoardUser}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage}   />
        </div>
      </div>
    </div>
  );
}
