"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IdeMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 0: Folders closed
    // Step 1: Open app/ directory
    // Step 2: Open dashboard/ directory
    // Step 3: Open page.tsx
    // Step 4: Show code typing / revealing
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1600),
      setTimeout(() => setStep(3), 2400),
      setTimeout(() => setStep(4), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="ide-mockup">
      <div className="ide-header">
        <i /><i /><i />
        <span>caseflow-workspace — Visual Studio Code</span>
      </div>
      <div className="ide-body">
        {/* Sidebar */}
        <div className="ide-sidebar">
          <div className="ide-sidebar-item" style={{ paddingLeft: "12px", color: "var(--ink)", fontWeight: 600 }}>
            EXPLORER
          </div>
          <div className="ide-sidebar-item" style={{ marginTop: "8px" }}>
            <span style={{ transform: step >= 1 ? "rotate(90deg)" : "none", transition: "0.2s" }}>▶</span> app
          </div>
          <AnimatePresence>
            {step >= 1 && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}>
                <div className="ide-sidebar-item" style={{ paddingLeft: "32px" }}>
                  layout.tsx
                </div>
                <div className="ide-sidebar-item" style={{ paddingLeft: "32px" }}>
                  <span style={{ transform: step >= 2 ? "rotate(90deg)" : "none", transition: "0.2s" }}>▶</span> dashboard
                </div>
                <AnimatePresence>
                  {step >= 2 && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}>
                      <div className={`ide-sidebar-item ${step >= 3 ? "active" : ""}`} style={{ paddingLeft: "48px" }}>
                        page.tsx
                      </div>
                      <div className="ide-sidebar-item" style={{ paddingLeft: "48px" }}>
                        layout.tsx
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="ide-sidebar-item">
            <span>▶</span> components
          </div>
          <div className="ide-sidebar-item">
            <span>▶</span> lib
          </div>
        </div>

        {/* Editor */}
        <div className="ide-content">
          <div className="ide-tabs">
            <div className={`ide-tab ${step >= 3 ? "active" : ""}`}>
              page.tsx {step >= 3 && <span style={{ color: "var(--mute)", marginLeft: "4px" }}>×</span>}
            </div>
          </div>
          
          <div className="ide-editor">
            {step >= 4 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <div><span className="cm">// CaseFlow Dashboard - Sindh Education Dept</span></div>
                <br/>
                <div><span className="kw">import</span> {"{"} <span className="var">CaseTable</span> {"}"} <span className="kw">from</span> <span className="str">"@/components/cases"</span>;</div>
                <div><span className="kw">import</span> {"{"} <span className="var">getActiveCases</span> {"}"} <span className="kw">from</span> <span className="str">"@/lib/api"</span>;</div>
                <br/>
                <div><span className="kw">export default async function</span> <span className="fn">Dashboard</span>() {"{"}</div>
                <div style={{ paddingLeft: "16px" }}><span className="kw">const</span> cases = <span className="kw">await</span> <span className="fn">getActiveCases</span>();</div>
                <br/>
                <div style={{ paddingLeft: "16px" }}><span className="kw">return</span> (</div>
                <div style={{ paddingLeft: "32px" }}>&lt;<span className="green">main</span> className=<span className="str">"dashboard-layout"</span>&gt;</div>
                <div style={{ paddingLeft: "48px" }}>&lt;<span className="green">header</span>&gt;</div>
                <div style={{ paddingLeft: "64px" }}>&lt;<span className="green">h1</span>&gt;Legal Cases Overview&lt;/<span className="green">h1</span>&gt;</div>
                <div style={{ paddingLeft: "64px" }}>&lt;<span className="green">p</span>&gt;{'{'}cases.length{'}'} active cases&lt;/<span className="green">p</span>&gt;</div>
                <div style={{ paddingLeft: "48px" }}>&lt;/<span className="green">header</span>&gt;</div>
                <div style={{ paddingLeft: "48px" }}>&lt;<span className="fn">CaseTable</span> data={"{cases}"} /&gt;</div>
                <div style={{ paddingLeft: "32px" }}>&lt;/<span className="green">main</span>&gt;</div>
                <div style={{ paddingLeft: "16px" }}>);</div>
                <div>{"}"}</div>
              </motion.div>
            ) : (
              <div style={{ color: "var(--mute)", textAlign: "center", marginTop: "100px" }}>
                {step >= 3 ? "Loading editor..." : "Select a file to view"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
