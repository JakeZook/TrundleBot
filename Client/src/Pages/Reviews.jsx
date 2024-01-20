import ReviewCard from "../componets/ReviewCard";

function Reviews() {
	const reviewData = [
		{
			id: 0,
			name: "John Doe",
			date: "12/22/23",
			rating: 4,
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 1,
			name: "Jane Doe",
			date: "12/22/23",
			rating: 1,
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 2,
			name: "Poop Wiener",
			date: "12/22/23",
			rating: 5,
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 3,
			name: "Fart Person",
			date: "12/22/23",
			rating: 2,
			review:
				"lorems ipsums dolors sit amets, consecteturs adipiscings elits. Seds dos eiusmodss temporss incididuntss ut labores et dolores magnas aliquaes. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	return (
		<div className="flex justify-center items-center h-screen bg-base-100">
			{reviewData.map((review) => (
				<ReviewCard
					name={review.name}
					date={review.date}
					rating={review.rating}
					review={review.review}
					key={review.id}
				/>
			))}
		</div>
	);
}

export default Reviews;
