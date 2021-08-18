import { Header, Footer } from "../components";
import privacyPolicy from "../texts/privacyPolicy";
import { MdTextField } from "../components";

const Privacy = () => {
  return (
    <div style={{ backgroundColor: "#2a292e" }}>
      <Header></Header>
      <MdTextField text={privacyPolicy}></MdTextField>
      <Footer></Footer>
    </div>
  );
};

export default Privacy;
