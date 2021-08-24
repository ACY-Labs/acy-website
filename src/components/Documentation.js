import { useMemo } from "react";
import { TabLink } from ".";
import { HorizontalLogo } from "../atoms";
import litepaper from "../assets/litepaper.png";
import hlitepaper from "../assets/litepaper_hover.png";
import gitbook from "../assets/gitbook.png";
import hgitbook from "../assets/gitbook_hover.png";
import github from "../assets/github.png";
import hgithub from "../assets/github_hover.png";
import arrowBullet from "../assets/arrow_bullet.png";
import { useMediaPredicate } from "react-media-hook";

const Documentation = () => {
  let smallerThan568 = useMediaPredicate("(max-width: 567px)");

  let data = useMemo(() => [
    {
      title: "What is ACY Finance",
      content: `Learn about the core concepts of the 
                ACY protocol. Swaps, Pools, 
                Concentrated Liquidity and more.`,

      logoText: "Litepaper",
      src: litepaper,
      src_hover: hlitepaper,
      link: "/",
    },
    {
      title: "Guides, Rules and FAQs",
      content: `Learn about the details of ACY Finance,
        including guides, product, governance rules, 
        tokenomics and FAQs.`,

      logoText: "GitBook",
      src: gitbook,
      src_hover: hgitbook,
      link: "https://acy-finance.gitbook.io/acy-finance/",
    },
    {
      title: "Smart contract overview",
      content: `Learn about the architecture of the 
        ACY protocol smart contracts made 
        up of the Core and Periphary libraries.`,

      logoText: "GitHub",
      src: github,
      src_hover: hgithub,
      link: "https://github.com/ACY-Labs",
    },
  ]);
  return (
    <div className="my-20">
      <div className="flex items-center text-gray-100 mb-5">
        <img
          src={arrowBullet}
          style={{ maxWidth: 40 }}
          alt="arrow"
          className="mr-3"
        />
        <span
          className="font-medium"
          style={{ fontSize: smallerThan568 ? 20 : 32 }}
        >
          DOCUMENTATION
        </span>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 md:gap-y-0">
        {data.map((item) => (
          <TabLink title={item.title} content={item.content} link={item.link}>
            <HorizontalLogo
              src={item.src}
              src_hover={item.src_hover}
              logoText={item.logoText}
            ></HorizontalLogo>
          </TabLink>
        ))}
      </div>
    </div>
  );
};

export default Documentation;