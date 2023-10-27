import { SITE_URL } from "../../../constants"
import Button from "../../../components/button"

const CustomerContentBoxBtn = ({ btnPath }) => {
 return (
  <a href={`${SITE_URL}ws-customer/${btnPath}`} className="no-underline text-inherit hover:no-underline focus:no-underline active:no-underline visited:no-underline">
   <Button content="View All" />
  </a>
 )
}

export default CustomerContentBoxBtn
