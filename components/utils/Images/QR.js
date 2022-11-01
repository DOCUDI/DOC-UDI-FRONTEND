// import Image from "next/image";
import QRCode from "react-qr-code";
import { useSelector } from 'react-redux';

const QR = () => {
  const id = useSelector((state) => state.login.user._id);
  return (
    // <Image src="/DummyQR.svg" alt="logo" width={200} height={200} />
    <QRCode
      value={id}
      size={200}
      includeMargin={false}
    />
  );
};

export default QR;
