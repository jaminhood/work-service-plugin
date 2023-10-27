import axios from "axios"
import { useEffect, useState } from "react"
import { ServiceContext } from "./ServiceContext"
import { SITE_URL } from "../../../constants"
import AdminProvider from "../../context/AdminProvider"

const ServiceProvider = (props) => {
 const [openedForm, setOpenedForm] = useState(0)
 const [categories, setCategories] = useState([])
 const [subCategories, setSubCategories] = useState([])
 const [services, setServices] = useState([])
 const [editCategory, setEditCategory] = useState([])
 const [editService, setEditService] = useState([])

 const getAllCategories = async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/categories/get`).then((res) => {
   setCategories(res.data)
  })
 }

 const getAllSubCategories = async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/sub-categories/get-all`).then((res) => {
   setSubCategories(res.data)
  })
 }

 const getAllServices = async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/get-all`).then((res) => {
   setServices(res.data)
  })
 }

 useEffect(async () => {
  await getAllCategories()
  await getAllSubCategories()
  await getAllServices()
 }, [])

 const openAction = (formId) => {
  if (openedForm === formId) {
   setOpenedForm(0)
  } else {
   setOpenedForm(formId)
  }
  setEditCategory([])
 }

 const handleCategoryEdit = (category) => {
  openAction(2)
  setEditCategory(category)
 }

 const handleCategoryDelete = async (id) => {
  try {
   await axios.delete(`${SITE_URL}wp-json/ws-api/v1/category/web/delete?category_id=${id}`)

   location.reload()
  } catch (e) {
   throw new Error(e.message)
  }
 }

 const handleCategoryForm = async (params, formType) => {
  const { categoryTitle, categoryIconID } = params

  const cannotSubmit = categoryTitle.trim() === `` && categoryIconID === 0

  try {
   if (cannotSubmit) {
    throw new Error(`Empty Field(s)`)
   }

   const newParams = {
    category_name: categoryTitle,
    category_icon: categoryIconID,
   }
   await axios.post(`${SITE_URL}wp-json/ws-api/v1/category/post`, newParams)

   location.reload()
  } catch (e) {
   throw new Error(e.message)
  }
 }

 const handleSubCategoryDelete = async (id) => {
  try {
   await axios.delete(`${SITE_URL}wp-json/ws-api/v1/sub-category/delete?sub_category_id=${id}`)

   location.reload()
  } catch (e) {
   throw new Error(e.message)
  }
 }

 const handleSubCategoryForm = async (params) => {
  const { subCategoryTitle, imgID, formCategory } = params
  try {
   const newParams = {
    category_id: formCategory,
    sub_category_name: subCategoryTitle,
    sub_category_icon: imgID,
   }

   await axios.post(`${SITE_URL}wp-json/ws-api/v1/sub-category/post`, newParams)

   location.reload()
  } catch (e) {
   throw new Error(e.message)
  }
 }

 const handleServiceEdit = (service) => {
  openAction(1)
  setEditService(service)
 }

 const handleServiceDelete = async (id) => {
  try {
   await axios.delete(`${SITE_URL}wp-json/ws-api/v1/services/web/delete?service_id=${id}`)

   location.reload()
  } catch (e) {
   throw new Error(e.message)
  }
 }

 const handleServiceForm = async (params) => {
  const { serviceTitle, imgID, formSubCategory } = params
  try {
   const newParams = {
    service_name: serviceTitle,
    sub_category_id: formSubCategory,
    service_icon: imgID,
   }

   await axios.post(`${SITE_URL}wp-json/ws-api/v1/services/post`, newParams)

   location.reload()
  } catch (e) {
   throw new Error(e.message)
  }
 }

 const providerValues = {
  openedForm,
  openAction,
  categories,
  editCategory,
  handleCategoryEdit,
  handleCategoryDelete,
  handleCategoryForm,
  subCategories,
  handleSubCategoryDelete,
  handleSubCategoryForm,
  services,
  editService,
  handleServiceEdit,
  handleServiceDelete,
  handleServiceForm,
 }

 return (
  <AdminProvider>
   <ServiceContext.Provider value={providerValues}>
    <div>
     <div className="grid grid-cols-2 gap-4">{props.children}</div>
    </div>
   </ServiceContext.Provider>
  </AdminProvider>
 )
}

export default ServiceProvider
