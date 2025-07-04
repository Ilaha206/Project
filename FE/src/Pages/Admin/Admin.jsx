import { useEffect, useState } from "react"
import './Admin.css'
import { IoLogoInstagram } from "react-icons/io5"
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

function Admin() {
  const [products, setproducts] = useState([])
  const navigate = useNavigate()
  const [search, setsearch] = useState("")
  const [sortProperty, setsortProperty] = useState({
    title: "",
    order: true
  })
  useEffect(() => {
    fetch("http://localhost:3000/gifts")
      .then((res) => (res.json()))
      .then((data) => (setproducts(data)))
  }, [])

  function deleteByItem(id) {
    const token = localStorage.getItem('token');


    fetch("http://localhost:3000/gifts/" + id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Delete əməliyyatı uğursuz oldu');
        }
        return res.text();
      })
      .then(() => {
        return fetch("http://localhost:3000/gifts")
      })
      .then(res => res.json())
      .then(data => setproducts(data))
      .catch(err => {
        console.error(err);
        alert('Silərkən xəta baş verdi!');
      });
  }
  return (
    <>
      <title>Admin</title>
      <span className="search"><CiSearch /></span><input type="text" value={search} onChange={(e) => setsearch(e.target.value)} />

      <button className="sort_button" onClick={() => setsortProperty({ title: "price", order: true })}>Artan</button>
      <button className="sort_button" onClick={() => setsortProperty({ title: "price", order: false })}>Azalan</button>
      <button className="sort_button" onClick={() => setsortProperty({ title: "title", order: true })}>A-z</button>
      <button className="sort_button" onClick={() => setsortProperty({ title: "title", order: false })}>Z-a</button>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Phone</th>
            <th>Instagram</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>{products
          .toSorted((a, b) => sortProperty.order ? (a[sortProperty.title] > b[sortProperty.title]) ? 1 : ((b[sortProperty.title] > a[sortProperty.title]) ? -1 : 0) : (a[sortProperty.title] < b[sortProperty.title]) ? 1 : ((b[sortProperty.title] < a[sortProperty.title]) ? -1 : 0))
          .filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
          .map((x) =>
            <tbody key={x._id}>
              <tr>
                <td><img src={x.image} alt="" /></td>
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td>{x.price}</td>
                <td className="phone">Telefon: {x.contact?.phone}</td>
                {x.contact?.instagram && (
                  <td className="icon_instagram"><IoLogoInstagram />: {x.contact.instagram}</td>
                )}
                <td><button className="delete" onClick={() => deleteByItem(x._id)}>Delete</button></td>
                <td><button className="update" onClick={() => navigate("update/" + x._id)}>Update</button></td>
              </tr>
            </tbody>)}
      </table>

    </>
  )
}

export default Admin