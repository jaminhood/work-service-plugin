import Box from "../../../../shared/box"
import useAdminContext from "../../../context/useAdminContext"
import SubCategoriesTable from "./sub-categories-table"
import SubCategoryForm from "./sub-category-form"

const MainSubCategories = () => {
 const { modalIsOpen, setModalIsOpen, resetModalIsOpen } = useAdminContext()

 return (
  <>
   {modalIsOpen === "sub-category" && <SubCategoryForm toggleOpen={resetModalIsOpen} />}
   <Box cls="" mainBoxHeading="Sub Categories" buttonTxt="Add Sub Category" handleFormOpen={() => setModalIsOpen("sub-category")}>
    <SubCategoriesTable />
   </Box>
  </>
 )
}

export default MainSubCategories
