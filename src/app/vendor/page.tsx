import React from "react";

const Vendor = () => {
  const columns = ["Wallet", "Name", "Amount", "Timestamp"];
  const rows = [
    {
      wallet: "0x8b390b35CdFc92396396A8EC0559842de37F76C8",
      name: "Sushant Tripathee",
      amount: 10,
      timestamp: "Jan 2025, 14:25",
    },
  ];

  return (
    <>
      <div className="w-[90%] mx-auto mt-6">
        <h1 className="text-sm text-gray-500">Vendor Transactions</h1>
        <div className="overflow-x-auto p-4 rounded-lg shadow-md mt-4">
          <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.map((row, index) => (
                <tr key={index}>
                  {columns.map((col) => (
                    <td
                      key={col}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {
                        //@ts-ignore
                        row[col.toLowerCase()]
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Vendor;
