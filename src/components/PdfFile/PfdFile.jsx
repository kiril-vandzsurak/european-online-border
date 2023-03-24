import React, { useState, useEffect } from "react";
import { Page, Text, Document, StyleSheet, Image } from "@react-pdf/renderer";
import QRCode from "qrcode";

const styles = StyleSheet.create({
  header: {
    fontSize: 12,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    color: "black",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  qrcode: {
    width: 200,
    height: 200,
    marginLeft: 190,
  },
  qrHeader: {
    textAlign: "center",
  },

  rules: {
    paddingBottom: 15,
    borderBottom: "1px black solid",
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
});

const PdfFile = () => {
  const url = "test";
  const [qrcodeDataUrl, setQRCodeDataUrl] = useState(null);

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const dataUrl = await QRCode.toDataURL(url);
        setQRCodeDataUrl(dataUrl);
      } catch (err) {
        console.error(err);
      }
    };
    generateQRCode();
  }, [url]);

  return (
    <Document>
      <Page>
        <Text style={styles.header} fixed>
          EUROPEAN ONLINE BORDER
        </Text>
        {qrcodeDataUrl && (
          <Image
            src={`data:image/png;base64,${qrcodeDataUrl.split(",")[1]}`}
            style={styles.qrcode}
          />
        )}
        <Text style={styles.qrHeader}>How to use QR-Code?</Text>
        <Text style={styles.rules}>
          There is single simple rule about using qr-code for crossing a border.
          Firstly, you need to scan a qr-code and a passport on a turnstile
          scanner and then go through a turnstile. That is all you need to do,
          for crossing a border. In case of problems with scanning documents,
          border guards will help you to solve it.
        </Text>
        <Text style={styles.text}>Dear Traveler,</Text>
        <Text style={styles.text}>
          We would like to inform you, that you should be on the border on time,
          which you have provided in the travel form. You can be late maximum
          for 10 minutes, in other case, you will have to cross the border in
          live queue.
        </Text>
        <Text style={styles.text}>
          In addition, do not forget to take your passport, and in case of
          traveling by car, do not forget about documents such as car insurance
          and driving license.
        </Text>
        <Text style={styles.text}>
          Thank you for using our application, which helps you to make your
          travel faster and easier.
        </Text>
        <Text style={styles.text}>We wish you a good journey!</Text>
      </Page>
    </Document>
  );
};

export default PdfFile;
