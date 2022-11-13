import classes from "./ModalProjectCard.module.css";
import { BiLinkExternal } from "react-icons/bi";
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/UIElements/Button/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useModal } from "../../../hooks/modalHook";
import { PROJECTS } from "../../../constants/projects";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, links, technologies } = PROJECTS.find(
    (p) => id === p.id
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, [toggleModal]);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={classes.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          src={image.src}
          effect="blur"
          width="100%"
          wrapperClassName={classes.image}
          placeholderSrc={image.placeholderSrc}
        />

        <div className={classes.cardBody}>
          <h3 className={classes.title}>{title}</h3>

          <div className={classes.technologies}>
            {technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className={classes.cardFooter}>
          <Button
            style={{ width: "12rem" }}
            className="primary"
            href={links.site}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; View project
          </Button>

          <Button
            style={{ width: "12rem" }}
            className="primary"
            href={links.repo}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; Know more
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
