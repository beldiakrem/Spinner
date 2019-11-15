import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (
    <div className="loading">
      <img src="https://thumbs.gfycat.com/LoneDetailedFairybluebird-max-1mb.gif " alt="spinner"  />
      </div>
    );
  }
}
export default WithLoading;