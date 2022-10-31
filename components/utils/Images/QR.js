// import Image from "next/image";
import QRCode from "react-qr-code";

const QR = () => {
  return (
    // <Image src="/DummyQR.svg" alt="logo" width={200} height={200} />
    <QRCode
      value="hihihihihihihihiih"
      size={200}
      includeMargin={false}
    />
  );
};

export default QR;
