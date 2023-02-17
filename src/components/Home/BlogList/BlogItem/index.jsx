import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,

    cover,
    category,
    id,
    description2,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={cover} alt="cover" />

      <Chip label={category} />
      <h3 style={{ color: "#C06C84" }}>{title}</h3>
      <div className="blogItem-desc">
        <div>{category}</div>
        {description}
      </div>

      <footer>
        <div className="blogItem-author">
          <div>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          Read more
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
