import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = authUser._id === message.senderId;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe
		? authUser.profilePic
		: selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-sky-500" : "";
	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src={`${profilePic}`} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor}`}>
				{message.message}
			</div>
			<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
				{extractTime(message.createdAt)}
			</div>
		</div>
	);
};

export default Message;
