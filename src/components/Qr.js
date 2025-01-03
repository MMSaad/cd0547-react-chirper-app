import { connect } from "react-redux";
import CryptoJS from "crypto-js";
import { useState } from "react";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import { useEffect } from "react";

const Qr = () => {
  let [data, setData] = useState("");

  useEffect(() => {
    doEncrypt();
    setInterval(() => {
  
      doEncrypt();
    }, 5000);
  }, []);

function encrypt(plaintext, secret) {
  var key = CryptoJS.enc.Utf8.parse(secret);
  var iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4)); // 16 bytes IV



  // Encrypt the plaintext
  var cipherText = CryptoJS.AES.encrypt(plaintext, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  // Combine IV and ciphertext (Base64 encoding for compatibility)
  var combined =
    CryptoJS.enc.Base64.stringify(iv) + ":" + cipherText.toString();
  return combined;
}


  var doEncrypt = () => {
    setData(
      encrypt(
        JSON.stringify({
          Date: new Date().toISOString(),
          Random1: Math.random(),
          Random2: Math.random(),
          Random3: Math.random(),
          Tag: "E28011704000021BACBE7D28",
        }),
        "YWhtb3VkbWFobW91ZG1haA=="
      )
    );
  };

  return (
    <div className="row">
      <QRCodeSVG value={data} size="256" />
    </div>
  );
};

export default connect()(Qr);
