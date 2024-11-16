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
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS?.map(({ id, name, message }) => {
          return (
            <tr key={id} className="border border-slate-300 text-center">
              <td>{name}</td>
              <td className={` bg-blue-gray-50/50`}>{message}</td>
              <td className={` bg-blue-gray-50/50`}>Edit</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
