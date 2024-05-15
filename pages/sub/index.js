import { useEffect, useState } from "react";
import Modal from "../Modal";

export default function SubPage() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, []);
  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div>
        <div>asd</div>
      </div>
    </div>
  );
}
