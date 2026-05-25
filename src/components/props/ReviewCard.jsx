const ReviewCard = ({ author, rating, text, date }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <h4>{author}</h4>
        <span className="rating">⭐ {rating}/5</span>
      </div>
      <p className="review-text">"{text}"</p>
      <span className="review-date">{date}</span>
    </div>
  );
};

export default ReviewCard;
