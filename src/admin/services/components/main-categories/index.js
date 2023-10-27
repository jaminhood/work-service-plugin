import Box from "../../../../shared/box"
import useAdminContext from "../../../context/useAdminContext"
import useServiceContext from "../../context/useServiceContext"
import CategoriesTable from "./categories-table"
import CategoryForm from "./category-form"

const MainCategories = () => {
 const { modalIsOpen, setModalIsOpen, resetModalIsOpen } = useAdminContext()

 return (
  <>
   {modalIsOpen === "category" && <CategoryForm toggleOpen={resetModalIsOpen} />}
   <Box cls="" mainBoxHeading="Categories" buttonTxt="Add Category" handleFormOpen={() => setModalIsOpen("category")}>
    <CategoriesTable />
   </Box>
  </>
 )
}

export default MainCategories
