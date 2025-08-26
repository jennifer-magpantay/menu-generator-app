import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2pdf from "html2pdf.js";

import Fieldset from "./fieldset";
import FormButtonGroup from "./form-buttongroup";

const MenuEditCtas = ({ formData }) => {
  const { menuTitle } = formData;
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current = document.querySelector("#menu-preview");
  }, []);

  const handlePrint = useReactToPrint({
    contentRef,
    pageStyle: "@page { size: A4; margin: 20mm; }",
  });

  const handlePDFDownload = useReactToPrint({
    contentRef,
    print: async (printIframe) => {
      const document = printIframe.contentDocument;
      if (document) {
        const html = contentRef.current;
        const formattedMenuTitle = menuTitle.replace(/\s+/g, "-").toLowerCase();
        const options = {
          margin: 20,
          filename: `${formattedMenuTitle}.pdf`,
        };
        await html2pdf().from(html).set(options).save();
      }
    },
  });

  return (
    <Fieldset legend="Print or Save">
      <FormButtonGroup
        options={[
          { value: "print", label: "Print Menu" },
          { value: "pdf", label: "Generate PDF" },
        ]}
        onClick={(e) => {
          const targetId = e.target.id;
          if (targetId === "print") {
            handlePrint();
          } else {
            handlePDFDownload();
          }
        }}
      />
    </Fieldset>
  );
};

MenuEditCtas.propTypes = {};

export default MenuEditCtas;
