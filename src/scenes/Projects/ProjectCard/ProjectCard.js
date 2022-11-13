import classes from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectCard = ({ id, image, title, description }) => {
  return (
    <li className={classes.card}>
      <div className={classes.cardWrapper}>
        <Link
          to={`/project/${id}`}
        >
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: "10rem" }}
            placeholderSrc={image.placeholderSrc}
          />
        </Link>

        <div className={classes.cardBody}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
