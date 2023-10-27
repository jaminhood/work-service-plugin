import FiveStar from "./ratings/FiveStar"
import FourStar from "./ratings/FourStar"
import ThreeStar from "./ratings/ThreeStar"
import TwoStar from "./ratings/TwoStar"
import OneStar from "./ratings/OneStar"
import ZeroStar from "./ratings/ZeroStar"

const CustomerBookingsCardRates = ({ booking }) => {
 switch (booking.booking_rate) {
  case `5`:
   return <FiveStar />
  case `4`:
   return <FourStar />
  case `3`:
   return <ThreeStar />
  case `2`:
   return <TwoStar />
  case `1`:
   return <OneStar />
  case `0`:
   return <ZeroStar />
 }
}

export default CustomerBookingsCardRates
