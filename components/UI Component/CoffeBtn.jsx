import React from "react";
import { GiCoffeeCup } from "react-icons/gi";

const CoffeBtn = () => {
  const linkToCopy = "00020101021126580014br.gov.bcb.pix013667653408-4c99-44ac-ab00-a715405ad4e852040000530398654043.505802BR5916MWEBWORKS MASTER6013CONCEICAO DA 62070503***63042C5B"; // Texto fixo a ser copiado

  const handleCopyLink = () => {
    // Use the Clipboard API to copy the link
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        alert("Link copied!");
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
        alert("Failed to copy link.");
      });
  };

  const openPopup = () => {
    const largura = 350;
    const altura = 500; // Altura aumentada para acomodar o input e o botão
    const esquerda = window.innerWidth / 2 - largura / 2;
    const topo = window.innerHeight / 2 - altura / 2;

    const janelaPopup = window.open(
      "",
      "_blank",
      `width=${largura},height=${altura},left=${esquerda},top=${topo}`
    );

    // Criar o conteúdo para a janela pop-up
    const conteudo = `
      <div style="text-align: center;">
        <p style="font-size: 20px;">QR Code Pix Valor: R$3,50(opcional)</p>
        <img src="qrcode.jpg" alt="Café" width="200" height="200" />

        <p style="font-size: 20px;">Link da Chave Pix</p>
        <input type="text" id="textToCopy" style="width: 80%; margin: 3px auto;" value="${linkToCopy}" readOnly />

        <button class="buttonHover" style="display: block; margin: 10px auto 0;" onclick="handleCopyLink()"> <!-- Correção aqui -->
          Copiar link
        </button>
      </div>
    `;

    // Escrever o conteúdo na janela pop-up
    janelaPopup.document.write(conteudo);
    janelaPopup.document.close();
  };

  return (
    <a
      className="resetButton transition-all flex items-center justify-center bg-green-400 group h-12 overflow-hidden relative"
      onClick={openPopup}
    >
      <button style={{ color: "black" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          Pague-me um café <GiCoffeeCup className="ml-2 h-6 w-6" />
        </span>
      </button>
    </a>
  );
};

export default CoffeBtn;
