import React from "react";
import { Share2, Star, Eye,Bookmark } from "lucide-react";

function NewsCard({ news }) {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags
  } = news;

  const { name, published_date, img } = author;

  const formattedDate = new Date(published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-sm  ">
      {/* Header */}
      <div className="py-3 px-2 flex justify-between items-center bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="gap-0">
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3">   
        <Bookmark className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        <Share2 className="text-gray-400 hover:text-gray-600 cursor-pointer" />
       </div>
      </div>
     
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full rounded-lg object-cover h-48"
      />

      {/* Tags */}
      <p className="text-xs text-gray-500">
        {formattedDate} | Tag Cloud Tags:{" "}
        {tags.map((tag, index) => (
          <span key={index} className="text-gray-600">
            {tag}
            {index !== tags.length - 1 && ", "}
          </span>
        ))}
      </p>

      {/* Details */}
      <p className="text-sm text-gray-700">
        {details.slice(0, 200)}...
        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
          {" "}
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-4 h-4 ${
                idx < rating.number ? "text-orange-400 fill-orange-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
