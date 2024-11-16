// Library important
import React from "react";

// components imports
import { Table } from "@/components/ui/table";

const Dashboard = () => {
  const Table_Head = ["Name", "Message", "Actions"];
  const Table_Row = [
    { id: "1", name: "user", message: "new user", actions: "edit" },
    { id: "2", name: "user", message: "new user", actions: "edit" },
    { id: "3", name: "user", message: "new user", actions: "edit" },
    { id: "4", name: "user", message: "new user", actions: "edit" },
    { id: "5", name: "user", message: "new user", actions: "edit" },
    { id: "6", name: "user", message: "new user", actions: "edit" },
    { id: "7", name: "user", message: "new user", actions: "edit" },
    { id: "8", name: "user", message: "new user", actions: "edit" },
    { id: "9", name: "user", message: "new user", actions: "edit" },
    { id: "11", name: "user", message: "new user", actions: "edit" },
    { id: "12", name: "user", message: "new user", actions: "edit" },
    { id: "13", name: "user", message: "new user", actions: "edit" },
    { id: "14", name: "user", message: "new user", actions: "edit" },
  ];

  return (
    <>
      <div>Dashboard page</div>
      {Table_Row.length > 0 ? (
        <div>
          <Table
            TABLE_HEAD={Table_Head}
            TABLE_ROWS={Table_Row}
            key={Table_Row.id}
          />
        </div>
      ) : (
        <p>No data aviaklable</p>
      )}
    </>
  );
};

export default Dashboard;
