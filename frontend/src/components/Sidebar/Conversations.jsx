import React, { useEffect } from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();

	return (
		<div className="flex flex-col overflow-auto">
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastConversation={idx === conversation.length - 1}
				/>
			))}
			{loading ? <span className="loading loading-spinner"></span> : ""}
		</div>
	);
};

export default Conversations;
