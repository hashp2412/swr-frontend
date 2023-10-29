

const FullPageLoading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-2 z-50 bg-white">
      <div className="">
        <img src="/loading.gif" alt="" />
      </div>
      <div className="animate-pulse">Loading Excellance</div>
    </div>
  );
};

export default FullPageLoading;
