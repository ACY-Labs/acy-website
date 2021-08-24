import bullet0 from "../assets/arrow_bullet_orange.png";
import bullet1 from "../assets/cylinder_bullet.png";
import planet from "../assets/planet.png";
import { isMobile } from "react-device-detect";

const TopicText = ({ title, paragraphs, bulletType = 0, useBg = false }) => {
  return (
    <div className="relative">
      {useBg && (
        <img
          src={planet}
          className="absolute top-0 right-0 w-full h-full filter blur-md"
          style={{ zIndex: 0, opacity: 0.2, width: "99%" }}
          alt="bg"
        />
      )}
      <div class="flex items-center relative" style={{ zIndex: 1 }}>
        <img
          src={bulletType === 0 ? bullet0 : bullet1}
          alt="bullet"
          style={{ maxWidth: bulletType ? 20 : 30 }}
          className={`${bulletType ? "ml-2" : ""} mr-3`}
        />
        <h2
          className={`text-lg md:${bulletType ? "text-xl" : "text-3xl"}`}
          style={{ color: "#de5b24" }}
        >
          {title}
        </h2>
      </div>
      <div
        class="relative ml-0 md:ml-3"
        style={{ zIndex: 1, paddingLeft: isMobile ? 0 : 30 }}
      >
        {paragraphs.map((paragraph) => (
          <p style={{ color: "#B5B6B6" }} className="text-sm md:text-xl">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TopicText;