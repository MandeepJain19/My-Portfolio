import Button from "./Button";

function ConfirmationDialog({ onClick, children }) {
  return (
    <>
      <div className="bg-slate-800">
        <div className="space-y-4 px-6 py-6 text-center">
          <div className="text-xl">{children}</div>
          <Button click={onClick}>Close</Button>
        </div>
      </div>
    </>
  );
}

export default ConfirmationDialog;
