import { useLocation, useNavigate } from "react-router-dom";

export default function Summary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <p>No document data found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-purple-400"
        >
          Go Back
        </button>
      </div>
    );
  }

  const {
    filename,
    summary,
    document_type,
    fields,
    confidence_score,
    word_count,
    fraud_flag,
    smart_name
  } = state;

  return (
    <div className="min-h-screen bg-[#0b0f2a] text-white px-6 py-12 flex justify-center">
      <div className="max-w-4xl w-full bg-[#12162c] p-10 rounded-2xl shadow-xl border border-gray-800">

        <h1 className="text-4xl text-purple-400 font-bold mb-6">
          Document Summary
        </h1>

        {/* FILE INFO */}
        <div className="grid grid-cols-2 gap-4 text-gray-300 mb-6">
          {filename && <div><b>File:</b> {filename}</div>}
          <div><b>Document Type:</b> {document_type}</div>
          {smart_name && <div><b>Smart Name:</b> {smart_name}</div>}
          {word_count && <div><b>Word Count:</b> {word_count}</div>}
          {confidence_score && <div><b>Confidence:</b> {confidence_score}</div>}
          {fraud_flag !== undefined && (
            <div>
              <b>Fraud Check:</b>{" "}
              {fraud_flag ? "⚠️ Risky" : "Clean"}
            </div>
          )}
        </div>

        {/* SUMMARY */}
        <div className="bg-black p-6 rounded-xl border border-gray-700 mb-8">
          <h2 className="text-purple-300 font-semibold text-xl mb-3">
            Summary
          </h2>
          <p className="text-gray-300 whitespace-pre-line leading-relaxed">
            {summary}
          </p>
        </div>

        {/* FIELDS */}
        <div>
          <h2 className="text-purple-300 font-semibold text-xl mb-3">
            Extracted Fields
          </h2>

          {Object.keys(fields || {}).length === 0 ? (
            <p className="text-gray-500">No fields extracted.</p>
          ) : (
            Object.entries(fields).map(([key, values]) => (
              <div
                key={key}
                className="mt-3 bg-black p-4 rounded-xl border border-gray-700"
              >
                <strong className="text-purple-300 uppercase">
                  {key.replace("_", " ")}
                </strong>
                <p className="text-gray-300 mt-1">
                  {values.join(", ")}
                </p>
              </div>
            ))
          )}
        </div>

        {/* DOWNLOAD BUTTON */}
        <button
          onClick={() => window.print()}
          className="mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
        >
          Download as PDF
        </button>

      </div>
    </div>
  );
}