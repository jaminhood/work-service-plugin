const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

const getMonth = (data) => {
 return months[data.getMonth()]
}

export const newDate = () => {
 const currentDate = new Date()

 const year = currentDate.getFullYear()
 const month = getMonth(currentDate)
 const day = currentDate.getDate()

 return `${day} ${month}, ${year}`
}

export const getDate = (time) => {
 const currentDate = new Date(time)

 const year = currentDate.getFullYear()
 const month = getMonth(currentDate)
 const day = currentDate.getDate()

 return `${day} ${month}, ${year}`
}

export const priceFormat = (price) => {
 const converted = new Intl.NumberFormat(`en-NG`, {
  style: `currency`,
  currency: `NGN`,
 }).format(price.toFixed(2))

 return converted
}

export const getStatus = (statusCode) => {
 switch (statusCode) {
  case `0`:
   return `Pending`
  case `1`:
   return `Canceled`
  case `2`:
   return `In Progress`
  case `3`:
   return `Completed`
 }
}
