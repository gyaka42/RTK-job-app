import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJob = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    id: Number(new Date().getTime()),
    position: "",
    company: "",
    location: "",
    status: "Mulakat",
    type: "Tam zaman",
    date: new Date().toLocaleDateString(),
  });

  // gonder buttonu
  const handleSubmit = () => {
    console.log(formState);
    if (!formState.position || !formState.company || !formState.location) {
      toast.warn("Formu eksik doldurdunuz!");
      return;
    }
    axios
      .post("http://localhost:3004/jobs", formState)
      .then((res) => {
        toast.success("Basariyla Eklendi!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Veri yuklerken bir hata olustu..");
      });
  };

  return (
    <section className="add-sec">
      <h2>Yeni Is Ekle</h2>
      <div className="inputs">
        <div className="input-field">
          <label> Pozisyon</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, position: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label> Sirket</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, company: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label> Lokasyon</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, location: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label> Durum</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
            }
          >
            <option value="Mülakat">Mülakat</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Reddedildi">Reddedildi</option>
          </select>
        </div>
        <div className="input-field">
          <label> Tur</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, type: e.target.value })
            }
          >
            <option value="Tam zaman">Tam zaman</option>
            <option value="Yari zaman">Yari zaman</option>
            <option value="Uzaktan">Uzaktan</option>
            <option value="Staj">Staj</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Ekle</button>
      </div>
    </section>
  );
};

export default AddJob;
