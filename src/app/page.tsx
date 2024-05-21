import "../styles/HomePage.scss";

export default function Home() {
  return (
    <main className="main">
      <div className="formDiv">
        <form>
          <select name="foodSelector" id="foodSelector">
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="lamb">Lamb</option>
            <option value="pork">Pork</option>
          </select>
          <span>OR</span>
          <div className="inputGroup">
            <input type="text" placeholder="Search for a recipe" />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      <div></div>
    </main>
  );
}
