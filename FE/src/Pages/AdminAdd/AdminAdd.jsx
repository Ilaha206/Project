import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { useNavigate } from 'react-router';
function AdminAdd() {
  const navigate = useNavigate()
  return (
    <>
      <title>AdminAdd</title>
      <Formik
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

        onSubmit={async (values, { setSubmitting }) => {
          const token = localStorage.getItem('token');
          console.log("Sending POST, token:", token, "values:", values);

          try {
            await axios.post('http://localhost:3000/gifts', values, {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            });

            alert('Əlavə olundu!');
            navigate('/admin');
          } catch (err) {
            console.error('Əlavə xətası:', err);
            alert('Xəta baş verdi! Token düzgün deyil və ya icazən yoxdur.');
          }

          setSubmitting(false);
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

          <label htmlFor="categoryId">Category</label>
          <Field as="select" name="categoryId">
            <option value="">Choose category</option>
            <option value="6861b1a49a85477b889bd5e5">Bag</option>
            <option value="6864610cfac8cad88f5347d5">Toy</option>
            <option value="68645bf4fac8cad88f5347ba">Sunglasses</option>
            <option value="68646605fac8cad88f5347e6">Accessory</option>
            <option value="68646892fac8cad88f5347f3">Bouquet</option>
          </Field>
          <ErrorMessage name="categoryId" component="div" className="error" />

          <h4>Contact</h4>
          <label htmlFor="contact.phone">Phone</label>
          <Field name="contact.phone" type="text" />
          <ErrorMessage name="contact.phone" />

          <label htmlFor="contact.instagram">Instagram</label>
          <Field name="contact.instagram" type="text" />
          <ErrorMessage name="contact.instagram" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default AdminAdd