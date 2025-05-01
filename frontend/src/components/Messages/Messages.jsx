import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	console.log(messages);
	const lastMessageRef = useRef();
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
		}, 100);
	}, [messages]);
	return (
		<div className="overflow-auto px-4 h-full">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => {
					return (
						<div key={message._id} ref={lastMessageRef}>
							{<Message key={message._id} message={message} />}
						</div>
					);
				})}
			{loading && [
				...Array(3).map((_, id) => {
					<MessageSkeleton key={id} />;
				}),
			]}

			{!loading && messages.length === 0 && (
				<span className="text-cener">
					Send a message to start a new conversation
				</span>
			)}
		</div>
	);
};

export default Messages;
