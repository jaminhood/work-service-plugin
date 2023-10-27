const BottomBarLink = ({ data }) => {
 const url = window.location.href

 return (
  <li>
   <a
    href={`../../ws-customer/${data.path}`}
    className={`no-underline transition-all flex items-center justify-center flex-col duration-300 ease-in-out hover:no-underline focus:no-underline ${
     url.includes(data.path)
      ? "text-main-primary"
      : "text-gray-900 hover:text-main-primary dark:text-gray-50 dark:hover:text-main-primary"
    }`}>
    {data.icon}
    <p className="font-bold text-[.4rem] mt-1">{data.render}</p>
   </a>
  </li>
 )
}

export default BottomBarLink
