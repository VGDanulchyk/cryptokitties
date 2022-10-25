import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={1.5}
    width={300}
    height={140}
    viewBox="0 0 300 200"
    backgroundColor="#e6e0e0"
    foregroundColor="#dac74e"
    {...props}
  >
    <rect x="20" y="20" rx="4" ry="4" width="90" height="20" />
    <rect x="20" y="53" rx="4" ry="4" width="109" height="20" />
    <rect x="20" y="83" rx="4" ry="4" width="80" height="20" />
    <circle cx="230" cy="70" r="60" />
  </ContentLoader>
);

export default Skeleton;
