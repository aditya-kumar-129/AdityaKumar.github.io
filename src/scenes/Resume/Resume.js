import classes from "./Resume.module.css";
import { ReactComponent as FilesIcon } from "../../assets/resume-files.svg";
import { ReactComponent as DownloadIcon } from "../../assets/download.svg";
import { useEffect, useRef, useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import LinerProgress from "../../components/UIElements/LinerProgress/LinerProgress";
import Button from "../../components/UIElements/Button/Button";
import AdityaKumarResume from "../../assets/Aditya_Kumar_Resume.pdf";
import "./styles.css";

//react-pdf
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = AdityaKumarResume;

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);

  useEffect(() => {
    setPdfPageWidth(pdfWrapper.current?.getBoundingClientRect().width || null);
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  };

  return (
    <BaseLayout>
      <div className={classes.content}>
        <div className={classes.header}>
          <h1 className={classes.title}>
            My <br /> Resume
          </h1>

          <div className={classes.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: "auto", width: "15rem" }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={classes.downloadText}> download resume</span>
          <span className={classes.filename}>.pdf</span>
        </Button>

        <div className={classes.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={{
              url: resumeLink,
            }}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1}
            />
          </Document>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
