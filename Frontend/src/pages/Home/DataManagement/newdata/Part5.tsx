import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { BACKEND_URL } from "../../../../Globle";
import { useCookies } from "react-cookie";

const Part5 = () => {
  const [declarationStatement, setDeclarationStatement] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [authorizedSignatory, setAuthorizedSignatory] = useState("");
  const [chaName, setChaName] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["token"]);

  const handleSubmit = async () => {
    setLoading(true);
    const jsonData = {
      declarationStatement: declarationStatement,
      date: date,
      place: place,
      authorizedSignatory: authorizedSignatory,
      chaName: chaName,
    };
    const response = await axios.post(
      "${BACKEND_URL}/newdata/part4",
      jsonData,
      {
        headers: {
          "Authorization": cookies.token,
        },
      }
    );
    setLoading(false);
    alert(response.data.message);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.container}>
      {loading && <Loading />}
      <h2 style={{ textAlign: "center" }}>PART 5 - DECLARATIONS</h2>
      <h3>Section A - Declaration Statement</h3>
      <div style={styles.formGroup}>
        <label htmlFor="declaration-statement">Declaration Statement</label>
        <textarea
          id="declaration-statement"
          name="declaration-statement"
          required
          value={declarationStatement}
          onChange={(e) => setDeclarationStatement(e.target.value)}
        ></textarea>
      </div>

      <h3>Section B - Authorized Signatory</h3>
      <div style={styles.formGroup}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="place">Place</label>
        <input
          type="text"
          id="place"
          name="place"
          required
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="authorized-signatory">Authorized Signatory</label>
        <input
          type="text"
          id="authorized-signatory"
          name="authorized-signatory"
          required
          value={authorizedSignatory}
          onChange={(e) => setAuthorizedSignatory(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="cha-name">CHA Name</label>
        <input
          type="text"
          id="cha-name"
          name="cha-name"
          required
          value={chaName}
          onChange={(e) => setChaName(e.target.value)}
        />
      </div>
      <button
        className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mx-1"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <button
        className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1"
        onClick={() => navigate("/newdata/part1")}
      >
        Back
      </button>
      <button
        onClick={() => navigate("/")}
        className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mx-1"
      >
        {" "}
        Home
      </button>
    </div>
  );
};

const styles: any = {
  container: {
    backgroundColor: "#e0f7fa",
    padding: "20px",
    borderRadius: "8px",
    margin: "0",
    fontFamily: "Arial, sans-serif",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButtonContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Part5;
