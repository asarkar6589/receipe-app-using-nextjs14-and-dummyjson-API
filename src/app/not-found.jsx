import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>This Page Cannot be Found</h1>
      <Link href="/">Go To Home</Link>
    </div>
  );
};

export default NotFound;
