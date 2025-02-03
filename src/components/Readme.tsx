import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Readme = ({ repo }: { repo: string }) => {
  const [readme, setReadme] = useState<string | null>(null);

  useEffect(() => {
      const fetchReadme = async () => {
          const response = await fetch(`https://api.github.com/repos/l-merta/${repo}/readme`, {
              headers: { Accept: "application/vnd.github.v3+json" }
          });
          const data = await response.json();
          if (data.content) {
              // Properly decode UTF-8 characters
              const decodedContent = new TextDecoder("utf-8").decode(
                  Uint8Array.from(atob(data.content), (c) => c.charCodeAt(0))
              );
              setReadme(decodedContent);
          }
      };
      fetchReadme();
  }, [repo]);

  return (
    <div className="readme">
      <div className="header">
        <i className="fa-light fa-book-open"></i>
        <span>README</span>
      </div>
      <div className="file">
        {readme ? <ReactMarkdown>{readme}</ReactMarkdown> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Readme;
