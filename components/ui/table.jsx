import Link from "next/link";
import { useId } from "react";

export const Table = ({ TABLE_HEAD, TABLE_ROWS, className }) => {
  const elementId = useId();

  return (
    <table
      className={`${className}  min-w-max table-auto border border-slate-200`}
      id={elementId}
    >
      <thead>
        <tr>
          <th>Your Data</th>
        </tr>
        <tr>
          {TABLE_HEAD?.map((head) => (
            <th
              key={head}
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-left"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS?.map(({ _id, shortId, redirectUrl, faviconUrl }) => {
          return (
            <tr key={_id} className="border border-slate-300 text-left">
              <td className="flex gap-1">
                {faviconUrl && (
                  <img
                    src={faviconUrl}
                    alt="Favicon"
                    width={16}
                    height={16}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
                <Link
                  href={`http://localhost:3000/api/redirect/${shortId}`}
                  target="_blank"
                >
                  {shortId}
                </Link>
              </td>
              <td className={` bg-blue-gray-50/50`}>{redirectUrl}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
