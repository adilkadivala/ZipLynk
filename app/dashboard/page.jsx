"use client";

// Library imports
import React, { useEffect, useState } from "react";

// Components imports
import { Table } from "@/components/ui/table";

// hooks
import { Fetch } from "../../hooks/getNetwork";
import { getBaseDomain, getFaviconUrl } from "@/utils/urlUtils";

const Dashboard = () => {
  // hooks
  const { getData, isLoading, error } = Fetch();

  // states
  const [url, setUrl] = useState([]);
  console.log(url);

  const getUrls = async () => {
    const data = await getData("/api/get-all-urls");
    const formattedData = data.urls.map((item) => ({
      ...item,
      redirectUrl: getBaseDomain(item.redirectUrl),
      faviconUrl: getFaviconUrl(item.redirectUrl),
    }));
    setUrl(formattedData);
  };

  useEffect(() => {
    getUrls();
  }, []);

  const Table_Head = ["Short-url", "Redirected"];

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : url?.length > 0 ? (
        <div>
          <Table
            TABLE_HEAD={Table_Head}
            TABLE_ROWS={url}
            className="w-1/2"
            key={url._id}
          />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Dashboard;
