import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../Firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";

const Googlesignin = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      alert("user signed in  successfully with Google");
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <button
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GoogleIcon
          className="bg-red-700 text-white rounded-xl w-full p-2"
          onClick={signInWithGoogle}
          color="secondary"
          sx={{ fontSize: 40 }}
        />
        <span style={{ marginLeft: "0.5rem" }}>Continue with Google</span>
      </button>
    </div>
  );
};

export default Googlesignin;
