export default function SearchBar() {
  return (
    <section className="search-bar">
      <div>
        <label htmlFor="location">Search by location</label>
        <input id="location" placeholder="Uttam Nagar, Dwarka, Delhi" />
      </div>
      <div>
        <label htmlFor="budget">Budget</label>
        <input id="budget" placeholder="Up to ₹1 Cr" />
      </div>
      <div>
        <label htmlFor="propertyType">Property type</label>
        <select id="propertyType">
          <option>2 BHK Builder Floor</option>
          <option>3 BHK Flat</option>
          <option>Studio Apartment</option>
          <option>Resale Home</option>
        </select>
      </div>
    </section>
  )
}
