import { useEffect, useState } from "react"
import './Admin.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { useParams } from "react-router";

function AdminUpdate() {
  const [products, setproducts] = useState()
  const {id} = useParams()
  useEffect(() => {
    fetch("http://localhost:3000/gifts/"+id)
      .then((res) => (res.json()))
      .then((data) => (setproducts(data)))
  }, [id])

  
  return (
    <>
     {product &&  <Formik
        initialValues={{
          image: '',
          title: '',
          description: '',
          price: '',
          categoryId: '',
          contact: {
            phone: '',
            instagram: ''
          }
        }}
        validationSchema={Yup.object({
          image: Yup.string()
            .url('URL formatı düzgün deyil')
            .required('Şəkil linki tələb olunur'),

          title: Yup.string()
            .min(3, 'Minimum 3 simvol')
            .max(100, 'Maksimum 100 simvol')
            .required('Başlıq tələb olunur'),

          description: Yup.string()
            .min(5, 'Minimum 5 simvol')
            .max(500, 'Maksimum 500 simvol')
            .required('Təsvir tələb olunur'),

          price: Yup.number()
            .typeError('Qiymət rəqəm olmalıdır')
            .min(1, 'Minimum 1')
            .max(10000, 'Maksimum 10000')
            .required('Qiymət tələb olunur'),

          categoryId: Yup.string()
            .required('Kateqoriya tələb olunur'),

          contact: Yup.object({
            phone: Yup.string().optional(),
            instagram: Yup.string().optional()
          }).optional()
        })}

        onSubmit={(values) => {
          axios.put("http://localhost:3000/gifts/"+id, values)
            .then(() => navigate("/admin"))
            .catch((err) => console.error(err));
        }}
      >
        <Form>
          <label htmlFor="image">Image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="description">Description</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <label htmlFor="categoryId">Category ID</label>
          <Field name="categoryId" type="text" />
          <ErrorMessage name="categoryId" />

          <h4>Contact</h4>
          <label htmlFor="contact.phone">Phone</label>
          <Field name="contact.phone" type="text" />
          <ErrorMessage name="contact.phone" />

          <label htmlFor="contact.instagram">Instagram</label>
          <Field name="contact.instagram" type="text" />
          <ErrorMessage name="contact.instagram" />

          <button type="submit">Add</button>
        </Form>
      </Formik>}

      
    </>
  )
}

export default AdminUpdate