import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { authUser } = useAuthContext();
	console.log(selectedConversation);

	useEffect(() => {
		//cleanup function
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="md:min-w-[450px] flex flex-col">
			{!selectedConversation ? (
				<NoChatSelected name={authUser.fullName} />
			) : (
				<>
					<div className="bg-slate-500 px-4 py-2 mb-2">
						<span className="label-text">
							To:
							<span className="text-gray-900 ml-2 font-bold">
								{selectedConversation?.fullName}
							</span>
						</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

const NoChatSelected = ({ name }) => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
				<p>Welcome {`👋 ${name} ❄`}</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-3xl md:text-5xl mt-2 text-center" />
			</div>
		</div>
	);
};

export default MessageContainer;
