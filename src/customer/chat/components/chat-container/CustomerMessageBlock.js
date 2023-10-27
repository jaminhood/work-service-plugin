const CustomerMessageBlock = ({ message }) => {
 const msgType = message?.chat_sender === `user` ? `justify-end` : `justify-start`

 return (
  <div className={`w-full flex ${msgType}`}>
   {message?.chat_sender === `user` ? (
    <p className="p-3 rounded-lg rounded-br-none my-2 text-[.7rem] font-jost-regular w-2/3 bg-zinc-200 leading-6 text-main-primary">{message?.chat_message}</p>
   ) : (
    <p className="p-3 rounded-lg rounded-bl-none my-2 text-[.7rem] font-jost-regular w-2/3 bg-zinc-100 leading-6 text-main-primary">{message?.chat_message}</p>
   )}
  </div>
 )
}

export default CustomerMessageBlock
