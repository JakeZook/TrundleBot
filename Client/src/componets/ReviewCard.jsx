import "/src/componets/ReviewCard.css";

const ReviewCard = ({ name, date, rating, review }) => {
	return (
		<div className="review-card-container bg-white m-5 p-6 rounded-lg shadow-md">
			<div className="mb-4">
				<span className="text-lg text-primary font-semibold">{name}</span>
				<span className="text-secondary ml-2">{date}</span>
			</div>
			<div className="mb-4">
				<span className="text-yellow-500">{"★".repeat(rating)}</span>
				<span className="text-gray-500 ml-2">{rating}/5</span>
			</div>
			<div className="text-gray-800 review-content">{review}</div>
		</div>
	);
};

export default ReviewCard;
