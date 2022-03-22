import Modal from "../modal/Modal";
import Connected from "./Connected";
import Connecting from "./connecting";
import MetaMaskModal from "./MetaMaskModal";

interface Iprops {
  show: any;
  hide: any;
  state: any;
  setstate: any;
}
const Popups = ({ show, hide, state, setstate }: Iprops) => {
  return (
    <div>
      <Modal
        show={show}
        hide={hide}
        state={state}
        setstate={setstate}
        className=""
      >
        {(() => {
          switch (state) {
            case 1: {
              return <MetaMaskModal setstate={setstate} />;
            }
            case 2: {
              return <Connecting setstate={setstate} />;
            }
            case 3: {
              return <Connected />;
            }
            default:
              break;
          }
        })()}
      </Modal>
    </div>
  );
};

export default Popups;
