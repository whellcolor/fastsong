import React from "react";
import { Route, Routes } from "react-router-dom";
import Playlist from "./components/Playlist";
import PlaylistDetails from "./components/PlaylistDetails";
import Artists from "./components/Artists";
import ArtistsDetails from "./components/ArtistsDetails";
import Download from "./components/Download";
import Home from "./components/Home";
import AlbumDetails from "./components/AlbumDetails";
import Album from "./components/Album";
import Songs from "./components/Songs";
import Likes from "./components/Likes";
import SongDetails from "./components/SongDetails";
import Import from "./components/Import";
import ads from "ads.txt";
import { Analytics } from '@vercel/analytics/next';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ================= IMPORT =================
import { createThirdwebClient, getContract } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";

// ================= CLIENT =================
const client = createThirdwebClient({
  clientId: "3ea7634968af4a7c90b17914bcf7d4bb", // ganti dengan punyamu
});

// ================= CONTRACT =================
const contract = getContract({
  address: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
  chain: ethereum,
  client: client,
});

// ================= COMPONENT =================
export default function App() {
  return (
    <div style={styles.body}>
      <div style={styles.box}>
        <h2>awdevNFT PRO</h2>

        {/* CONNECT WALLET */}
        <ConnectButton client={client} />

        {/* ACTION BUTTON */}
        <button style={styles.button}>Mint NFT</button>
        <button style={styles.button}>Stake NFT #0</button>
        <button style={styles.button}>Unstake NFT #0</button>

        {/* NFT IMAGE */}
        <img
          src="https://via.placeholder.com/400"
          alt="NFT Preview"
          style={styles.img}
        />
      </div>
    </div>
  );
}

// ================= STYLE =================
const styles = {
  body: {
    background: "#0f172a",
    color: "white",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px",
    minHeight: "100vh",
  },
  box: {
    width: "420px",
    background: "#111827",
    padding: "20px",
    borderRadius: "15px",
  },
  button: {
    width: "100%",
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  img: {
    width: "100%",
    borderRadius: "10px",
    marginTop: "10px",
  },
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuSL5QAuV1h1r6xGBvIoYpCZsCp45ujTE",
  authDomain: "fastsongup.firebaseapp.com",
  projectId: "fastsongup",
  storageBucket: "fastsongup.firebasestorage.app",
  messagingSenderId: "4767799311",
  appId: "1:4767799311:web:9eb1c2da3517651ee9eb7a",
  measurementId: "G-E72PJNE1XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const App = () => {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/details/:id" element={<SongDetails />} />
        <Route path="/album" element={<Album />} />
        <Route path="/albums/details/:id" element={<AlbumDetails />} />
        <Route path="/download" element={<Download />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/details/:id" element={<PlaylistDetails />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/details/:id" element={<ArtistsDetails />} />
        <Route path="/likes" element={<Likes/>} />
        <Route path="/import" element={<Import/>} />
     <Analytics />
      </Routes>
    </div>
  );
};

export default App;
