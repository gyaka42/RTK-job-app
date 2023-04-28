import { useDispatch } from "react-redux";
import {
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} from "../redux/jobSlice";

const Filter = () => {
  const dispatch = useDispatch();

  // sirket ismi arama kismi
  const onSearchChange = (e) => {
    dispatch(handleInputChange(e.target.value));
  };

  // durum`lari filtreleme

  const onStatusChange = (e) => {
    dispatch(handleStatusChange(e.target.value));
  };

  // siralama islemi burada yapiliyor

  const onSortChange = (e) => {
    dispatch(handleSortChange(e.target.value));
  };

  // filtrelemeyi sifirla

  const onResetButtonClick = () => {
    dispatch(handleReset());
  };

  return (
    <section className="add-sec filter-sec">
      <h2>Arama Formu</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Sirket ismi:</label>
          <input type="text" onChange={onSearchChange} />
        </div>

        <div className="input-field">
          <label>Durum:</label>
          <select onChange={onStatusChange}>
            <option hidden>Hepsi</option>
            <option value="Mülakat">Mülakat</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Reddedildi">Reddedildi</option>
          </select>
        </div>

        <div className="input-field">
          <label>Sirala:</label>
          <select onChange={onSortChange}>
            <option value="En Yeni">En Yeni</option>
            <option value="En Eski">En Eski</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <button onClick={onResetButtonClick}>Filtreleri temizle</button>
      </div>
    </section>
  );
};

export default Filter;
