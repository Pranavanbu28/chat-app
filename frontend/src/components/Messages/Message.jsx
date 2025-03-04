import React from "react";

const Message = () => {
	return (
		<div className="chat chat-end">
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src="https://gravatar.com/avatar/392dcd4d659a97572c7f58f877160ca3?s=400&d=robohash&r=x" />
				</div>
			</div>
			<div className="chat-bubble text-white bg-cyan-600">Hallo! wie gehts</div>
			<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
				12:42
			</div>
		</div>
	);
};

export default Message;
