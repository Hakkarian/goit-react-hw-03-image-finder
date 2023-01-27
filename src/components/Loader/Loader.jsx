import { CenterCss } from "components/App/App.styled";
import { MutatingDots } from "react-loader-spinner"
const Loader = () => (
  <CenterCss>
    <MutatingDots
      height="100"
      width="100"
      color="blue"
      secondaryColor="blue"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </CenterCss>
);

export default Loader;