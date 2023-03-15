import React, { useState, useEffect } from "react";
import { Page, Text, Document, StyleSheet, Image } from "@react-pdf/renderer";
import QRCode from "qrcode";

const styles = StyleSheet.create({
  header: {
    fontSize: 12,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    color: "grey",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  qrcode: {
    width: 150,
    height: 150,
    marginLeft: 220,
  },
});

const PdfFile = () => {
  const url = "https://www.google.com"; // Your URL here
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
        <Text style={styles.text}>Have a good trip!</Text>
      </Page>
    </Document>
  );
};

export default PdfFile;
