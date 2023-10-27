import Box from "../../../../shared/box"
import NewsBox from "./components/NewsBox"
import useAdminContext from "../../../context/useAdminContext"
import NewsModal from "./components/NewsModal"

const News = () => {
 const { modalIsOpen, setModalIsOpen, resetModalIsOpen, newsBanner } = useAdminContext()

 return (
  <>
   {modalIsOpen === "news" && <NewsModal toggleOpen={resetModalIsOpen} />}
   <Box cls="" mainBoxHeading="News" buttonTxt="Add New" handleFormOpen={() => setModalIsOpen("news")}>
    {newsBanner.map((banner) => (
     <NewsBox key={banner.banner_id} banner={banner} />
    ))}
   </Box>
  </>
 )
}

export default News
