import React from "react";

const TruncatedCell = ({ text }: { text: string }) => {
  const maxLength = 20;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard");
      })
      .catch((err) => {
        console.log("Failed to copy text");
      });
  };

  const truncateMiddle = (str: string, maxLength: number) => {
    const strLength = str.length;
    if (strLength <= maxLength) return str;
    const partLength = Math.floor(maxLength / 2);
    return (
      str.substring(0, partLength) +
      "..." +
      str.substring(strLength - partLength, strLength)
    );
  };

  const truncatedText = truncateMiddle(text, maxLength);
  return (
    <td
      className="whitespace-nowrap text-sm text-gray-500"
      title={text}
      onClick={copyToClipboard}
      style={{ cursor: "pointer" }}
    >
      {truncatedText}
    </td>
  );
};

export default TruncatedCell;
