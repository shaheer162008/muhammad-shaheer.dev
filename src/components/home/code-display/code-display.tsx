import * as React from "react"
import { cn } from "cn"

interface CodeDisplayProps {
  code: string
  language?: "typescript" | "javascript" | "python" | "bash"
  showLineNumbers?: boolean
  showCopyButton?: boolean
}

export function CodeDisplay({
  code,
  language = "typescript",
  showLineNumbers = true,
  showCopyButton = true,
}: CodeDisplayProps) {
  const lines = code.split("\n")
  const totalLines = lines.length

  return (
    <div className="code-display bg-card border hairline overflow-hidden">
      <div className="code-header hairline-bot">
        <span className="language-tag">{language.toUpperCase()}</span>
        <span className="line-count">{totalLines} Lines</span>
      </div>

      <div className="code-body relative">
        {showLineNumbers && (
          <div className="code-line-numbers">
            {lines.map((line, index) => (
              <div key={index} className="code-line-number">
                {index + 1}
              </div>
            ))}
          </div>
        )}

        <pre
          className={cn(
            "code-pre",
            `language-${language}`,
            showLineNumbers ? "pr-8" : "pr-0"
          )}
        >
          {lines.map((line, index) => (
            <div key={index} className="code-line">
              <span className="line-content">{line}</span>
            </div>
          ))}
        </pre>
      </div>

      {showCopyButton && (
        <div className="code-footer hairline-top">
          <button
            className="copy-button button button-ghost-green inline-flex items-center gap-2"
            onClick={() => navigator.clipboard.writeText(code)}
            aria-label="Copy code"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15l7-7 7 7" />
            </svg>
            Copy
          </button>
        </div>
      )}
    </div>
  )
}