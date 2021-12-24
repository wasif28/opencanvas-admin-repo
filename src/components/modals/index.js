// import Success from "../../../Assets/success.png";
import "./style.scss"

const ConfirmModal = ({ title, mainBtn, content, cancelModal }) => {
  return (
    <div className="modal-dialog"  role="document">
      <div className="modal-content">
        <div className="modal-body p-0">
          <div className="row p-0 m-0 w-100">
            <div className="col-sm-12 p-0">
              <div
                className="header"
              >
                <button
                  type="button"
                  className="close "
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="" aria-hidden="true">&times;</span>
                </button>
                <h3 className="modal-heading text-center">{title}</h3>
              </div>
              <div className="pop-content content-body py-3">
                <p className="mt-2 text-center px-3 px-lg-5 pt-3">
                  {content}
                </p>
                <ul className="list-inline btn-div text-center px-5 pt-4">
                  <li className="list-inline-item w-100 pb-3">
                    <button className="btn-common w-25 mr-2">{mainBtn}</button>
                    <button onClick={()=>cancelModal()} className="w-25 ml-2 btn shadow-none"><p className="cancel">{"Cancel"}</p></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
