import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
	const [searchText, setSearchText] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchText.length < 3) {
			return toast.error("Search term must be more than 3 characters");
		}
		const match = conversations.find((conversation) =>
			conversation.fullName.toLowerCase().includes(searchText.toLowerCase())
		);
		if (match) {
			setSelectedConversation(match);
			setSearchText("");
		} else toast.error("No such user found");
	};
	return (
		<form className="flex items-center gap-2" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search..."
				className="input input-bordered rounded-full"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button type="submit" className="btn btn-circle bg-cyan-500 text-white">
				<FaSearch className="w-6 h-6 outline-black" />
			</button>
		</form>
	);
};

export default SearchInput;
