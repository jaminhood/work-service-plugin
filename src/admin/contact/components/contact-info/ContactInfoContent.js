const ContactInfoContent = props => {
	const {
		location,
		locationLink,
		email,
		facebook,
		facebookLink,
		whatsApp,
		whatsAppLink,
		phoneNumber,
		linkedIn,
		linkedInLink,
		instagram,
		instagramLink,
		setLocation,
		setLocationLink,
		setEmail,
		setFacebook,
		setFacebookLink,
		setWhatsApp,
		setWhatsAppLink,
		setPhoneNumber,
		setLinkedIn,
		setLinkedInLink,
		setInstagram,
		setInstagramLink,
	} = props

	return (
		<>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">Location:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={location}
					onInput={e => setLocation(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">Location Link:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={locationLink}
					onInput={e => setLocationLink(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">E-mail:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={email}
					onInput={e => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">Facebook:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={facebook}
					onInput={e => setFacebook(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">Facebook Link:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={facebookLink}
					onInput={e => setFacebookLink(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">WhatsApp:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={whatsApp}
					onInput={e => setWhatsApp(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">WhatsApp Link:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={whatsAppLink}
					onInput={e => setWhatsAppLink(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">Phone Number:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={phoneNumber}
					onInput={e => setPhoneNumber(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">LinkedIn:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={linkedIn}
					onInput={e => setLinkedIn(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">LinkedIn Link:</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={linkedInLink}
					onInput={e => setLinkedInLink(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">Instagram:</h4>
				<input
					type="text"
					placeholder="Work Service"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={instagram}
					onInput={e => setInstagram(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2 my-2">
				<h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">Instagram Link:</h4>
				<input
					type="text"
					placeholder="Work Service"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={instagramLink}
					onInput={e => setInstagramLink(e.target.value)}
				/>
			</div>
		</>
	)
}

export { ContactInfoContent }
